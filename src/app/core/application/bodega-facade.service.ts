import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, map, merge, of, startWith, switchMap, tap } from 'rxjs';
import { Producto, Categoria, Movimiento, TipoMovimiento, AlertaStock, ResumenBodega } from '../domain/models';
import type { ModuloActividad, AccionActividad } from '../domain/models';
import { PRODUCTO_REPOSITORY, ProductoRepository, CATEGORIA_REPOSITORY, CategoriaRepository, MOVIMIENTO_REPOSITORY, MovimientoRepository, ACTIVIDAD_REPOSITORY, ActividadRepository } from '../domain/ports';
import { AuthFacadeService } from './auth-facade.service';

@Injectable({ providedIn: 'root' })
export class BodegaFacadeService {
  private _productosChanged$ = new Subject<void>();

  /** Emite cada vez que se crea, actualiza o elimina un producto */
  alertasStock$ = this._productosChanged$.pipe(
    startWith(undefined),
    switchMap(() => this.getAlertasStock())
  );

  constructor(
    @Inject(PRODUCTO_REPOSITORY) private productoRepo: ProductoRepository,
    @Inject(CATEGORIA_REPOSITORY) private categoriaRepo: CategoriaRepository,
    @Inject(MOVIMIENTO_REPOSITORY) private movimientoRepo: MovimientoRepository,
    @Inject(ACTIVIDAD_REPOSITORY) private actividadRepo: ActividadRepository,
    private authFacade: AuthFacadeService
  ) {}

  // ─── Helpers de logging ─────────────────────────────────
  private log(accion: AccionActividad, modulo: ModuloActividad, detalle: string) {
    const user = this.authFacade.getUsuarioActual();
    this.actividadRepo.registrar({
      usuario: user?.nombre ?? 'Sistema',
      usuarioAvatar: user?.avatar,
      accion, modulo, detalle,
      fecha: new Date()
    }).subscribe(); // fire & forget
  }

  /** Permite a otros servicios/componentes registrar actividad externamente */
  registrarActividad(accion: AccionActividad, modulo: ModuloActividad, detalle: string) {
    this.log(accion, modulo, detalle);
  }

  // ─── Actividad ──────────────────────────────────────────
  getActividades() { return this.actividadRepo.obtenerTodos(); }
  getActividadesPorModulo(modulo: ModuloActividad) { return this.actividadRepo.obtenerPorModulo(modulo); }

  // ─── Productos ──────────────────────────────────────────
  getProductos() { return this.productoRepo.obtenerTodos(); }
  getProducto(id: number) { return this.productoRepo.obtenerPorId(id); }
  crearProducto(p: Omit<Producto, 'id'>) {
    return this.productoRepo.crear(p).pipe(
      tap(prod => {
        this._productosChanged$.next();
        this.log('crear', 'inventario', `Creó producto "${prod.nombre}" (${prod.codigo})`);
      })
    );
  }
  actualizarProducto(p: Producto) {
    return this.productoRepo.actualizar(p).pipe(
      tap(prod => {
        this._productosChanged$.next();
        this.log('editar', 'inventario', `Editó producto "${prod.nombre}" — Stock: ${prod.stockActual}`);
      })
    );
  }
  eliminarProducto(id: number) {
    // Capturamos info antes de borrar
    const productoNombre = `ID ${id}`;
    return this.productoRepo.eliminar(id).pipe(
      tap(() => {
        this._productosChanged$.next();
        this.log('eliminar', 'inventario', `Eliminó producto ${productoNombre}`);
      })
    );
  }
  buscarProductos(termino: string) { return this.productoRepo.buscar(termino); }

  // ─── Categorías ─────────────────────────────────────────
  getCategorias() { return this.categoriaRepo.obtenerTodas(); }
  crearCategoria(c: Omit<Categoria, 'id'>) {
    return this.categoriaRepo.crear(c).pipe(
      tap(cat => this.log('crear', 'categorias', `Creó categoría "${cat.nombre}"`))
    );
  }
  actualizarCategoria(c: Categoria) {
    return this.categoriaRepo.actualizar(c).pipe(
      tap(cat => this.log('editar', 'categorias', `Editó categoría "${cat.nombre}"`))
    );
  }
  eliminarCategoria(id: number) {
    return this.categoriaRepo.eliminar(id).pipe(
      tap(() => this.log('eliminar', 'categorias', `Eliminó categoría ID ${id}`))
    );
  }

  // ─── Movimientos ────────────────────────────────────────
  getMovimientos() { return this.movimientoRepo.obtenerTodos(); }
  getMovimientosPorProducto(id: number) { return this.movimientoRepo.obtenerPorProducto(id); }
  getMovimientosPorTipo(tipo: TipoMovimiento) { return this.movimientoRepo.obtenerPorTipo(tipo); }
  crearMovimiento(m: Omit<Movimiento, 'id'>) {
    return this.movimientoRepo.crear(m).pipe(
      tap(mov => {
        const tipoLabel = mov.tipo === 'entrada' ? 'Entrada' : mov.tipo === 'salida' ? 'Salida' : 'Ajuste';
        this.log('crear', 'movimientos', `${tipoLabel} de ${mov.cantidad} uds. — "${mov.productoNombre}" — ${mov.motivo}`);
      })
    );
  }

  // ─── Lógica de negocio: alertas ─────────────────────────
  getAlertasStock(): Observable<AlertaStock[]> {
    return this.productoRepo.obtenerTodos().pipe(
      map(productos => {
        const alertas: AlertaStock[] = [];
        for (const p of productos) {
          if (p.stockActual === 0 || p.stockActual <= p.stockMinimo * 0.3) {
            alertas.push({
              productoId: p.id, productoNombre: p.nombre,
              productoCodigo: p.codigo, stockActual: p.stockActual,
              stockMinimo: p.stockMinimo, tipo: 'critico', ubicacion: p.ubicacion
            });
          } else if (p.stockActual <= p.stockMinimo) {
            alertas.push({
              productoId: p.id, productoNombre: p.nombre,
              productoCodigo: p.codigo, stockActual: p.stockActual,
              stockMinimo: p.stockMinimo, tipo: 'bajo', ubicacion: p.ubicacion
            });
          } else if (p.stockActual > p.stockMaximo) {
            alertas.push({
              productoId: p.id, productoNombre: p.nombre,
              productoCodigo: p.codigo, stockActual: p.stockActual,
              stockMinimo: p.stockMinimo, tipo: 'sobrestock', ubicacion: p.ubicacion
            });
          }
        }
        return alertas;
      })
    );
  }

  // ─── Lógica de negocio: resumen ─────────────────────────
  getResumenBodega(): Observable<ResumenBodega> {
    return this.productoRepo.obtenerTodos().pipe(
      map(productos => {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        return {
          totalProductos: productos.length,
          totalCategorias: new Set(productos.map(p => p.categoriaId)).size,
          valorInventario: productos.reduce((sum, p) => sum + (p.stockActual * p.precioUnitario), 0),
          productosStockBajo: productos.filter(p => p.stockActual <= p.stockMinimo && p.stockActual > 0).length,
          productosStockCritico: productos.filter(p => p.stockActual === 0 || p.stockActual <= p.stockMinimo * 0.3).length,
          movimientosHoy: 3,
          entradasMes: 5,
          salidasMes: 4
        };
      })
    );
  }
}

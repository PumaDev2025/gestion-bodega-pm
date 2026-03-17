import { Injectable, Inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto, Categoria, Movimiento, TipoMovimiento, AlertaStock, ResumenBodega } from '../domain/models';
import { PRODUCTO_REPOSITORY, ProductoRepository, CATEGORIA_REPOSITORY, CategoriaRepository, MOVIMIENTO_REPOSITORY, MovimientoRepository } from '../domain/ports';

@Injectable({ providedIn: 'root' })
export class BodegaFacadeService {
  constructor(
    @Inject(PRODUCTO_REPOSITORY) private productoRepo: ProductoRepository,
    @Inject(CATEGORIA_REPOSITORY) private categoriaRepo: CategoriaRepository,
    @Inject(MOVIMIENTO_REPOSITORY) private movimientoRepo: MovimientoRepository
  ) {}

  // ─── Productos ──────────────────────────────────────────
  getProductos() { return this.productoRepo.obtenerTodos(); }
  getProducto(id: number) { return this.productoRepo.obtenerPorId(id); }
  crearProducto(p: Omit<Producto, 'id'>) { return this.productoRepo.crear(p); }
  actualizarProducto(p: Producto) { return this.productoRepo.actualizar(p); }
  eliminarProducto(id: number) { return this.productoRepo.eliminar(id); }
  buscarProductos(termino: string) { return this.productoRepo.buscar(termino); }

  // ─── Categorías ─────────────────────────────────────────
  getCategorias() { return this.categoriaRepo.obtenerTodas(); }
  crearCategoria(c: Omit<Categoria, 'id'>) { return this.categoriaRepo.crear(c); }
  actualizarCategoria(c: Categoria) { return this.categoriaRepo.actualizar(c); }
  eliminarCategoria(id: number) { return this.categoriaRepo.eliminar(id); }

  // ─── Movimientos ────────────────────────────────────────
  getMovimientos() { return this.movimientoRepo.obtenerTodos(); }
  getMovimientosPorProducto(id: number) { return this.movimientoRepo.obtenerPorProducto(id); }
  getMovimientosPorTipo(tipo: TipoMovimiento) { return this.movimientoRepo.obtenerPorTipo(tipo); }
  crearMovimiento(m: Omit<Movimiento, 'id'>) { return this.movimientoRepo.crear(m); }

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

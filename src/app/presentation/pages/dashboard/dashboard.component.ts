import { Component, OnInit, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ClpPipe } from '../../shared/pipes/clp.pipe';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { ProyectoStateService } from '../../../core/application/proyecto-state.service';
import { AlertaStock, ResumenBodega, Movimiento, Producto } from '../../../core/domain/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent, ClpPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  allProductos = signal<Producto[]>([]);
  allAlertas = signal<AlertaStock[]>([]);
  allMovimientos = signal<Movimiento[]>([]);
  loading = signal(true);

  /** Alertas filtradas por proyecto activo */
  alertas = computed(() => {
    const ids = this.proyectoState.getProductIdsParaProyecto(this.allMovimientos());
    if (!ids) return this.allAlertas();
    return this.allAlertas().filter(a => ids.has(a.productoId));
  });

  movimientos = computed(() => {
    const proyecto = this.proyectoState.seleccionado();
    const todos = this.allMovimientos();
    const filtrados = proyecto === 'TODOS'
      ? todos
      : todos.filter(m => m.proyecto?.startsWith(proyecto) || m.motivo?.includes(proyecto));
    return filtrados.slice(-8).reverse();
  });

  /** Resumen reactivo calculado desde los productos del proyecto activo */
  resumen = computed((): ResumenBodega => {
    const productos = this.proyectoState.filtrarProductosPorProyecto(this.allProductos());
    const movsFiltrados = this.proyectoState.seleccionado() === 'TODOS'
      ? this.allMovimientos()
      : this.allMovimientos().filter(m =>
          m.proyecto?.startsWith(this.proyectoState.seleccionado()) ||
          m.motivo?.includes(this.proyectoState.seleccionado()));
    const hoy = new Date(); hoy.setHours(0,0,0,0);
    const hoyStr = hoy.toDateString();
    return {
      totalProductos: productos.length,
      totalCategorias: new Set(productos.map(p => p.categoriaId)).size,
      valorInventario: productos.reduce((s, p) => s + p.stockActual * p.precioUnitario, 0),
      productosStockBajo: productos.filter(p => p.stockActual <= p.stockMinimo && p.stockActual > 0).length,
      productosStockCritico: productos.filter(p => p.stockActual === 0 || p.stockActual <= p.stockMinimo * 0.3).length,
      movimientosHoy: movsFiltrados.filter(m => new Date(m.fecha).toDateString() === hoyStr).length,
      entradasMes: movsFiltrados.filter(m => m.tipo === 'entrada').length,
      salidasMes: movsFiltrados.filter(m => m.tipo === 'salida').length
    };
  });

  constructor(
    private facade: BodegaFacadeService,
    readonly proyectoState: ProyectoStateService
  ) {}

  /** Productos del proyecto activo (reactivo al selector) */
  private productosFiltrados = computed(() =>
    this.proyectoState.filtrarProductosPorProyecto(this.allProductos())
  );

  /** Distribución por categoría: stock total y porcentaje respecto al mayor */
  distribucionCategorias = computed(() => {
    const prods = this.productosFiltrados();
    const mapa = new Map<number, { nombre: string; icono: string; color: string; stock: number; max: number }>();
    for (const p of prods) {
      const prev = mapa.get(p.categoriaId);
      if (prev) {
        prev.stock += p.stockActual;
        prev.max   += p.stockMaximo;
      } else {
        mapa.set(p.categoriaId, {
          nombre: p.categoriaNombre ?? '',
          icono: this.iconoCat(p.categoriaId),
          color: this.colorCat(p.categoriaId),
          stock: p.stockActual,
          max:   p.stockMaximo
        });
      }
    }
    const lista = [...mapa.values()].sort((a, b) => b.stock - a.stock).slice(0, 6);
    const maxStock = lista[0]?.stock || 1;
    return lista.map(c => ({
      ...c,
      pct: Math.round((c.stock / maxStock) * 100),
      ocupPct: c.max > 0 ? Math.round((c.stock / c.max) * 100) : 0
    }));
  });

  /** Ocupación global de bodega = stockActual / stockMaximo de todos los productos filtrados */
  ocupacionBodega = computed(() => {
    const prods = this.productosFiltrados();
    const totalAct = prods.reduce((s, p) => s + p.stockActual, 0);
    const totalMax = prods.reduce((s, p) => s + p.stockMaximo, 0);
    if (totalMax === 0) return 0;
    return Math.min(100, Math.round((totalAct / totalMax) * 100));
  });

  /** stroke-dashoffset para el anillo SVG (circunferencia = 2π×52 ≈ 327) */
  svgOffset = computed(() => Math.round(327 * (1 - this.ocupacionBodega() / 100)));

  private iconoCat(id: number): string {
    const m: Record<number, string> = {
      1:'🔧', 2:'⚡', 3:'📐', 4:'🏗️', 5:'🪑', 6:'🔌', 7:'🦺', 8:'💻', 9:'🔥', 10:'📏'
    };
    return m[id] ?? '📦';
  }

  private colorCat(id: number): string {
    const m: Record<number, string> = {
      1:'#27ae60', 2:'#e74c3c', 3:'#3498db', 4:'#8e44ad', 5:'#f39c12',
      6:'#e67e22', 7:'#1abc9c', 8:'#2c3e50', 9:'#c0392b', 10:'#16a085'
    };
    return m[id] ?? '#95a5a6';
  }

  ngOnInit() {
    this.facade.getAlertasStock().subscribe(a => this.allAlertas.set(a));
    this.facade.getProductos().subscribe(p => this.allProductos.set(p));
    this.facade.getMovimientos().subscribe(m => {
      this.allMovimientos.set(m);
      this.loading.set(false);
    });
  }

  getAlertaClass(tipo: string): string {
    switch (tipo) {
      case 'critico': return 'alert-critico';
      case 'bajo': return 'alert-bajo';
      case 'sobrestock': return 'alert-sobrestock';
      default: return '';
    }
  }

  getAlertaIcon(tipo: string): string {
    switch (tipo) {
      case 'critico': return '🔴';
      case 'bajo': return '🟡';
      case 'sobrestock': return '🔵';
      default: return '⚪';
    }
  }

  getMovTipoClass(tipo: string): string {
    switch (tipo) {
      case 'entrada': return 'mov-entrada';
      case 'salida': return 'mov-salida';
      case 'ajuste': return 'mov-ajuste';
      default: return '';
    }
  }

  getMovIcon(tipo: string): string {
    switch (tipo) {
      case 'entrada': return '📥';
      case 'salida': return '📤';
      case 'ajuste': return '🔧';
      default: return '📋';
    }
  }
}

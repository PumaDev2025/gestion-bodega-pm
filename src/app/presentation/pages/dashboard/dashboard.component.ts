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
  alertas = signal<AlertaStock[]>([]);
  allMovimientos = signal<Movimiento[]>([]);
  loading = signal(true);

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
    const productos = this.proyectoState.filtrarPorProyecto(this.allProductos(), this.allMovimientos());
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

  ngOnInit() {
    this.facade.getAlertasStock().subscribe(a => this.alertas.set(a));
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

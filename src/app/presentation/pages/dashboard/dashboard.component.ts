import { Component, OnInit, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ClpPipe } from '../../shared/pipes/clp.pipe';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { ProyectoStateService } from '../../../core/application/proyecto-state.service';
import { AlertaStock, ResumenBodega, Movimiento } from '../../../core/domain/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent, ClpPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  resumen = signal<ResumenBodega | null>(null);
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

  constructor(
    private facade: BodegaFacadeService,
    readonly proyectoState: ProyectoStateService
  ) {}

  ngOnInit() {
    this.facade.getResumenBodega().subscribe(r => this.resumen.set(r));
    this.facade.getAlertasStock().subscribe(a => this.alertas.set(a));
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

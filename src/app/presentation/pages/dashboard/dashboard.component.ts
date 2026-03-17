import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ClpPipe } from '../../shared/pipes/clp.pipe';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
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
  movimientos = signal<Movimiento[]>([]);
  loading = signal(true);

  constructor(private facade: BodegaFacadeService) {}

  ngOnInit() {
    this.facade.getResumenBodega().subscribe(r => this.resumen.set(r));
    this.facade.getAlertasStock().subscribe(a => this.alertas.set(a));
    this.facade.getMovimientos().subscribe(m => {
      this.movimientos.set(m.slice(0, 8));
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

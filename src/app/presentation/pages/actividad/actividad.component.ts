import { Component, OnInit, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import type { RegistroActividad, ModuloActividad } from '../../../core/domain/models';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent implements OnInit {
  registros = signal<RegistroActividad[]>([]);
  loading = signal(true);
  filtroModulo = signal<string>('todos');
  searchTerm = signal('');

  registrosFiltrados = computed(() => {
    let items = this.registros();
    const modulo = this.filtroModulo();
    const search = this.searchTerm().toLowerCase();

    if (modulo !== 'todos') {
      items = items.filter(r => r.modulo === modulo);
    }
    if (search) {
      items = items.filter(r =>
        r.usuario.toLowerCase().includes(search) ||
        r.detalle.toLowerCase().includes(search) ||
        r.modulo.toLowerCase().includes(search)
      );
    }
    return items;
  });

  resumen = computed(() => {
    const all = this.registros();
    return {
      total: all.length,
      inventario: all.filter(r => r.modulo === 'inventario').length,
      categorias: all.filter(r => r.modulo === 'categorias').length,
      movimientos: all.filter(r => r.modulo === 'movimientos').length,
      usuarios: all.filter(r => r.modulo === 'usuarios').length,
    };
  });

  constructor(private facade: BodegaFacadeService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.facade.getActividades().subscribe(r => {
      this.registros.set(r);
      this.loading.set(false);
    });
  }

  getModuloIcon(modulo: string): string {
    switch (modulo) {
      case 'inventario': return '📦';
      case 'categorias': return '🏷️';
      case 'movimientos': return '🔄';
      case 'usuarios': return '👥';
      default: return '📋';
    }
  }

  getModuloLabel(modulo: string): string {
    switch (modulo) {
      case 'inventario': return 'Inventario';
      case 'categorias': return 'Categorías';
      case 'movimientos': return 'Movimientos';
      case 'usuarios': return 'Usuarios';
      default: return modulo;
    }
  }

  getAccionIcon(accion: string): string {
    switch (accion) {
      case 'crear': return '➕';
      case 'editar': return '✏️';
      case 'eliminar': return '🗑️';
      default: return '📝';
    }
  }

  getAccionLabel(accion: string): string {
    switch (accion) {
      case 'crear': return 'Creación';
      case 'editar': return 'Edición';
      case 'eliminar': return 'Eliminación';
      default: return accion;
    }
  }

  getTimeAgo(fecha: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(fecha).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Justo ahora';
    if (mins < 60) return `Hace ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `Hace ${hours}h`;
    const days = Math.floor(hours / 24);
    return `Hace ${days}d`;
  }
}

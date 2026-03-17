import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { Movimiento, Producto, TipoMovimiento } from '../../../core/domain/models';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [FormsModule, DatePipe, ModalComponent],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.scss'
})
export class MovimientosComponent implements OnInit {
  movimientos = signal<Movimiento[]>([]);
  productos = signal<Producto[]>([]);
  filtroTipo = signal<string>('todos');
  searchTerm = signal('');
  loading = signal(true);
  modalOpen = signal(false);

  form = {
    tipo: 'entrada' as TipoMovimiento,
    productoId: 0,
    cantidad: 1,
    responsable: '',
    motivo: '',
    documento: '',
    observaciones: ''
  };

  movimientosFiltrados = computed(() => {
    let items = this.movimientos();
    const tipo = this.filtroTipo();
    const search = this.searchTerm().toLowerCase();

    if (tipo !== 'todos') {
      items = items.filter(m => m.tipo === tipo);
    }
    if (search) {
      items = items.filter(m =>
        (m.productoNombre?.toLowerCase().includes(search) ?? false) ||
        (m.productoCodigo?.toLowerCase().includes(search) ?? false) ||
        m.responsable.toLowerCase().includes(search)
      );
    }
    return items;
  });

  resumenMov = computed(() => {
    const todos = this.movimientos();
    return {
      entradas: todos.filter(m => m.tipo === 'entrada').length,
      salidas: todos.filter(m => m.tipo === 'salida').length,
      ajustes: todos.filter(m => m.tipo === 'ajuste').length
    };
  });

  constructor(private facade: BodegaFacadeService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.facade.getMovimientos().subscribe(m => {
      this.movimientos.set(m);
      this.loading.set(false);
    });
    this.facade.getProductos().subscribe(p => this.productos.set(p));
  }

  getTipoIcon(tipo: string): string {
    switch (tipo) {
      case 'entrada': return '📥';
      case 'salida': return '📤';
      case 'ajuste': return '🔧';
      default: return '📋';
    }
  }

  getTipoLabel(tipo: string): string {
    switch (tipo) {
      case 'entrada': return 'Entrada';
      case 'salida': return 'Salida';
      case 'ajuste': return 'Ajuste';
      default: return tipo;
    }
  }

  openNuevoMovimiento() {
    this.form = {
      tipo: 'entrada', productoId: 0, cantidad: 1,
      responsable: '', motivo: '', documento: '', observaciones: ''
    };
    this.modalOpen.set(true);
  }

  saveMovimiento() {
    const prod = this.productos().find(p => p.id === +this.form.productoId);
    const nuevoMov = {
      ...this.form,
      productoId: +this.form.productoId,
      productoNombre: prod?.nombre ?? '',
      productoCodigo: prod?.codigo ?? '',
      fecha: new Date(),
      cantidad: this.form.tipo === 'salida' ? Math.abs(this.form.cantidad) : this.form.cantidad
    } as Omit<Movimiento, 'id'>;

    this.facade.crearMovimiento(nuevoMov).subscribe(() => {
      this.modalOpen.set(false);
      this.loadData();
    });
  }
}

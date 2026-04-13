import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ClpPipe } from '../../shared/pipes/clp.pipe';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { ProyectoStateService } from '../../../core/application/proyecto-state.service';
import { Producto, Categoria, EstadoProducto, Movimiento } from '../../../core/domain/models';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [FormsModule, ModalComponent, ClpPipe],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent implements OnInit {
  allProductos = signal<Producto[]>([]);
  allMovimientos = signal<Movimiento[]>([]);
  categorias = signal<Categoria[]>([]);
  searchTerm = signal('');
  filtroCategoria = signal<number>(0);
  filtroEstado = signal<string>('todos');
  loading = signal(true);

  // Modal
  modalOpen = signal(false);
  modalTitle = signal('');
  editingProducto = signal<Producto | null>(null);
  confirmDeleteOpen = signal(false);
  deleteTarget = signal<Producto | null>(null);

  // Form fields
  form = {
    codigo: '', nombre: '', descripcion: '', categoriaId: 0,
    ubicacion: '', stockActual: 0, stockMinimo: 0, stockMaximo: 0,
    unidadMedida: 'unidades', precioUnitario: 0, estado: 'activo' as EstadoProducto
  };

  /** Productos filtrados por proyecto activo */
  productos = computed(() =>
    this.proyectoState.filtrarPorProyecto(this.allProductos(), this.allMovimientos())
  );

  productosFiltrados = computed(() => {
    let items = this.productos();
    const search = this.searchTerm().toLowerCase();
    const catId = this.filtroCategoria();
    const estado = this.filtroEstado();

    if (search) {
      items = items.filter(p =>
        p.nombre.toLowerCase().includes(search) ||
        p.codigo.toLowerCase().includes(search) ||
        p.ubicacion.toLowerCase().includes(search)
      );
    }
    if (catId > 0) {
      items = items.filter(p => p.categoriaId === catId);
    }
    if (estado !== 'todos') {
      items = items.filter(p => p.estado === estado);
    }
    return items;
  });

  constructor(
    private facade: BodegaFacadeService,
    readonly proyectoState: ProyectoStateService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.facade.getProductos().subscribe(p => {
      this.allProductos.set(p);
      this.loading.set(false);
    });
    this.facade.getCategorias().subscribe(c => this.categorias.set(c));
    this.facade.getMovimientos().subscribe(m => this.allMovimientos.set(m));
  }

  getStockClass(p: Producto): string {
    if (p.stockActual === 0) return 'stock-critico';
    if (p.stockActual <= p.stockMinimo * 0.3) return 'stock-critico';
    if (p.stockActual <= p.stockMinimo) return 'stock-bajo';
    if (p.stockActual > p.stockMaximo) return 'stock-sobre';
    return 'stock-ok';
  }

  getStockPercent(p: Producto): number {
    return Math.min(100, Math.round((p.stockActual / p.stockMaximo) * 100));
  }

  openCreate() {
    this.editingProducto.set(null);
    this.modalTitle.set('Nuevo Producto');
    this.resetForm();
    this.modalOpen.set(true);
  }

  openEdit(p: Producto) {
    this.editingProducto.set(p);
    this.modalTitle.set('Editar Producto');
    this.form = {
      codigo: p.codigo, nombre: p.nombre, descripcion: p.descripcion,
      categoriaId: p.categoriaId, ubicacion: p.ubicacion,
      stockActual: p.stockActual, stockMinimo: p.stockMinimo,
      stockMaximo: p.stockMaximo, unidadMedida: p.unidadMedida,
      precioUnitario: p.precioUnitario, estado: p.estado
    };
    this.modalOpen.set(true);
  }

  saveProducto() {
    const editing = this.editingProducto();
    const catNombre = this.categorias().find(c => c.id === +this.form.categoriaId)?.nombre ?? '';

    if (editing) {
      const updated: Producto = {
        ...editing, ...this.form,
        categoriaId: +this.form.categoriaId,
        categoriaNombre: catNombre
      };
      this.facade.actualizarProducto(updated).subscribe(() => {
        this.modalOpen.set(false);
        this.loadData();
      });
    } else {
      const nuevo = {
        ...this.form,
        categoriaId: +this.form.categoriaId,
        categoriaNombre: catNombre,
        fechaIngreso: new Date(),
        ultimaActualizacion: new Date()
      } as Omit<Producto, 'id'>;
      this.facade.crearProducto(nuevo).subscribe(() => {
        this.modalOpen.set(false);
        this.loadData();
      });
    }
  }

  confirmDelete(p: Producto) {
    this.deleteTarget.set(p);
    this.confirmDeleteOpen.set(true);
  }

  executeDelete() {
    const target = this.deleteTarget();
    if (target) {
      this.facade.eliminarProducto(target.id).subscribe(() => {
        this.confirmDeleteOpen.set(false);
        this.deleteTarget.set(null);
        this.loadData();
      });
    }
  }

  resetForm() {
    this.form = {
      codigo: '', nombre: '', descripcion: '', categoriaId: 0,
      ubicacion: '', stockActual: 0, stockMinimo: 0, stockMaximo: 0,
      unidadMedida: 'unidades', precioUnitario: 0, estado: 'activo'
    };
  }
}

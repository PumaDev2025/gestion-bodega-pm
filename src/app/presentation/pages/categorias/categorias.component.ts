import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { ProyectoStateService } from '../../../core/application/proyecto-state.service';
import { Categoria, Producto, Movimiento } from '../../../core/domain/models';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit {
  categorias = signal<Categoria[]>([]);
  allProductos = signal<Producto[]>([]);
  allMovimientos = signal<Movimiento[]>([]);
  loading = signal(true);
  modalOpen = signal(false);
  modalTitle = signal('');
  editingCategoria = signal<Categoria | null>(null);
  confirmDeleteOpen = signal(false);
  deleteTarget = signal<Categoria | null>(null);

  form = {
    nombre: '',
    descripcion: '',
    color: '#E87722',
    icono: '📦'
  };

  iconos = ['📦', '🧱', '🦺', '🔧', '🔩', '🔌', '🧯', '⛏', '🪨', '🪵', '🪜', '🧰', '💡', '🪣', '🏗'];

  /** Categorías con conteo de productos filtrado por proyecto activo */
  categoriasConConteo = computed(() => {
    const prodsFiltrados = this.proyectoState.filtrarPorProyecto(this.allProductos(), this.allMovimientos());
    const conteoPorCat = new Map<number, number>();
    for (const p of prodsFiltrados) {
      conteoPorCat.set(p.categoriaId, (conteoPorCat.get(p.categoriaId) ?? 0) + 1);
    }
    return this.categorias().map(c => ({
      ...c,
      cantidadProductos: conteoPorCat.get(c.id) ?? 0
    }));
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
    this.facade.getCategorias().subscribe(c => {
      this.categorias.set(c);
      this.loading.set(false);
    });
    this.facade.getProductos().subscribe(p => this.allProductos.set(p));
    this.facade.getMovimientos().subscribe(m => this.allMovimientos.set(m));
  }

  openCreate() {
    this.editingCategoria.set(null);
    this.modalTitle.set('Nueva Categoría');
    this.form = { nombre: '', descripcion: '', color: '#E87722', icono: '📦' };
    this.modalOpen.set(true);
  }

  openEdit(c: Categoria) {
    this.editingCategoria.set(c);
    this.modalTitle.set('Editar Categoría');
    this.form = { nombre: c.nombre, descripcion: c.descripcion, color: c.color, icono: c.icono };
    this.modalOpen.set(true);
  }

  save() {
    const editing = this.editingCategoria();
    if (editing) {
      this.facade.actualizarCategoria({ ...editing, ...this.form }).subscribe(() => {
        this.modalOpen.set(false);
        this.loadData();
      });
    } else {
      this.facade.crearCategoria(this.form as Omit<Categoria, 'id'>).subscribe(() => {
        this.modalOpen.set(false);
        this.loadData();
      });
    }
  }

  confirmDelete(c: Categoria) {
    this.deleteTarget.set(c);
    this.confirmDeleteOpen.set(true);
  }

  executeDelete() {
    const target = this.deleteTarget();
    if (target) {
      this.facade.eliminarCategoria(target.id).subscribe(() => {
        this.confirmDeleteOpen.set(false);
        this.loadData();
      });
    }
  }
}

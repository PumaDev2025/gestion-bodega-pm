import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthFacadeService } from '../../../core/application/auth-facade.service';
import { BodegaFacadeService } from '../../../core/application/bodega-facade.service';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import type { Usuario, RolUsuario } from '../../../core/domain/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, DatePipe, ModalComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  usuarios = signal<Usuario[]>([]);
  searchTerm = signal('');
  showModal = signal(false);
  showDeleteModal = signal(false);
  editingUser = signal<Usuario | null>(null);
  deletingUser = signal<Usuario | null>(null);

  form: {
    nombre: string;
    email: string;
    password: string;
    rol: RolUsuario;
    activo: boolean;
    avatar: string;
  } = this.emptyForm();

  filteredUsuarios = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.usuarios().filter(
      u =>
        u.nombre.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term) ||
        u.rol.includes(term)
    );
  });

  currentUser = computed(() => this.authFacade.getUsuarioActual());

  constructor(private authFacade: AuthFacadeService, private bodegaFacade: BodegaFacadeService) {
    this.loadUsuarios();
  }

  private loadUsuarios(): void {
    this.usuarios.set(this.authFacade.getUsuarios());
  }

  private emptyForm() {
    return {
      nombre: '',
      email: '',
      password: '',
      rol: 'encargado' as RolUsuario,
      activo: true,
      avatar: '👷',
    };
  }

  abrirCrear(): void {
    this.editingUser.set(null);
    this.form = this.emptyForm();
    this.showModal.set(true);
  }

  abrirEditar(usuario: Usuario): void {
    this.editingUser.set(usuario);
    this.form = {
      nombre: usuario.nombre,
      email: usuario.email,
      password: '',
      rol: usuario.rol,
      activo: usuario.activo,
      avatar: usuario.avatar || '👷',
    };
    this.showModal.set(true);
  }

  guardar(): void {
    const editing = this.editingUser();
    if (editing) {
      const updateData: Partial<Usuario> = {
        nombre: this.form.nombre,
        email: this.form.email,
        rol: this.form.rol,
        activo: this.form.activo,
        avatar: this.form.avatar,
      };
      if (this.form.password) {
        updateData.password = this.form.password;
      }
      this.authFacade.actualizarUsuario(editing.id, updateData);
      this.bodegaFacade.registrarActividad('editar', 'usuarios', `Editó usuario "${this.form.nombre}" (${this.form.rol})`);
    } else {
      this.authFacade.crearUsuario({
        nombre: this.form.nombre,
        email: this.form.email,
        password: this.form.password || 'bodega123',
        rol: this.form.rol,
        activo: this.form.activo,
        avatar: this.form.avatar,
      });
      this.bodegaFacade.registrarActividad('crear', 'usuarios', `Creó usuario "${this.form.nombre}" (${this.form.rol})`);
    }
    this.showModal.set(false);
    this.loadUsuarios();
  }

  confirmarEliminar(usuario: Usuario): void {
    this.deletingUser.set(usuario);
    this.showDeleteModal.set(true);
  }

  eliminar(): void {
    const user = this.deletingUser();
    if (user) {
      this.authFacade.eliminarUsuario(user.id);
      this.bodegaFacade.registrarActividad('eliminar', 'usuarios', `Eliminó usuario "${user.nombre}"`);
      this.showDeleteModal.set(false);
      this.loadUsuarios();
    }
  }

  avatarOptions = ['👷', '👷‍♀️', '👨‍💼', '👩‍💼', '🧑‍🔧', '👨‍🔧', '👩‍🔧', '🏗️', '🦺', '👤'];
}

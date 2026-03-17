import { Injectable, Inject } from '@angular/core';
import { AUTH_REPOSITORY } from '../domain/ports/auth.repository';
import type { AuthRepository } from '../domain/ports/auth.repository';
import type { Usuario, RolUsuario } from '../domain/models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthFacadeService {
  constructor(
    @Inject(AUTH_REPOSITORY) private authRepo: AuthRepository
  ) {}

  login(email: string, password: string): Usuario | null {
    return this.authRepo.login(email, password);
  }

  logout(): void {
    this.authRepo.logout();
  }

  getUsuarioActual(): Usuario | null {
    return this.authRepo.getUsuarioActual();
  }

  isLoggedIn(): boolean {
    return this.authRepo.getUsuarioActual() !== null;
  }

  isAdmin(): boolean {
    return this.authRepo.getUsuarioActual()?.rol === 'admin';
  }

  getUsuarios(): Usuario[] {
    return this.authRepo.getUsuarios();
  }

  crearUsuario(data: Omit<Usuario, 'id' | 'fechaCreacion'>): Usuario {
    return this.authRepo.crearUsuario(data);
  }

  actualizarUsuario(id: string, data: Partial<Usuario>): Usuario | null {
    return this.authRepo.actualizarUsuario(id, data);
  }

  eliminarUsuario(id: string): boolean {
    return this.authRepo.eliminarUsuario(id);
  }

  tienePermiso(rol: RolUsuario): boolean {
    return this.authRepo.tienePermiso(rol);
  }
}

import { InjectionToken } from '@angular/core';
import { Usuario, RolUsuario } from '../models/usuario.model';

export interface AuthRepository {
  login(email: string, password: string): Usuario | null;
  logout(): void;
  getUsuarioActual(): Usuario | null;
  getUsuarios(): Usuario[];
  crearUsuario(usuario: Omit<Usuario, 'id' | 'fechaCreacion'>): Usuario;
  actualizarUsuario(id: string, data: Partial<Usuario>): Usuario | null;
  eliminarUsuario(id: string): boolean;
  tienePermiso(rol: RolUsuario): boolean;
}

export const AUTH_REPOSITORY = new InjectionToken<AuthRepository>('AuthRepository');

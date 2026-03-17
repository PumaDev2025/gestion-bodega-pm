import { Injectable } from '@angular/core';
import { AuthRepository } from '../../domain/ports/auth.repository';
import { Usuario, RolUsuario } from '../../domain/models/usuario.model';
import { MOCK_USUARIOS } from '../mock/usuarios.mock';

@Injectable()
export class AuthMockAdapter implements AuthRepository {
  private usuarios: Usuario[] = [...MOCK_USUARIOS];
  private usuarioActual: Usuario | null = null;
  private readonly STORAGE_KEY = 'bodega_pm_auth';

  constructor() {
    this.restaurarSesion();
  }

  private restaurarSesion(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        const usuario = this.usuarios.find(u => u.id === data.id && u.activo);
        if (usuario) {
          this.usuarioActual = usuario;
        } else {
          localStorage.removeItem(this.STORAGE_KEY);
        }
      }
    } catch {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  login(email: string, password: string): Usuario | null {
    const usuario = this.usuarios.find(
      u => u.email === email && u.password === password && u.activo
    );
    if (usuario) {
      this.usuarioActual = { ...usuario, ultimoAcceso: new Date() };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ id: usuario.id }));
      return this.usuarioActual;
    }
    return null;
  }

  logout(): void {
    this.usuarioActual = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }

  getUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  crearUsuario(data: Omit<Usuario, 'id' | 'fechaCreacion'>): Usuario {
    const id = `USR-${String(this.usuarios.length + 1).padStart(3, '0')}`;
    const nuevo: Usuario = {
      ...data,
      id,
      fechaCreacion: new Date(),
    };
    this.usuarios.push(nuevo);
    return nuevo;
  }

  actualizarUsuario(id: string, data: Partial<Usuario>): Usuario | null {
    const idx = this.usuarios.findIndex(u => u.id === id);
    if (idx === -1) return null;
    this.usuarios[idx] = { ...this.usuarios[idx], ...data };
    if (this.usuarioActual?.id === id) {
      this.usuarioActual = { ...this.usuarios[idx] };
    }
    return this.usuarios[idx];
  }

  eliminarUsuario(id: string): boolean {
    const idx = this.usuarios.findIndex(u => u.id === id);
    if (idx === -1) return false;
    this.usuarios.splice(idx, 1);
    return true;
  }

  tienePermiso(rolRequerido: RolUsuario): boolean {
    if (!this.usuarioActual) return false;
    if (this.usuarioActual.rol === 'admin') return true;
    return this.usuarioActual.rol === rolRequerido;
  }
}

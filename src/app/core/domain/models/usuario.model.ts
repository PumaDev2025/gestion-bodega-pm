export type RolUsuario = 'admin' | 'encargado';

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  password: string;
  rol: RolUsuario;
  activo: boolean;
  avatar?: string;
  fechaCreacion: Date;
  ultimoAcceso?: Date;
}

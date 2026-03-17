export type ModuloActividad = 'inventario' | 'categorias' | 'movimientos' | 'usuarios';
export type AccionActividad = 'crear' | 'editar' | 'eliminar';

export interface RegistroActividad {
  id: number;
  usuario: string;          // nombre del usuario que realizó la acción
  usuarioAvatar?: string;
  accion: AccionActividad;
  modulo: ModuloActividad;
  detalle: string;          // e.g. "Editó producto 'Cascos de Seguridad' — Stock: 5 → 50"
  fecha: Date;
}

export type EstadoProducto = 'activo' | 'inactivo' | 'descontinuado';

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  categoriaId: number;
  categoriaNombre?: string;
  ubicacion: string;
  stockActual: number;
  stockMinimo: number;
  stockMaximo: number;
  unidadMedida: string;
  precioUnitario: number;
  estado: EstadoProducto;
  fechaIngreso: Date;
  ultimaActualizacion: Date;
  imagen?: string;
  /** Códigos de proyecto que solicitaron este producto, ej: ["P-4127","P-4166"] */
  proyectos?: string[];
}

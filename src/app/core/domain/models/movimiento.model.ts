export type TipoMovimiento = 'entrada' | 'salida' | 'ajuste';

export interface Movimiento {
  id: number;
  tipo: TipoMovimiento;
  productoId: number;
  productoNombre?: string;
  productoCodigo?: string;
  cantidad: number;
  fecha: Date;
  responsable: string;
  motivo: string;
  documento?: string;
  observaciones?: string;
  /** Código de proyecto destino, ej: "P-4166 ESMAX" */
  proyecto?: string;
}

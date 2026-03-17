export type TipoAlerta = 'critico' | 'bajo' | 'sobrestock';

export interface AlertaStock {
  productoId: number;
  productoNombre: string;
  productoCodigo: string;
  stockActual: number;
  stockMinimo: number;
  tipo: TipoAlerta;
  ubicacion: string;
}

export interface ResumenBodega {
  totalProductos: number;
  totalCategorias: number;
  valorInventario: number;
  productosStockBajo: number;
  productosStockCritico: number;
  movimientosHoy: number;
  entradasMes: number;
  salidasMes: number;
}

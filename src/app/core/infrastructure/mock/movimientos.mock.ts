import { Movimiento } from '../../domain/models';

export const MOCK_MOVIMIENTOS: Movimiento[] = [
  {
    id: 1, tipo: 'entrada', productoId: 1, productoNombre: 'Cemento Polpaico 25kg',
    productoCodigo: 'PM-001', cantidad: 80, fecha: new Date('2026-03-17T08:30:00'),
    responsable: 'Carlos Muñoz', motivo: 'Recepción proveedor',
    documento: 'OC-2026-0451', observaciones: 'Lote recibido en buen estado'
  },
  {
    id: 2, tipo: 'salida', productoId: 2, productoNombre: 'Fierro Estriado 12mm',
    productoCodigo: 'PM-002', cantidad: 30, fecha: new Date('2026-03-17T09:15:00'),
    responsable: 'Ana López', motivo: 'Despacho a obra Sector Norte',
    documento: 'DES-2026-0128'
  },
  {
    id: 3, tipo: 'entrada', productoId: 5, productoNombre: 'Taladro Percutor Bosch',
    productoCodigo: 'PM-005', cantidad: 3, fecha: new Date('2026-03-17T10:00:00'),
    responsable: 'Carlos Muñoz', motivo: 'Compra nuevos equipos',
    documento: 'OC-2026-0452'
  },
  {
    id: 4, tipo: 'salida', productoId: 12, productoNombre: 'Cable Eléctrico 2.5mm',
    productoCodigo: 'PM-012', cantidad: 5, fecha: new Date('2026-03-16T14:30:00'),
    responsable: 'María Torres', motivo: 'Instalación eléctrica piso 3',
    documento: 'DES-2026-0127'
  },
  {
    id: 5, tipo: 'ajuste', productoId: 6, productoNombre: 'Clavos 3 pulgadas',
    productoCodigo: 'PM-006', cantidad: -5, fecha: new Date('2026-03-16T16:00:00'),
    responsable: 'Pedro Sánchez', motivo: 'Ajuste por merma',
    observaciones: 'Cajas dañadas por humedad'
  },
  {
    id: 6, tipo: 'entrada', productoId: 11, productoNombre: 'Planchas OSB 9mm',
    productoCodigo: 'PM-011', cantidad: 40, fecha: new Date('2026-03-16T11:00:00'),
    responsable: 'Carlos Muñoz', motivo: 'Reposición de stock',
    documento: 'OC-2026-0449'
  },
  {
    id: 7, tipo: 'salida', productoId: 8, productoNombre: 'Arena Gruesa m³',
    productoCodigo: 'PM-008', cantidad: 5, fecha: new Date('2026-03-15T09:30:00'),
    responsable: 'Ana López', motivo: 'Fundaciones Sector B',
    documento: 'DES-2026-0125'
  },
  {
    id: 8, tipo: 'salida', productoId: 4, productoNombre: 'Guantes Cabritilla',
    productoCodigo: 'PM-004', cantidad: 12, fecha: new Date('2026-03-15T13:45:00'),
    responsable: 'María Torres', motivo: 'Entrega a cuadrilla enfierradores',
    documento: 'DES-2026-0126'
  },
  {
    id: 9, tipo: 'entrada', productoId: 9, productoNombre: 'Tubo PVC 110mm',
    productoCodigo: 'PM-009', cantidad: 20, fecha: new Date('2026-03-14T10:20:00'),
    responsable: 'Carlos Muñoz', motivo: 'Recepción nuevo pedido',
    documento: 'OC-2026-0445'
  },
  {
    id: 10, tipo: 'ajuste', productoId: 3, productoNombre: 'Casco de Seguridad',
    productoCodigo: 'PM-003', cantidad: -2, fecha: new Date('2026-03-14T15:00:00'),
    responsable: 'Pedro Sánchez', motivo: 'Baja por daño',
    observaciones: 'Cascos agrietados por impacto'
  },
  {
    id: 11, tipo: 'salida', productoId: 7, productoNombre: 'Zapato de Seguridad',
    productoCodigo: 'PM-007', cantidad: 4, fecha: new Date('2026-03-13T11:00:00'),
    responsable: 'Ana López', motivo: 'Entrega a nuevos trabajadores',
    documento: 'DES-2026-0122'
  },
  {
    id: 12, tipo: 'entrada', productoId: 1, productoNombre: 'Cemento Polpaico 25kg',
    productoCodigo: 'PM-001', cantidad: 100, fecha: new Date('2026-03-12T08:00:00'),
    responsable: 'Carlos Muñoz', motivo: 'Reposición masiva',
    documento: 'OC-2026-0440'
  }
];

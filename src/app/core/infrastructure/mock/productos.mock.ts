import { Producto } from '../../domain/models';

export const MOCK_PRODUCTOS: Producto[] = [
  {
    id: 1, codigo: 'PM-001', nombre: 'Cemento Polpaico 25kg',
    descripcion: 'Saco de cemento Portland Polpaico 25kg', categoriaId: 1,
    categoriaNombre: 'Materiales Básicos', ubicacion: 'A-01-01', stockActual: 120,
    stockMinimo: 30, stockMaximo: 300, unidadMedida: 'sacos',
    precioUnitario: 5490, estado: 'activo',
    fechaIngreso: new Date('2025-11-15'), ultimaActualizacion: new Date('2026-03-15')
  },
  {
    id: 2, codigo: 'PM-002', nombre: 'Fierro Estriado 12mm',
    descripcion: 'Barra de fierro estriado 12mm x 6m A630-420H', categoriaId: 1,
    categoriaNombre: 'Materiales Básicos', ubicacion: 'A-02-01', stockActual: 250,
    stockMinimo: 50, stockMaximo: 500, unidadMedida: 'barras',
    precioUnitario: 4890, estado: 'activo',
    fechaIngreso: new Date('2025-10-20'), ultimaActualizacion: new Date('2026-03-12')
  },
  {
    id: 3, codigo: 'PM-003', nombre: 'Casco de Seguridad',
    descripcion: 'Casco de seguridad MSA V-Gard con suspensión', categoriaId: 2,
    categoriaNombre: 'EPP', ubicacion: 'B-01-01', stockActual: 8,
    stockMinimo: 20, stockMaximo: 100, unidadMedida: 'unidades',
    precioUnitario: 12990, estado: 'activo',
    fechaIngreso: new Date('2025-12-01'), ultimaActualizacion: new Date('2026-03-10')
  },
  {
    id: 4, codigo: 'PM-004', nombre: 'Guantes Cabritilla',
    descripcion: 'Guantes de cabritilla para trabajo pesado talla L', categoriaId: 2,
    categoriaNombre: 'EPP', ubicacion: 'B-01-02', stockActual: 5,
    stockMinimo: 30, stockMaximo: 200, unidadMedida: 'pares',
    precioUnitario: 3990, estado: 'activo',
    fechaIngreso: new Date('2025-09-10'), ultimaActualizacion: new Date('2026-03-16')
  },
  {
    id: 5, codigo: 'PM-005', nombre: 'Taladro Percutor Bosch',
    descripcion: 'Taladro percutor Bosch GSB 13RE 650W', categoriaId: 3,
    categoriaNombre: 'Herramientas', ubicacion: 'C-01-01', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 54990, estado: 'activo',
    fechaIngreso: new Date('2026-01-05'), ultimaActualizacion: new Date('2026-03-14')
  },
  {
    id: 6, codigo: 'PM-006', nombre: 'Clavos 3 pulgadas',
    descripcion: 'Caja de clavos con cabeza 3" x 1kg', categoriaId: 4,
    categoriaNombre: 'Fijaciones', ubicacion: 'D-01-01', stockActual: 85,
    stockMinimo: 20, stockMaximo: 200, unidadMedida: 'cajas',
    precioUnitario: 1990, estado: 'activo',
    fechaIngreso: new Date('2026-02-01'), ultimaActualizacion: new Date('2026-03-16')
  },
  {
    id: 7, codigo: 'PM-007', nombre: 'Zapato de Seguridad',
    descripcion: 'Zapato de seguridad punta de acero Edelbrock N°42', categoriaId: 2,
    categoriaNombre: 'EPP', ubicacion: 'B-02-01', stockActual: 3,
    stockMinimo: 10, stockMaximo: 60, unidadMedida: 'pares',
    precioUnitario: 29990, estado: 'activo',
    fechaIngreso: new Date('2025-08-20'), ultimaActualizacion: new Date('2026-03-11')
  },
  {
    id: 8, codigo: 'PM-008', nombre: 'Arena Gruesa m³',
    descripcion: 'Metro cúbico de arena gruesa para hormigón', categoriaId: 1,
    categoriaNombre: 'Materiales Básicos', ubicacion: 'EXT-01', stockActual: 15,
    stockMinimo: 5, stockMaximo: 40, unidadMedida: 'm³',
    precioUnitario: 18990, estado: 'activo',
    fechaIngreso: new Date('2026-01-15'), ultimaActualizacion: new Date('2026-03-15')
  },
  {
    id: 9, codigo: 'PM-009', nombre: 'Tubo PVC 110mm',
    descripcion: 'Tubo PVC sanitario 110mm x 3m', categoriaId: 5,
    categoriaNombre: 'Instalaciones', ubicacion: 'E-01-01', stockActual: 42,
    stockMinimo: 10, stockMaximo: 80, unidadMedida: 'unidades',
    precioUnitario: 7490, estado: 'activo',
    fechaIngreso: new Date('2025-11-01'), ultimaActualizacion: new Date('2026-03-13')
  },
  {
    id: 10, codigo: 'PM-010', nombre: 'Extintor PQS 6kg',
    descripcion: 'Extintor polvo químico seco 6kg con certificación', categoriaId: 6,
    categoriaNombre: 'Seguridad', ubicacion: 'B-03-01', stockActual: 0,
    stockMinimo: 4, stockMaximo: 20, unidadMedida: 'unidades',
    precioUnitario: 24990, estado: 'inactivo',
    fechaIngreso: new Date('2025-07-10'), ultimaActualizacion: new Date('2026-02-28')
  },
  {
    id: 11, codigo: 'PM-011', nombre: 'Planchas OSB 9mm',
    descripcion: 'Plancha OSB estructural 9mm 1.22x2.44m', categoriaId: 1,
    categoriaNombre: 'Materiales Básicos', ubicacion: 'A-03-01', stockActual: 60,
    stockMinimo: 15, stockMaximo: 120, unidadMedida: 'planchas',
    precioUnitario: 14990, estado: 'activo',
    fechaIngreso: new Date('2025-12-10'), ultimaActualizacion: new Date('2026-03-14')
  },
  {
    id: 12, codigo: 'PM-012', nombre: 'Cable Eléctrico 2.5mm',
    descripcion: 'Rollo cable THHN 2.5mm² 100m azul', categoriaId: 5,
    categoriaNombre: 'Instalaciones', ubicacion: 'E-02-01', stockActual: 18,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'rollos',
    precioUnitario: 32990, estado: 'activo',
    fechaIngreso: new Date('2026-01-20'), ultimaActualizacion: new Date('2026-03-16')
  }
];

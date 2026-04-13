import { Producto } from '../../domain/models';

// Inventario completo generado desde Requerimientos Tendencias 2024-2026
// Total: 827 productos con demanda histórica registrada

const _PROD_CHUNK_1: Producto[] = [
  {
    id: 1, codigo: 'S.C.30.01.08.350', nombre: 'Esmeril Angular 4 1/2 Pulg',
    descripcion: 'Esmeril Angular 4 1/2 Pulg — demanda histórica acumulada: 40 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-01-01', stockActual: 30,
    stockMinimo: 7, stockMaximo: 75, unidadMedida: 'unidades',
    precioUnitario: 83300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 2, codigo: 'S.C.12.02.08.005', nombre: 'Silla Con Brazos',
    descripcion: 'Silla Con Brazos — demanda histórica acumulada: 40 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-01-01', stockActual: 35,
    stockMinimo: 7, stockMaximo: 87, unidadMedida: 'unidades',
    precioUnitario: 53100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 3, codigo: 'S.P.03.02.03.004', nombre: 'Monitor',
    descripcion: 'Monitor — demanda histórica acumulada: 36 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-01-01', stockActual: 24,
    stockMinimo: 3, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 88000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 4, codigo: 'C.30.01.08.397', nombre: 'Tizador',
    descripcion: 'Tizador — demanda histórica acumulada: 33 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-01-01', stockActual: 36,
    stockMinimo: 8, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 15300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 5, codigo: 'S.C.30.01.08.351', nombre: 'Esmeril Angular 7Pulg',
    descripcion: 'Esmeril Angular 7Pulg — demanda histórica acumulada: 32 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-01-02', stockActual: 36,
    stockMinimo: 7, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 76700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 6, codigo: 'C.06.02.08.459', nombre: 'Nivel Torpedo Imantado 9Pulg',
    descripcion: 'Nivel Torpedo Imantado 9Pulg — demanda histórica acumulada: 32 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-01-02', stockActual: 24,
    stockMinimo: 7, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 15800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 7, codigo: 'S.C.12.02.01.001', nombre: 'Escritorio',
    descripcion: 'Escritorio — demanda histórica acumulada: 29 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-01-02', stockActual: 35,
    stockMinimo: 8, stockMaximo: 87, unidadMedida: 'unidades',
    precioUnitario: 66500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 8, codigo: 'C.07.01.02.006', nombre: 'Extensión Eléctrica 220 Volt',
    descripcion: 'Extensión Eléctrica 220 Volt — demanda histórica acumulada: 29 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-01-01', stockActual: 96,
    stockMinimo: 21, stockMaximo: 240, unidadMedida: 'unidades',
    precioUnitario: 12400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 9, codigo: 'C.06.03.04.013', nombre: 'Flexometro De 8 Mtrs',
    descripcion: 'Flexometro De 8 Mtrs — demanda histórica acumulada: 29 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-01-01', stockActual: 54,
    stockMinimo: 10, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 61100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 10, codigo: 'Z.C.06.11.03.018', nombre: 'Martillo Peña',
    descripcion: 'Martillo Peña — demanda histórica acumulada: 29 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-01-03', stockActual: 54,
    stockMinimo: 9, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 15400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 11, codigo: 'Z.C.06.13.02.018', nombre: 'Flexometro 10 Metros',
    descripcion: 'Flexometro 10 Metros — demanda histórica acumulada: 28 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-01-01', stockActual: 36,
    stockMinimo: 12, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 94400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 12, codigo: 'S.P.04.03.06.005', nombre: 'Radio Portatil',
    descripcion: 'Radio Portatil — demanda histórica acumulada: 27 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-01-03', stockActual: 72,
    stockMinimo: 14, stockMaximo: 180, unidadMedida: 'unidades',
    precioUnitario: 43000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 13, codigo: 'Z.C.06.02.07.083', nombre: 'Alicate Universal 8',
    descripcion: 'Alicate Universal 8 — demanda histórica acumulada: 26 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-01-04', stockActual: 60,
    stockMinimo: 10, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 16700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 14, codigo: 'C.06.13.02.039', nombre: 'Martillo Carpintero',
    descripcion: 'Martillo Carpintero — demanda histórica acumulada: 26 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-01-02', stockActual: 38,
    stockMinimo: 10, stockMaximo: 96, unidadMedida: 'unidades',
    precioUnitario: 73300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 15, codigo: 'C.06.02.06.017', nombre: 'Caja De Herramientas',
    descripcion: 'Caja De Herramientas — demanda histórica acumulada: 25 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-01-05', stockActual: 60,
    stockMinimo: 14, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 17900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 16, codigo: 'Z.C.06.04.03.038', nombre: 'Escuadra Plana 24',
    descripcion: 'Escuadra Plana 24 — demanda histórica acumulada: 24 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-01-04', stockActual: 24,
    stockMinimo: 7, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 67500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 17, codigo: 'S.C.36.26.03.200', nombre: 'A',
    descripcion: 'A — demanda histórica acumulada: 23 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-01-01', stockActual: 662,
    stockMinimo: 166, stockMaximo: 1656, unidadMedida: 'unidades',
    precioUnitario: 27900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 18, codigo: 'C.30.01.08.596', nombre: 'Alicate Enfierrador',
    descripcion: 'Alicate Enfierrador — demanda histórica acumulada: 23 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-02-01', stockActual: 18,
    stockMinimo: 7, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 17500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 19, codigo: 'P.01.01.06.001', nombre: 'Cuchillo Cartonero',
    descripcion: 'Cuchillo Cartonero — demanda histórica acumulada: 23 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-02-02', stockActual: 36,
    stockMinimo: 8, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 17500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 20, codigo: 'C.32.13.02.030', nombre: 'Escuadra Talon 12"',
    descripcion: 'Escuadra Talon 12" — demanda histórica acumulada: 23 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-02-03', stockActual: 34,
    stockMinimo: 8, stockMaximo: 84, unidadMedida: 'unidades',
    precioUnitario: 17500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 21, codigo: 'P.03.01.05.007', nombre: 'Impresora',
    descripcion: 'Impresora — demanda histórica acumulada: 23 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-01-02', stockActual: 14,
    stockMinimo: 4, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 57900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 22, codigo: 'S.C.12.02.03.003', nombre: 'Cajonera',
    descripcion: 'Cajonera — demanda histórica acumulada: 22 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-01-05', stockActual: 29,
    stockMinimo: 8, stockMaximo: 72, unidadMedida: 'unidades',
    precioUnitario: 72700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 23, codigo: 'S.C.06.02.14.009', nombre: 'Tecle Palanca 1,5 Kilos',
    descripcion: 'Tecle Palanca 1,5 Kilos — demanda histórica acumulada: 22 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-01-03', stockActual: 24,
    stockMinimo: 6, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 87700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 24, codigo: 'Z.C.06.02.07.036', nombre: 'Llave Ajustable 12',
    descripcion: 'Llave Ajustable 12 — demanda histórica acumulada: 21 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-02-04', stockActual: 24,
    stockMinimo: 5, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 25, codigo: 'S.C.36.38.12.257', nombre: 'Plataforma Acero 0.32 X 2.57 M - Perf.',
    descripcion: 'Plataforma Acero 0.32 X 2.57 M - Perf. — demanda histórica acumulada: 21 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-01-02', stockActual: 938,
    stockMinimo: 179, stockMaximo: 2346, unidadMedida: 'unidades',
    precioUnitario: 22500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 26, codigo: 'Z.C.06.13.02.038', nombre: 'Plomada 500 Gr',
    descripcion: 'Plomada 500 Gr — demanda histórica acumulada: 21 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-01-03', stockActual: 48,
    stockMinimo: 8, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 51800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 27, codigo: 'S.C.30.01.08.339', nombre: 'Rectificador Recto',
    descripcion: 'Rectificador Recto — demanda histórica acumulada: 21 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-01-04', stockActual: 19,
    stockMinimo: 6, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 100400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 28, codigo: 'C.06.02.06.003', nombre: 'Carretilla 70Lt',
    descripcion: 'Carretilla 70Lt — demanda histórica acumulada: 20 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-02-05', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 10900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 29, codigo: 'C.06.04.03.045', nombre: 'Combo Fe 4 Lbs',
    descripcion: 'Combo Fe 4 Lbs — demanda histórica acumulada: 20 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-02-01', stockActual: 22,
    stockMinimo: 6, stockMaximo: 54, unidadMedida: 'unidades',
    precioUnitario: 58600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 30, codigo: 'C.30.01.08.629', nombre: 'Barretillas De 1 Mts',
    descripcion: 'Barretillas De 1 Mts — demanda histórica acumulada: 19 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-03-01', stockActual: 24,
    stockMinimo: 6, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 19800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 31, codigo: 'S.C.36.26.02.000', nombre: 'Base Collarin',
    descripcion: 'Base Collarin — demanda histórica acumulada: 19 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-01-03', stockActual: 1332,
    stockMinimo: 137, stockMaximo: 3330, unidadMedida: 'unidades',
    precioUnitario: 33400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 32, codigo: 'S.C.36.26.07.257', nombre: 'Horizontal 2.57 M',
    descripcion: 'Horizontal 2.57 M — demanda histórica acumulada: 19 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-01-04', stockActual: 1620,
    stockMinimo: 363, stockMaximo: 4050, unidadMedida: 'unidades',
    precioUnitario: 33400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 33, codigo: 'C.30.01.08.663', nombre: 'Llave Cola Chicharra 19X22 Mm',
    descripcion: 'Llave Cola Chicharra 19X22 Mm — demanda histórica acumulada: 19 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-03-02', stockActual: 60,
    stockMinimo: 9, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 19800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 34, codigo: 'C.04.03.04.003', nombre: 'Lockers Metálicos',
    descripcion: 'Lockers Metálicos — demanda histórica acumulada: 19 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-02-02', stockActual: 20,
    stockMinimo: 7, stockMaximo: 51, unidadMedida: 'unidades',
    precioUnitario: 76000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 35, codigo: 'S.C.08.08.02.024', nombre: 'Rotomartillo Sds Plus',
    descripcion: 'Rotomartillo Sds Plus — demanda histórica acumulada: 19 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-01-05', stockActual: 12,
    stockMinimo: 3, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 54800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 36, codigo: 'Z.C.06.02.07.023', nombre: 'Set De Atornilladores',
    descripcion: 'Set De Atornilladores — demanda histórica acumulada: 19 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-03-03', stockActual: 14,
    stockMinimo: 5, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 19800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 37, codigo: 'S.C.06.02.14.017', nombre: 'Sierra Circular Electrica',
    descripcion: 'Sierra Circular Electrica — demanda histórica acumulada: 19 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-02-01', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 54800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 38, codigo: 'S.C.07.03.06.012', nombre: 'Tablero Electrico',
    descripcion: 'Tablero Electrico — demanda histórica acumulada: 19 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-01-01', stockActual: 7,
    stockMinimo: 2, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 61400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 39, codigo: 'S.C.06.02.10.117', nombre: 'Taladro Inalambrico',
    descripcion: 'Taladro Inalambrico — demanda histórica acumulada: 19 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-02-02', stockActual: 24,
    stockMinimo: 5, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 54800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 40, codigo: 'S.C.36.40.01.060', nombre: 'Base Regulable 0.60 M',
    descripcion: 'Base Regulable 0.60 M — demanda histórica acumulada: 18 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-01-05', stockActual: 666,
    stockMinimo: 109, stockMaximo: 1665, unidadMedida: 'unidades',
    precioUnitario: 34100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 41, codigo: 'S.C.36.26.20.257', nombre: 'Diagonal 2.57 M',
    descripcion: 'Diagonal 2.57 M — demanda histórica acumulada: 18 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-02-01', stockActual: 120,
    stockMinimo: 51, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 34100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 42, codigo: 'C.07.01.02.007', nombre: 'Extensión Eléctrica 380 Volt',
    descripcion: 'Extensión Eléctrica 380 Volt — demanda histórica acumulada: 18 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-01-02', stockActual: 90,
    stockMinimo: 14, stockMaximo: 225, unidadMedida: 'unidades',
    precioUnitario: 14000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 43, codigo: 'S.C.12.03.04.015', nombre: 'Mueble Estante',
    descripcion: 'Mueble Estante — demanda histórica acumulada: 18 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-02-03', stockActual: 29,
    stockMinimo: 8, stockMaximo: 72, unidadMedida: 'unidades',
    precioUnitario: 87000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 44, codigo: 'C.06.02.08.824', nombre: 'Pala Punta Huevo Mango De Fibra',
    descripcion: 'Pala Punta Huevo Mango De Fibra — demanda histórica acumulada: 18 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-03-04', stockActual: 26,
    stockMinimo: 10, stockMaximo: 66, unidadMedida: 'unidades',
    precioUnitario: 17100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 45, codigo: 'S.C.36.26.07.073', nombre: 'Horizontal 0.73 M',
    descripcion: 'Horizontal 0.73 M — demanda histórica acumulada: 17 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-02-02', stockActual: 360,
    stockMinimo: 112, stockMaximo: 900, unidadMedida: 'unidades',
    precioUnitario: 18200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 46, codigo: 'S.C.36.38.38.257', nombre: 'Plataforma Robust Con Escalera 2.57 M',
    descripcion: 'Plataforma Robust Con Escalera 2.57 M — demanda histórica acumulada: 17 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-02-03', stockActual: 36,
    stockMinimo: 16, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 18200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 47, codigo: 'S.C.36.26.40.257', nombre: 'Rodapie 2.57 M',
    descripcion: 'Rodapie 2.57 M — demanda histórica acumulada: 17 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-02-04', stockActual: 420,
    stockMinimo: 92, stockMaximo: 1050, unidadMedida: 'unidades',
    precioUnitario: 18200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 48, codigo: 'Z.C.06.11.02.030', nombre: 'Juego De Llaves Torx',
    descripcion: 'Juego De Llaves Torx — demanda histórica acumulada: 16 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-03-05', stockActual: 24,
    stockMinimo: 5, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 15200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 49, codigo: 'C.06.02.07.800', nombre: 'Martillo Trinquete',
    descripcion: 'Martillo Trinquete — demanda histórica acumulada: 16 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-04-01', stockActual: 54,
    stockMinimo: 9, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 15200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 50, codigo: 'S.C.30.01.08.427', nombre: 'Mini Prisma Topografico',
    descripcion: 'Mini Prisma Topografico — demanda histórica acumulada: 16 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-01-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 101800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 51, codigo: 'P.02.03.03.007', nombre: 'Pizarra Blanca',
    descripcion: 'Pizarra Blanca — demanda histórica acumulada: 16 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-02-04', stockActual: 14,
    stockMinimo: 5, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 47500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 52, codigo: 'Z.C.06.02.09.025', nombre: 'Punto Centro',
    descripcion: 'Punto Centro — demanda histórica acumulada: 16 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-04-02', stockActual: 48,
    stockMinimo: 9, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 15200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 53, codigo: 'C.30.01.08.360', nombre: 'Serrucho Carpintero',
    descripcion: 'Serrucho Carpintero — demanda histórica acumulada: 16 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-04-03', stockActual: 24,
    stockMinimo: 6, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 15200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 54, codigo: 'C.06.02.07.208', nombre: 'Alicate De Punta Aislado 1000V',
    descripcion: 'Alicate De Punta Aislado 1000V — demanda histórica acumulada: 15 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-04-04', stockActual: 54,
    stockMinimo: 6, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 13300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 55, codigo: 'C.06.13.003', nombre: 'Marco De Sierra',
    descripcion: 'Marco De Sierra — demanda histórica acumulada: 15 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-01-05', stockActual: 36,
    stockMinimo: 10, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 76600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 56, codigo: 'S.C.06.13.01.016', nombre: 'Nivel Topografico',
    descripcion: 'Nivel Topografico — demanda histórica acumulada: 15 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-02-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 76600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 57, codigo: 'C.30.01.08.410', nombre: 'Pie De Metro 12Pulg',
    descripcion: 'Pie De Metro 12Pulg — demanda histórica acumulada: 15 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-04-05', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 13300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 58, codigo: 'S.C.06.02.10.128', nombre: 'Taladro Inalambrico 20V',
    descripcion: 'Taladro Inalambrico 20V — demanda histórica acumulada: 15 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-02-03', stockActual: 7,
    stockMinimo: 2, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 76300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 59, codigo: 'S.C.06.13.01.017', nombre: 'Tripode Topografico',
    descripcion: 'Tripode Topografico — demanda histórica acumulada: 15 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-02-02', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 76600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 60, codigo: 'C.06.03.06.003', nombre: 'Escuadra Carpintero',
    descripcion: 'Escuadra Carpintero — demanda histórica acumulada: 14 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-01-02', stockActual: 48,
    stockMinimo: 9, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 73600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 61, codigo: 'S.Z.C.06.13.05.001', nombre: 'Estacion Total',
    descripcion: 'Estacion Total — demanda histórica acumulada: 14 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-02-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 99400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 62, codigo: 'S.C.36.26.07.109', nombre: 'Horizontal 1,09',
    descripcion: 'Horizontal 1,09 — demanda histórica acumulada: 14 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-02-05', stockActual: 120,
    stockMinimo: 52, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 18600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 63, codigo: 'S.C.36.26.13.073', nombre: 'Horizontal En U 0.73 M',
    descripcion: 'Horizontal En U 0.73 M — demanda histórica acumulada: 14 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-03-01', stockActual: 540,
    stockMinimo: 121, stockMaximo: 1350, unidadMedida: 'unidades',
    precioUnitario: 18600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 64, codigo: 'Z.C.06.13.02.023', nombre: 'Huincha De Medir 50 Mts.',
    descripcion: 'Huincha De Medir 50 Mts. — demanda histórica acumulada: 14 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-02-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 99400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 65, codigo: 'Z.C.06.03.04.033', nombre: 'Limaton Redondo 12P Pulg',
    descripcion: 'Limaton Redondo 12P Pulg — demanda histórica acumulada: 14 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-01-03', stockActual: 12,
    stockMinimo: 7, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 73600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 66, codigo: 'S.Z.C.31.03.03.085', nombre: 'Maquina Soldadora Arco Manual 380V',
    descripcion: 'Maquina Soldadora Arco Manual 380V — demanda histórica acumulada: 14 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-01-04', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 73600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 67, codigo: 'S.C.06.02.14.005', nombre: 'Tecle De Cadena 2000 Kg.',
    descripcion: 'Tecle De Cadena 2000 Kg. — demanda histórica acumulada: 14 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-02-04', stockActual: 18,
    stockMinimo: 6, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 66600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 68, codigo: 'S.C.36.26.03.100', nombre: 'Vertical 1.00 M',
    descripcion: 'Vertical 1.00 M — demanda histórica acumulada: 14 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-03-02', stockActual: 600,
    stockMinimo: 106, stockMaximo: 1500, unidadMedida: 'unidades',
    precioUnitario: 18600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 69, codigo: 'C.30.01.08.080', nombre: 'Alicate Universal 8 Pulg. Aislado 1000V',
    descripcion: 'Alicate Universal 8 Pulg. Aislado 1000V — demanda histórica acumulada: 13 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-05-01', stockActual: 24,
    stockMinimo: 5, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 10200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 70, codigo: 'S.C.30.01.08.551', nombre: 'Amperimetro Tenaza',
    descripcion: 'Amperimetro Tenaza — demanda histórica acumulada: 13 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-01-02', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 40000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 71, codigo: 'C.06.02.09.039', nombre: 'Chuzo',
    descripcion: 'Chuzo — demanda histórica acumulada: 13 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-05-02', stockActual: 13,
    stockMinimo: 5, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 10200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 72, codigo: 'Z.C.06.02.09.059', nombre: 'Cincel Concretero Manual',
    descripcion: 'Cincel Concretero Manual — demanda histórica acumulada: 13 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-05-03', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 10200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 73, codigo: 'C.06.11.02.035', nombre: 'Escuadra Universal',
    descripcion: 'Escuadra Universal — demanda histórica acumulada: 13 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-05-04', stockActual: 10,
    stockMinimo: 2, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 10200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 74, codigo: 'S.C.36.26.18.109', nombre: 'Horizontal Ar U Lw 1.09M T14',
    descripcion: 'Horizontal Ar U Lw 1.09M T14 — demanda histórica acumulada: 13 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-03-03', stockActual: 120,
    stockMinimo: 59, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 25400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 75, codigo: 'S.Z.C.06.03.03.085', nombre: 'Maquina Soldadora Arco Manual 220V',
    descripcion: 'Maquina Soldadora Arco Manual 220V — demanda histórica acumulada: 13 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-01-05', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 75100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 76, codigo: 'S.C.06.02.10.043', nombre: 'Martillo Demoledor Sds Ma',
    descripcion: 'Martillo Demoledor Sds Ma — demanda histórica acumulada: 13 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-02-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 102900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 77, codigo: 'C.06.13.05.022', nombre: 'Nivel Esferico',
    descripcion: 'Nivel Esferico — demanda histórica acumulada: 13 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-02-05', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 113800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 78, codigo: 'C.06.13.05.012', nombre: 'Prisma',
    descripcion: 'Prisma — demanda histórica acumulada: 13 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-03-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 113800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 79, codigo: 'Z.C.06.02.11.012', nombre: 'Rastrillo',
    descripcion: 'Rastrillo — demanda histórica acumulada: 13 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-05-05', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 10200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 80, codigo: 'S.C.06.02.14.016', nombre: 'Sierra Caladora',
    descripcion: 'Sierra Caladora — demanda histórica acumulada: 13 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-03-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 102900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 81, codigo: 'C.06.02.07.209', nombre: 'Alicate Cortante Aislado',
    descripcion: 'Alicate Cortante Aislado — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-06-01', stockActual: 54,
    stockMinimo: 6, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 82, codigo: 'Z.C.06.02.09.004', nombre: 'Diablo',
    descripcion: 'Diablo — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-06-02', stockActual: 24,
    stockMinimo: 6, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 83, codigo: 'S.C.30.01.08.396', nombre: 'Mira De Nivelacion De Aluminio Con Niveleta',
    descripcion: 'Mira De Nivelacion De Aluminio Con Niveleta — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-06-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 84, codigo: 'C.06.13.02.067', nombre: 'Nivel Aluminio 12 Pulg',
    descripcion: 'Nivel Aluminio 12 Pulg — demanda histórica acumulada: 12 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-03-02', stockActual: 20,
    stockMinimo: 7, stockMaximo: 51, unidadMedida: 'unidades',
    precioUnitario: 116100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 85, codigo: 'C.06.11.02.043', nombre: 'Regla Paralela Metalica 2Mt. Graduada',
    descripcion: 'Regla Paralela Metalica 2Mt. Graduada — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-06-04', stockActual: 7,
    stockMinimo: 2, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4254']
  },
  {
    id: 86, codigo: 'C.06.02.08.753', nombre: 'Set De Dados Hasta 32 Mm',
    descripcion: 'Set De Dados Hasta 32 Mm — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-06-05', stockActual: 12,
    stockMinimo: 3, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 87, codigo: 'S.Z.C.06.02.99.001', nombre: 'Soplador De Aire',
    descripcion: 'Soplador De Aire — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-07-01', stockActual: 8,
    stockMinimo: 4, stockMaximo: 21, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 88, codigo: 'S.C.32.03.08.508', nombre: 'Tablero Electrico De 800X600X300Mm',
    descripcion: 'Tablero Electrico De 800X600X300Mm — demanda histórica acumulada: 12 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-01-03', stockActual: 8,
    stockMinimo: 3, stockMaximo: 21, unidadMedida: 'unidades',
    precioUnitario: 8900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 89, codigo: 'S.C.32.02.10.027', nombre: 'Taladro De Rotacion 1/2Pulg',
    descripcion: 'Taladro De Rotacion 1/2Pulg — demanda histórica acumulada: 12 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-03-02', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 51400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 90, codigo: 'S.C.32.14.02.188', nombre: 'Termometro Infarrojo Laser',
    descripcion: 'Termometro Infarrojo Laser — demanda histórica acumulada: 12 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-07-02', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 12100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 91, codigo: 'Z.C.06.02.09.036', nombre: 'Combo Fe 8 Lbs.',
    descripcion: 'Combo Fe 8 Lbs. — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-07-03', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 92, codigo: 'S.Z.C.06.02.07.161', nombre: 'Desvainador Pela Cable',
    descripcion: 'Desvainador Pela Cable — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-07-04', stockActual: 12,
    stockMinimo: 3, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 93, codigo: 'S.C.36.47.00.022', nombre: 'Grapa Ortogonal 22 Mm',
    descripcion: 'Grapa Ortogonal 22 Mm — demanda histórica acumulada: 11 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-03-04', stockActual: 1800,
    stockMinimo: 261, stockMaximo: 4500, unidadMedida: 'unidades',
    precioUnitario: 34300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 94, codigo: 'C.30.01.08.398', nombre: 'Huincha De Medir 30 Mts.',
    descripcion: 'Huincha De Medir 30 Mts. — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-07-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 95, codigo: 'Z.C.06.13.01.007', nombre: 'Jalon Topografico',
    descripcion: 'Jalon Topografico — demanda histórica acumulada: 11 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-03-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 62200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 96, codigo: 'C.30.01.08.341', nombre: 'Lima Plana 12Pulg',
    descripcion: 'Lima Plana 12Pulg — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-08-01', stockActual: 12,
    stockMinimo: 7, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 97, codigo: 'Z.C.06.02.08.104', nombre: 'Llave Unta Corona 46 Mm',
    descripcion: 'Llave Unta Corona 46 Mm — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-08-02', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 98, codigo: 'S.C.06.03.04.063', nombre: 'Napoleon 36 Pulg',
    descripcion: 'Napoleon 36 Pulg — demanda histórica acumulada: 11 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-02-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 72800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 99, codigo: 'C.06.13.02.037', nombre: 'Picota Punta Y Rama',
    descripcion: 'Picota Punta Y Rama — demanda histórica acumulada: 11 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-03-04', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 62200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 100, codigo: 'C.30.01.08.064', nombre: 'Prensa C De 8Pulg',
    descripcion: 'Prensa C De 8Pulg — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-08-03', stockActual: 24,
    stockMinimo: 9, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 101, codigo: 'S.C.36.26.40.073', nombre: 'Rodapié 0.73 M',
    descripcion: 'Rodapié 0.73 M — demanda histórica acumulada: 11 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-03-05', stockActual: 420,
    stockMinimo: 99, stockMaximo: 1050, unidadMedida: 'unidades',
    precioUnitario: 34300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 102, codigo: 'C.06.02.07.250', nombre: 'Set De Atornilladores De 7 Piezas. Aisladas Para 1000 V',
    descripcion: 'Set De Atornilladores De 7 Piezas. Aisladas Para 1000 V — demanda histórica acumulada: 11 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-08-04', stockActual: 24,
    stockMinimo: 4, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 14600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 103, codigo: 'S.Z.C.06.02.10.045', nombre: 'Taladro Mandril 5/8',
    descripcion: 'Taladro Mandril 5/8 — demanda histórica acumulada: 11 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-03-03', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 60500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 104, codigo: 'S.P.04.04.01.018', nombre: 'Televisor Color 43 Pulg',
    descripcion: 'Televisor Color 43 Pulg — demanda histórica acumulada: 11 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-01-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 108400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 105, codigo: 'Z.C.06.02.07.034', nombre: 'Alicate Caimán 10',
    descripcion: 'Alicate Caimán 10 — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-08-05', stockActual: 54,
    stockMinimo: 9, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 106, codigo: 'C.30.01.08.062', nombre: 'Alicate Picoloro 10Pulg',
    descripcion: 'Alicate Picoloro 10Pulg — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-09-01', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 107, codigo: 'S.Z.C.06.14.01.019', nombre: 'Anemometro Digital',
    descripcion: 'Anemometro Digital — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-09-02', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 108, codigo: 'C.06.02.07.171', nombre: 'Atornillador Perillero Cruz',
    descripcion: 'Atornillador Perillero Cruz — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-09-03', stockActual: 36,
    stockMinimo: 7, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 109, codigo: 'S.C.13.02.06.017', nombre: 'Cierre Perimetral 2,5X2 Galvanizado',
    descripcion: 'Cierre Perimetral 2,5X2 Galvanizado — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-09-04', stockActual: 86,
    stockMinimo: 33, stockMaximo: 216, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4257']
  },
  {
    id: 110, codigo: 'S.C.22.01.04.003', nombre: 'Equipo De Alcotest',
    descripcion: 'Equipo De Alcotest — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-09-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 111, codigo: 'Z.C.06.13.02.024', nombre: 'Huincha De Medir 5 Mts',
    descripcion: 'Huincha De Medir 5 Mts — demanda histórica acumulada: 10 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-03-05', stockActual: 48,
    stockMinimo: 17, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 112500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 112, codigo: 'S.C.06.02.08.293', nombre: 'Set De Dados Cuadrante De 1/2',
    descripcion: 'Set De Dados Cuadrante De 1/2 — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-10-01', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 113, codigo: 'Z.C.06.02.08.094', nombre: 'Llave Punta Corona 36',
    descripcion: 'Llave Punta Corona 36 — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-10-02', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 114, codigo: 'Z.C.06.02.07.115', nombre: 'Llave Stillson 14',
    descripcion: 'Llave Stillson 14 — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-10-03', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 115, codigo: 'S.C.36.26.40.109', nombre: 'Rodapie 1.09 M',
    descripcion: 'Rodapie 1.09 M — demanda histórica acumulada: 10 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-04-01', stockActual: 120,
    stockMinimo: 36, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 17100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 116, codigo: 'S.C.06.13.01.018', nombre: 'Tripode Prensa Cadena',
    descripcion: 'Tripode Prensa Cadena — demanda histórica acumulada: 10 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-04-01', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 112500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 117, codigo: 'S.Z.C.06.13.01.012', nombre: 'Tripode Topografico De Aluminio',
    descripcion: 'Tripode Topografico De Aluminio — demanda histórica acumulada: 10 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-04-02', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 112500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4254']
  },
  {
    id: 118, codigo: 'S.C.11.01.08.016', nombre: 'Tubo De Acero Cortado A 0.50M Layher',
    descripcion: 'Tubo De Acero Cortado A 0.50M Layher — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-10-04', stockActual: 960,
    stockMinimo: 135, stockMaximo: 2400, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 119, codigo: 'C.06.02.09.044', nombre: 'Uñeta Saca Clavos',
    descripcion: 'Uñeta Saca Clavos — demanda histórica acumulada: 10 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-10-05', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 14400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 120, codigo: 'C.06.02.07.276', nombre: 'Alicate Pela Cable',
    descripcion: 'Alicate Pela Cable — demanda histórica acumulada: 9 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-11-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 15800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 121, codigo: 'S.C.30.01.08.505', nombre: 'Aprieta Terminales Ergonometrico',
    descripcion: 'Aprieta Terminales Ergonometrico — demanda histórica acumulada: 9 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-11-02', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 15800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 122, codigo: 'Z.C.06.11.02.062', nombre: 'Atornilladores Aislados 1000V',
    descripcion: 'Atornilladores Aislados 1000V — demanda histórica acumulada: 9 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-11-03', stockActual: 54,
    stockMinimo: 9, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 15800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 123, codigo: 'S.C.14.01.02.006', nombre: 'Bases Hormigon',
    descripcion: 'Bases Hormigon — demanda histórica acumulada: 9 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-02-02', stockActual: 97,
    stockMinimo: 32, stockMaximo: 243, unidadMedida: 'unidades',
    precioUnitario: 40900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 124, codigo: 'S.C.12.02.04.002', nombre: 'Mesa De Reunion',
    descripcion: 'Mesa De Reunion — demanda histórica acumulada: 9 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-02-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 44500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 125, codigo: 'S.C.30.01.08.573', nombre: 'Multimetro',
    descripcion: 'Multimetro — demanda histórica acumulada: 9 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-01-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 44000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 126, codigo: 'C.06.13.02.035', nombre: 'Nivel Carpintero 18Pulg',
    descripcion: 'Nivel Carpintero 18Pulg — demanda histórica acumulada: 9 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-04-03', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 97000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4254']
  },
  {
    id: 127, codigo: 'Z.C.06.13.02.033', nombre: 'Nivel De Aluminio 1Mt.',
    descripcion: 'Nivel De Aluminio 1Mt. — demanda histórica acumulada: 9 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-04-04', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 97000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 128, codigo: 'Z.C.06.13.02.026', nombre: 'Nivel Mecanico 12Pulg',
    descripcion: 'Nivel Mecanico 12Pulg — demanda histórica acumulada: 9 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-04-05', stockActual: 12,
    stockMinimo: 3, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 97000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 129, codigo: 'S.P.04.01.06.017', nombre: 'Pistola De Calor',
    descripcion: 'Pistola De Calor — demanda histórica acumulada: 9 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-01-04', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 96600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 130, codigo: 'C.06.02.09.087', nombre: 'Platacho De Madera',
    descripcion: 'Platacho De Madera — demanda histórica acumulada: 9 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-11-04', stockActual: 24,
    stockMinimo: 8, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 15800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4254']
  },
  {
    id: 131, codigo: 'S.C.06.04.03.058', nombre: 'Sierra Sable',
    descripcion: 'Sierra Sable — demanda histórica acumulada: 9 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-03-01', stockActual: 4,
    stockMinimo: 1, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 44500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 132, codigo: 'S.C.08.08.02.026', nombre: 'Tecle Tipo Tirfor 1600 Kg.',
    descripcion: 'Tecle Tipo Tirfor 1600 Kg. — demanda histórica acumulada: 9 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-03-04', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 72100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4257']
  },
  {
    id: 133, codigo: 'Z.C.06.11.03.022', nombre: 'Termo Soldadura',
    descripcion: 'Termo Soldadura — demanda histórica acumulada: 9 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-02-03', stockActual: 19,
    stockMinimo: 7, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 40900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 134, codigo: 'S.C.36.26.24.257', nombre: 'Viga Puente En U 2.57 M',
    descripcion: 'Viga Puente En U 2.57 M — demanda histórica acumulada: 9 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-04-02', stockActual: 857,
    stockMinimo: 114, stockMaximo: 2142, unidadMedida: 'unidades',
    precioUnitario: 20100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 135, codigo: 'S.P.04.01.01.002', nombre: 'Aspiradora Polvo Agua 80 Lt',
    descripcion: 'Aspiradora Polvo Agua 80 Lt — demanda histórica acumulada: 8 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-11-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 14500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 136, codigo: 'C.06.02.07.170', nombre: 'Atornillador Perillero Paleta',
    descripcion: 'Atornillador Perillero Paleta — demanda histórica acumulada: 8 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-12-01', stockActual: 36,
    stockMinimo: 8, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 14500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 137, codigo: 'C.06.02.13.032', nombre: 'Set Llaves Punta Y Corona 10 A 32Mm.',
    descripcion: 'Set Llaves Punta Y Corona 10 A 32Mm. — demanda histórica acumulada: 8 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-12-02', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 14500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 138, codigo: 'C.06.03.04.038', nombre: 'Lima Media Cana Bastarda 12 Pulg',
    descripcion: 'Lima Media Cana Bastarda 12 Pulg — demanda histórica acumulada: 8 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-02-04', stockActual: 24,
    stockMinimo: 10, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 55900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 139, codigo: 'S.P.02.01.08.001', nombre: 'Maquina Rotuladora',
    descripcion: 'Maquina Rotuladora — demanda histórica acumulada: 8 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-01-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 84400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 140, codigo: 'S.P.04.01.06.015', nombre: 'Pistola Calefactora Aire Caliente',
    descripcion: 'Pistola Calefactora Aire Caliente — demanda histórica acumulada: 8 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-02-01', stockActual: 24,
    stockMinimo: 5, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 84400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 141, codigo: 'S.C.36.26.02.022', nombre: 'Roseta Allround',
    descripcion: 'Roseta Allround — demanda histórica acumulada: 8 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-04-03', stockActual: 180,
    stockMinimo: 56, stockMaximo: 450, unidadMedida: 'unidades',
    precioUnitario: 24400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 142, codigo: 'S.C.36.47.02.022', nombre: 'Grapa Giratoria 22 Mm',
    descripcion: 'Grapa Giratoria 22 Mm — demanda histórica acumulada: 7 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-04-04', stockActual: 120,
    stockMinimo: 55, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 24000, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 143, codigo: 'S.Z.C.06.03.04.038', nombre: 'Grifa De 2 Bocas 5/8 Pulg  A 3/4 Pulg',
    descripcion: 'Grifa De 2 Bocas 5/8 Pulg  A 3/4 Pulg — demanda histórica acumulada: 7 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-02-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 48900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 144, codigo: 'S.C.09.02.04.091', nombre: 'Kit Soporte Lateral Galv. C/ Abrazadera',
    descripcion: 'Kit Soporte Lateral Galv. C/ Abrazadera — demanda histórica acumulada: 7 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-12-03', stockActual: 32,
    stockMinimo: 10, stockMaximo: 81, unidadMedida: 'unidades',
    precioUnitario: 11700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4257']
  },
  {
    id: 145, codigo: 'Z.C.06.02.07.042', nombre: 'Llave Ajustable 8',
    descripcion: 'Llave Ajustable 8 — demanda histórica acumulada: 7 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-12-04', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 146, codigo: 'S.Z.C.06.13.02.039', nombre: 'Nivel De Aluminio 24',
    descripcion: 'Nivel De Aluminio 24 — demanda histórica acumulada: 7 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-05-01', stockActual: 36,
    stockMinimo: 11, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 86400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 147, codigo: 'Z.C.06.13.05.011', nombre: 'Porta Prisma',
    descripcion: 'Porta Prisma — demanda histórica acumulada: 7 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-05-02', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 86400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 148, codigo: 'S.C.06.02.08.289', nombre: 'Set De Llaves Allen Aislados A 1000 Volt',
    descripcion: 'Set De Llaves Allen Aislados A 1000 Volt — demanda histórica acumulada: 7 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-12-05', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231', 'P-4254']
  },
  {
    id: 149, codigo: 'S.Z.C.06.02.08.019', nombre: 'Set De Llaves Punta Y Corona 12 Pcs',
    descripcion: 'Set De Llaves Punta Y Corona 12 Pcs — demanda histórica acumulada: 7 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-13-01', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 11700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4254']
  },
  {
    id: 150, codigo: 'C.06.08.07.064', nombre: 'Soportes Para Tuberias Con Cabezal En V',
    descripcion: 'Soportes Para Tuberias Con Cabezal En V — demanda histórica acumulada: 7 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-01-04', stockActual: 24,
    stockMinimo: 11, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 47500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 151, codigo: 'S.C.08.08.02.027', nombre: 'Tecle Tipo Tirfor 3200 Kg.',
    descripcion: 'Tecle Tipo Tirfor 3200 Kg. — demanda histórica acumulada: 7 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-03-05', stockActual: 14,
    stockMinimo: 4, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 72700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4257']
  },
  {
    id: 152, codigo: 'P.01.01.09.016', nombre: 'Termolaminadora',
    descripcion: 'Termolaminadora — demanda histórica acumulada: 7 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-13-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 153, codigo: 'S.C.30.01.08.499', nombre: 'Crimpadora Hidraulica',
    descripcion: 'Crimpadora Hidraulica — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-13-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 154, codigo: 'C.30.01.08.704', nombre: 'Carro Oxicorte Doble',
    descripcion: 'Carro Oxicorte Doble — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-13-04', stockActual: 10,
    stockMinimo: 3, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 155, codigo: 'S.C.13.02.06.018', nombre: 'Cierre Perimetral 1X2 Galvanizado',
    descripcion: 'Cierre Perimetral 1X2 Galvanizado — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-13-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231', 'P-4257']
  },
  {
    id: 156, codigo: 'Z.C.06.11.03.015', nombre: 'Combo Fe 8 Lbs',
    descripcion: 'Combo Fe 8 Lbs — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-14-01', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4231', 'P-4254']
  },
  {
    id: 157, codigo: 'S.C.30.01.08.352', nombre: 'Esmeril Angular Inalámbrico 4 ½  18 V',
    descripcion: 'Esmeril Angular Inalámbrico 4 ½  18 V — demanda histórica acumulada: 6 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-04-01', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 58600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 158, codigo: 'Z.C.06.04.06.020', nombre: 'Formon 1 Pulg',
    descripcion: 'Formon 1 Pulg — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-14-02', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 159, codigo: 'S.Z.C.06.02.07.160', nombre: 'Juego Terraja 1/2 X 2',
    descripcion: 'Juego Terraja 1/2 X 2 — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-14-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 160, codigo: 'S.C.33.02.08.646', nombre: 'Set Llave Punta Y Corona De 5/16 Pulg A 1 ¼ Pulg',
    descripcion: 'Set Llave Punta Y Corona De 5/16 Pulg A 1 ¼ Pulg — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-14-04', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 161, codigo: 'S.C.30.01.08.685', nombre: 'Lima Media Caña 12 Pulg',
    descripcion: 'Lima Media Caña 12 Pulg — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-14-05', stockActual: 12,
    stockMinimo: 7, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4231']
  },
  {
    id: 162, codigo: 'Z.C.06.02.08.079', nombre: 'Llave Punta Corona 24',
    descripcion: 'Llave Punta Corona 24 — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-15-01', stockActual: 17,
    stockMinimo: 8, stockMaximo: 42, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 163, codigo: 'S.C.06.02.10.044', nombre: 'Martillo Demoledor Sds Max 10Kg',
    descripcion: 'Martillo Demoledor Sds Max 10Kg — demanda histórica acumulada: 6 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-04-02', stockActual: 8,
    stockMinimo: 3, stockMaximo: 21, unidadMedida: 'unidades',
    precioUnitario: 58600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 164, codigo: 'S.C.07.03.04.107', nombre: 'Termometro-Higrometro',
    descripcion: 'Termometro-Higrometro — demanda histórica acumulada: 6 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-01-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 43600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 165, codigo: 'S.Z.C.06.11.02.002', nombre: 'Pistola De Fijacion',
    descripcion: 'Pistola De Fijacion — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-15-02', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 166, codigo: 'S.C.36.38.01.257', nombre: 'Plataforma Acero 0.19 X 2.57 Mt',
    descripcion: 'Plataforma Acero 0.19 X 2.57 Mt — demanda histórica acumulada: 6 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-04-05', stockActual: 120,
    stockMinimo: 46, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 26400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 167, codigo: 'C.30.01.08.236', nombre: 'Set De Llaves Estrellas T10 A T50',
    descripcion: 'Set De Llaves Estrellas T10 A T50 — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-15-03', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 168, codigo: 'C.30.01.08.277', nombre: 'Set Llaves Punta Corona De 6 A 32 Mm',
    descripcion: 'Set Llaves Punta Corona De 6 A 32 Mm — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-15-04', stockActual: 24,
    stockMinimo: 6, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219', 'P-4257']
  },
  {
    id: 169, codigo: 'S.C.30.01.08.311', nombre: 'Taladro De Percusion 1/2Pulg',
    descripcion: 'Taladro De Percusion 1/2Pulg — demanda histórica acumulada: 6 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-04-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 58600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 170, codigo: 'S.Z.C.06.02.10.024', nombre: 'Taladro De Percusion 5/8',
    descripcion: 'Taladro De Percusion 5/8 — demanda histórica acumulada: 6 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-04-04', stockActual: 12,
    stockMinimo: 4, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 58600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 171, codigo: 'C.06.02.08.212', nombre: 'Tornillo Mecanico Num 6',
    descripcion: 'Tornillo Mecanico Num 6 — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-15-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219', 'P-4257', 'P-4254']
  },
  {
    id: 172, codigo: 'C.30.01.08.218', nombre: 'Tornillo Mecanico Num 8',
    descripcion: 'Tornillo Mecanico Num 8 — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-16-01', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 173, codigo: 'S.C.30.01.08.545', nombre: 'Unidad Motriz De Alta Frecuencia',
    descripcion: 'Unidad Motriz De Alta Frecuencia — demanda histórica acumulada: 6 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-16-02', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 12800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 174, codigo: 'C.06.02.13.077', nombre: 'Aprieta Terminal Para Ferrul 0.25 A 6Mm',
    descripcion: 'Aprieta Terminal Para Ferrul 0.25 A 6Mm — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-16-03', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 175, codigo: 'C.06.02.13.086', nombre: 'Aprieta Terminales Manual',
    descripcion: 'Aprieta Terminales Manual — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-16-04', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4254']
  },
  {
    id: 176, codigo: 'Z.C.06.02.12.007', nombre: 'Bombín',
    descripcion: 'Bombín — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-16-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 177, codigo: 'C.06.02.10.050', nombre: 'Bujardas Sds Max',
    descripcion: 'Bujardas Sds Max — demanda histórica acumulada: 5 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-04-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 64400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 178, codigo: 'C.30.01.08.705', nombre: 'Carro Cilindro Simple',
    descripcion: 'Carro Cilindro Simple — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-17-01', stockActual: 19,
    stockMinimo: 7, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 179, codigo: 'C.30.01.08.302', nombre: 'Combo Fe 6 Lbs. Mango De Fibra',
    descripcion: 'Combo Fe 6 Lbs. Mango De Fibra — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-17-02', stockActual: 19,
    stockMinimo: 9, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 180, codigo: 'Z.C.06.14.02.001', nombre: 'Cono De Habrams',
    descripcion: 'Cono De Habrams — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-17-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4254']
  },
  {
    id: 181, codigo: 'C.30.01.08.464', nombre: 'Escalera Tijera Fibra 3 Mts.',
    descripcion: 'Escalera Tijera Fibra 3 Mts. — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-17-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219', 'P-4231', 'P-4257', 'P-4254']
  },
  {
    id: 182, codigo: 'C.14.04.06.029', nombre: 'Fumigadora Manual',
    descripcion: 'Fumigadora Manual — demanda histórica acumulada: 5 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-03-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 37700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4254']
  },
  {
    id: 183, codigo: 'S.Z.C.06.03.04.039', nombre: 'Grifa De 2 Bocas 1/2 Pulg  A 5/8 Pulg',
    descripcion: 'Grifa De 2 Bocas 1/2 Pulg  A 5/8 Pulg — demanda histórica acumulada: 5 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-03-02', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 37700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 184, codigo: 'C.06.03.04.071', nombre: 'Huincha De Medir Metalica 100 Mt',
    descripcion: 'Huincha De Medir Metalica 100 Mt — demanda histórica acumulada: 5 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-03-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 37700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 185, codigo: 'S.C.08.09.01.020', nombre: 'Jaula Almacenamiento Suspel 1200X1800X2500 Mm',
    descripcion: 'Jaula Almacenamiento Suspel 1200X1800X2500 Mm — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-17-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4231', 'P-4257']
  },
  {
    id: 186, codigo: 'C.30.01.08.601', nombre: 'Juego Atornilladores Torx',
    descripcion: 'Juego Atornilladores Torx — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-18-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 187, codigo: 'C.06.02.09.023', nombre: 'Llana Lisa',
    descripcion: 'Llana Lisa — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-18-02', stockActual: 24,
    stockMinimo: 7, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219', 'P-4254']
  },
  {
    id: 188, codigo: 'Z.C.06.02.07.035', nombre: 'Llave Ajustable 10',
    descripcion: 'Llave Ajustable 10 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-18-03', stockActual: 54,
    stockMinimo: 12, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 189, codigo: 'S.C.06.02.08.163', nombre: 'Llave Torque Cuadrante De 1/2',
    descripcion: 'Llave Torque Cuadrante De 1/2 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-18-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4231']
  },
  {
    id: 190, codigo: 'Z.C.06.02.08.099', nombre: 'Llave Punta Corona 41',
    descripcion: 'Llave Punta Corona 41 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-18-05', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 191, codigo: 'Z.C.06.02.08.110', nombre: 'Llave Punta Corona 50',
    descripcion: 'Llave Punta Corona 50 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-19-01', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 192, codigo: 'C.30.01.08.049', nombre: 'Llave Stillson 10Pulg',
    descripcion: 'Llave Stillson 10Pulg — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-19-02', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 193, codigo: 'Z.C.06.02.07.044', nombre: 'Llave Stillson 12',
    descripcion: 'Llave Stillson 12 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-19-03', stockActual: 10,
    stockMinimo: 3, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 194, codigo: 'S.C.30.01.08.515', nombre: 'Llave Torque Cuadrante De 3/4',
    descripcion: 'Llave Torque Cuadrante De 3/4 — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-19-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 195, codigo: 'S.C.07.03.04.113', nombre: 'Medidor De Traslape Hi-Lo',
    descripcion: 'Medidor De Traslape Hi-Lo — demanda histórica acumulada: 5 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-02-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 35100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 196, codigo: 'S.Z.C.06.02.08.213', nombre: 'Niplera Electrica',
    descripcion: 'Niplera Electrica — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-19-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 197, codigo: 'S.C.36.38.12.073', nombre: 'Plataforma Acero 0.32 X 0.73 M - Perf.',
    descripcion: 'Plataforma Acero 0.32 X 0.73 M - Perf. — demanda histórica acumulada: 5 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-05-01', stockActual: 240,
    stockMinimo: 90, stockMaximo: 600, unidadMedida: 'unidades',
    precioUnitario: 24200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 198, codigo: 'S.C.06.07.09.015', nombre: 'Plataforma Para Estanque 0.73 M',
    descripcion: 'Plataforma Para Estanque 0.73 M — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-20-01', stockActual: 360,
    stockMinimo: 88, stockMaximo: 900, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 199, codigo: 'S.P.04.03.06.013', nombre: 'Radio Digital Portatil',
    descripcion: 'Radio Digital Portatil — demanda histórica acumulada: 5 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-03-02', stockActual: 24,
    stockMinimo: 9, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 68700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231']
  },
  {
    id: 200, codigo: 'C.06.11.02.042', nombre: 'Regla Paralela Metalica 1.5Mt. Graduada',
    descripcion: 'Regla Paralela Metalica 1.5Mt. Graduada — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-20-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
];

const _PROD_CHUNK_2: Producto[] = [
  {
    id: 201, codigo: 'S.C.36.26.03.000', nombre: 'Rigidizador Vertical 0.5',
    descripcion: 'Rigidizador Vertical 0.5 — demanda histórica acumulada: 5 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-05-02', stockActual: 120,
    stockMinimo: 56, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 24200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 202, codigo: 'S.C.06.02.10.120', nombre: 'Rotomartillo Toma Sds Max 7 Kg',
    descripcion: 'Rotomartillo Toma Sds Max 7 Kg — demanda histórica acumulada: 5 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-05-01', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 64400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 203, codigo: 'S.C.36.12.60.200', nombre: 'Rueda 1000 Kg / Con Base Regulable',
    descripcion: 'Rueda 1000 Kg / Con Base Regulable — demanda histórica acumulada: 5 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-05-03', stockActual: 38,
    stockMinimo: 22, stockMaximo: 96, unidadMedida: 'unidades',
    precioUnitario: 24200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 204, codigo: 'S.C.06.02.08.820', nombre: 'Set Llave Torx Aislada 1000 Volt',
    descripcion: 'Set Llave Torx Aislada 1000 Volt — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-20-03', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4254']
  },
  {
    id: 205, codigo: 'C.06.05.07.064', nombre: 'Set Llave Allens De 1/6 A 3/4Pulg',
    descripcion: 'Set Llave Allens De 1/6 A 3/4Pulg — demanda histórica acumulada: 5 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-20-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 18500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 206, codigo: 'S.C.06.02.14.010', nombre: 'Tecle De Palanca 3000 Kg.',
    descripcion: 'Tecle De Palanca 3000 Kg. — demanda histórica acumulada: 5 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-05-02', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 64400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 207, codigo: 'S.Z.C.06.02.14.013', nombre: 'Tecle Palanca 750 Kilos',
    descripcion: 'Tecle Palanca 750 Kilos — demanda histórica acumulada: 5 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-05-03', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 64400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 208, codigo: 'Z.C.06.03.04.022', nombre: 'Tijera Hojalatera Derecha',
    descripcion: 'Tijera Hojalatera Derecha — demanda histórica acumulada: 5 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-03-04', stockActual: 18,
    stockMinimo: 4, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 37700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 209, codigo: 'Z.C.06.03.04.020', nombre: 'Tijera Hojalatera Recta',
    descripcion: 'Tijera Hojalatera Recta — demanda histórica acumulada: 5 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-03-05', stockActual: 18,
    stockMinimo: 5, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 37700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 210, codigo: 'Z.C.06.02.07.106', nombre: 'Alicate Cortante 6',
    descripcion: 'Alicate Cortante 6 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-20-05', stockActual: 14,
    stockMinimo: 4, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 211, codigo: 'C.06.02.07.149', nombre: 'Alicate Picoloro 12 Pulg',
    descripcion: 'Alicate Picoloro 12 Pulg — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-21-01', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219', 'P-4254']
  },
  {
    id: 212, codigo: 'S.C.06.03.03.133', nombre: 'Base Porta Carrete',
    descripcion: 'Base Porta Carrete — demanda histórica acumulada: 4 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-04-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 44300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 213, codigo: 'C.06.13.01.020', nombre: 'Base Tribach Con Adaptador',
    descripcion: 'Base Tribach Con Adaptador — demanda histórica acumulada: 4 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-05-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 58200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219', 'P-4257']
  },
  {
    id: 214, codigo: 'C.06.10.02.010', nombre: 'Bidon Metalico 20 Lts',
    descripcion: 'Bidon Metalico 20 Lts — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-21-02', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4231']
  },
  {
    id: 215, codigo: 'C.06.09.01.051', nombre: 'Bomba De Trasvasije',
    descripcion: 'Bomba De Trasvasije — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-21-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219', 'P-4254']
  },
  {
    id: 216, codigo: 'S.C.03.02.99.006', nombre: 'Calibrador De Soldadura Bridge Cam',
    descripcion: 'Calibrador De Soldadura Bridge Cam — demanda histórica acumulada: 4 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-04-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 44300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 217, codigo: 'C.30.01.08.286', nombre: 'Centradores Conico 12 A 3/4',
    descripcion: 'Centradores Conico 12 A 3/4 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-21-04', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231']
  },
  {
    id: 218, codigo: 'S.C.36.26.60.000', nombre: 'Collarín Alto',
    descripcion: 'Collarín Alto — demanda histórica acumulada: 4 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-05-04', stockActual: 38,
    stockMinimo: 18, stockMaximo: 96, unidadMedida: 'unidades',
    precioUnitario: 19500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 219, codigo: 'Z.C.06.02.09.034', nombre: 'Combo Fe 4 Lbs.',
    descripcion: 'Combo Fe 4 Lbs. — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-21-05', stockActual: 14,
    stockMinimo: 4, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 220, codigo: 'S.C.30.01.08.624', nombre: 'Corta Cable Chicharra Manual',
    descripcion: 'Corta Cable Chicharra Manual — demanda histórica acumulada: 4 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-01-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'metros',
    precioUnitario: 12600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 221, codigo: 'S.C.08.07.01.008', nombre: 'Detector Gas',
    descripcion: 'Detector Gas — demanda histórica acumulada: 4 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-02-02', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 38600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 222, codigo: 'Z.C.03.02.10.018', nombre: 'Equipo Tig 200 Amp',
    descripcion: 'Equipo Tig 200 Amp — demanda histórica acumulada: 4 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-04-03', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 44300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 223, codigo: 'C.06.11.02.063', nombre: 'Escuadra Carpintera 10Pulg',
    descripcion: 'Escuadra Carpintera 10Pulg — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-22-01', stockActual: 14,
    stockMinimo: 8, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 224, codigo: 'Z.C.06.02.09.053', nombre: 'Espatula 80Mm',
    descripcion: 'Espatula 80Mm — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-22-02', stockActual: 36,
    stockMinimo: 14, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219', 'P-4254']
  },
  {
    id: 225, codigo: 'S.C.36.47.06.022', nombre: 'Espiga Para Tubo De 48 Mm',
    descripcion: 'Espiga Para Tubo De 48 Mm — demanda histórica acumulada: 4 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-05-05', stockActual: 60,
    stockMinimo: 35, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 19500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 226, codigo: 'S.C.30.01.08.347', nombre: 'Grifa De 10-12 Mm',
    descripcion: 'Grifa De 10-12 Mm — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-22-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 227, codigo: 'S.C.06.15.03.005', nombre: 'Hidrolavadora Electrica',
    descripcion: 'Hidrolavadora Electrica — demanda histórica acumulada: 4 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-05-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 92600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 228, codigo: '2607039', nombre: 'Horizontal 0,39 Mt',
    descripcion: 'Horizontal 0,39 Mt — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-22-04', stockActual: 60,
    stockMinimo: 40, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 229, codigo: 'S.C.06.08.08.042', nombre: 'Horizontal 1.57 M',
    descripcion: 'Horizontal 1.57 M — demanda histórica acumulada: 4 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-05-05', stockActual: 60,
    stockMinimo: 46, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 92600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 230, codigo: 'S.C.09.02.04.093', nombre: 'Kit Bisagra Para Porton 1 Hoja Galv.',
    descripcion: 'Kit Bisagra Para Porton 1 Hoja Galv. — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-22-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 231, codigo: 'S.C.09.02.04.092', nombre: 'Kit Ruedas Porton 1 Hoja Galv.',
    descripcion: 'Kit Ruedas Porton 1 Hoja Galv. — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-23-01', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 232, codigo: 'S.Z.C.06.02.07.038', nombre: 'Llave Ajustable 18',
    descripcion: 'Llave Ajustable 18 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-23-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 233, codigo: 'Z.C.06.02.08.066', nombre: 'Llave Punta Corona 19',
    descripcion: 'Llave Punta Corona 19 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-23-03', stockActual: 17,
    stockMinimo: 10, stockMaximo: 42, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 234, codigo: 'Z.C.06.02.08.090', nombre: 'Llave Punta Corona 32',
    descripcion: 'Llave Punta Corona 32 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-23-04', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 235, codigo: 'C.06.03.03.101', nombre: 'Llave Stillson 12 Pulg',
    descripcion: 'Llave Stillson 12 Pulg — demanda histórica acumulada: 4 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-04-04', stockActual: 54,
    stockMinimo: 12, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 44300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 236, codigo: 'S.Z.C.06.02.07.045', nombre: 'Llave Stillson 18',
    descripcion: 'Llave Stillson 18 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-23-05', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 237, codigo: 'Z.C.06.02.07.046', nombre: 'Llave Stillson 24',
    descripcion: 'Llave Stillson 24 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-24-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 238, codigo: 'Z.C.06.02.07.007', nombre: 'Marco Sierra',
    descripcion: 'Marco Sierra — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-24-02', stockActual: 54,
    stockMinimo: 13, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4254']
  },
  {
    id: 239, codigo: 'S.C.36.47.00.023', nombre: 'Media Grapa P/Perfil Metal O,22',
    descripcion: 'Media Grapa P/Perfil Metal O,22 — demanda histórica acumulada: 4 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-06-01', stockActual: 120,
    stockMinimo: 68, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 19500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 240, codigo: 'S.C.30.01.08.518', nombre: 'Medidor De Aislacion',
    descripcion: 'Medidor De Aislacion — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-24-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 241, codigo: 'S.C.30.01.08.526', nombre: 'Medidor De Espesor Elcometer Mod.456',
    descripcion: 'Medidor De Espesor Elcometer Mod.456 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-24-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 242, codigo: 'S.C.03.01.13.019', nombre: 'Pasteca De 2 Tons',
    descripcion: 'Pasteca De 2 Tons — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-24-05', stockActual: 10,
    stockMinimo: 3, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 243, codigo: 'S.C.06.13.02.062', nombre: 'Pistola Anclaje',
    descripcion: 'Pistola Anclaje — demanda histórica acumulada: 4 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-06-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 92600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4254']
  },
  {
    id: 244, codigo: 'S.C.06.02.09.086', nombre: 'Plana Lengüeta',
    descripcion: 'Plana Lengüeta — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-25-01', stockActual: 24,
    stockMinimo: 9, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 245, codigo: 'Z.C.06.02.09.060', nombre: 'Planas Botadoras',
    descripcion: 'Planas Botadoras — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-25-02', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4254']
  },
  {
    id: 246, codigo: 'C.06.02.09.106', nombre: 'Platacho 1.2 M Con Extensiones',
    descripcion: 'Platacho 1.2 M Con Extensiones — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-25-03', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4254']
  },
  {
    id: 247, codigo: 'S.C.36.38.12.109', nombre: 'Plataforma Acero 0.32 X 1.09 M - Perf.',
    descripcion: 'Plataforma Acero 0.32 X 1.09 M - Perf. — demanda histórica acumulada: 4 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-06-02', stockActual: 120,
    stockMinimo: 65, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 19500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 248, codigo: '3801073', nombre: 'Plataforma De Acero 0,73 X 0,19',
    descripcion: 'Plataforma De Acero 0,73 X 0,19 — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-25-04', stockActual: 60,
    stockMinimo: 20, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 249, codigo: 'S.Z.C.06.08.05.018', nombre: 'Porta Power Hidráulico 10 Ton',
    descripcion: 'Porta Power Hidráulico 10 Ton — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-25-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166', 'P-4231']
  },
  {
    id: 250, codigo: 'C.06.11.02.036', nombre: 'Regla Paralela Metalica 1Mt. Graduada',
    descripcion: 'Regla Paralela Metalica 1Mt. Graduada — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-26-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 251, codigo: 'S.C.06.02.10.039', nombre: 'Rotomartillo Toma Sds Plus',
    descripcion: 'Rotomartillo Toma Sds Plus — demanda histórica acumulada: 4 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-06-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 92600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 252, codigo: 'S.C.06.02.08.286', nombre: 'Set De Dados Cuadrante ½ De 10 A 24 Pzas Aislados',
    descripcion: 'Set De Dados Cuadrante ½ De 10 A 24 Pzas Aislados — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-26-02', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4219']
  },
  {
    id: 253, codigo: 'S.C.06.02.08.477', nombre: 'Set Llave Punta Corona Chicharra 8 Mm A 19Mm',
    descripcion: 'Set Llave Punta Corona Chicharra 8 Mm A 19Mm — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-26-03', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 254, codigo: 'S.C.30.01.08.372', nombre: 'Sonda Vibradora Alta Frecuencia 45Mm.',
    descripcion: 'Sonda Vibradora Alta Frecuencia 45Mm. — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-26-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219', 'P-4231']
  },
  {
    id: 255, codigo: 'S.C.06.02.14.006', nombre: 'Tecle De Cadena 3000 Kg.',
    descripcion: 'Tecle De Cadena 3000 Kg. — demanda histórica acumulada: 4 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-06-03', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 92600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 256, codigo: 'S.C.06.05.14.027', nombre: 'Testiguera',
    descripcion: 'Testiguera — demanda histórica acumulada: 4 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-04-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 44300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 257, codigo: 'S.C.11.01.08.018', nombre: 'Tubo Acero Cortado A 1.00 M.',
    descripcion: 'Tubo Acero Cortado A 1.00 M. — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-26-05', stockActual: 192,
    stockMinimo: 85, stockMaximo: 480, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 258, codigo: 'S.C.11.01.08.020', nombre: 'Tubo De Acero Cortado A 1.50 M',
    descripcion: 'Tubo De Acero Cortado A 1.50 M — demanda histórica acumulada: 4 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-27-01', stockActual: 60,
    stockMinimo: 32, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 16400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4257']
  },
  {
    id: 259, codigo: 'S.C.06.02.08.999', nombre: 'Adaptador Dado Impacto 1/2 Hembra A Macho 3/4',
    descripcion: 'Adaptador Dado Impacto 1/2 Hembra A Macho 3/4 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-27-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 260, codigo: 'Z.C.06.02.07.005', nombre: 'Alicate Universal',
    descripcion: 'Alicate Universal — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-27-03', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 261, codigo: 'S.C.06.02.07.211', nombre: 'Alicate Universal 8 Pulg Aislado 1000 Volt',
    descripcion: 'Alicate Universal 8 Pulg Aislado 1000 Volt — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-27-04', stockActual: 13,
    stockMinimo: 8, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4254']
  },
  {
    id: 262, codigo: 'C.06.11.02.074', nombre: 'Aplicador Hdm 500',
    descripcion: 'Aplicador Hdm 500 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-27-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 263, codigo: 'S.C.06.02.13.055', nombre: 'Aprieta Terminal Manual De 10-120Mm',
    descripcion: 'Aprieta Terminal Manual De 10-120Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-28-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 264, codigo: 'C.06.02.07.191', nombre: 'Atornillador Cruz Aislado Vde N0 Knipex',
    descripcion: 'Atornillador Cruz Aislado Vde N0 Knipex — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-28-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 265, codigo: 'C.19.02.04.003', nombre: 'Barrera De Seguridad',
    descripcion: 'Barrera De Seguridad — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-28-03', stockActual: 36,
    stockMinimo: 27, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231', 'P-4257']
  },
  {
    id: 266, codigo: 'C.06.02.08.481', nombre: 'Barrote Cuadrante 3/4Pulg',
    descripcion: 'Barrote Cuadrante 3/4Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-28-04', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4231']
  },
  {
    id: 267, codigo: 'S.C.06.05.01.006', nombre: 'Betonera De Volteo Motor Electrico',
    descripcion: 'Betonera De Volteo Motor Electrico — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-28-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 268, codigo: 'C.06.02.08.461', nombre: 'Chicharra 3/4',
    descripcion: 'Chicharra 3/4 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-29-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 269, codigo: 'C.30.01.08.211', nombre: 'Chicharra Cuadrante 1/2Pulg',
    descripcion: 'Chicharra Cuadrante 1/2Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-29-02', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 270, codigo: 'C.30.01.08.296', nombre: 'Combo Fe 12 Lbs. Mango De Fibra',
    descripcion: 'Combo Fe 12 Lbs. Mango De Fibra — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-29-03', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 271, codigo: 'C.06.04.03.059', nombre: 'Compas Exterior 12 Pulg',
    descripcion: 'Compas Exterior 12 Pulg — demanda histórica acumulada: 3 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-03-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 50700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 272, codigo: 'S.C.06.11.99.022', nombre: 'Compas Interior 12Pulg',
    descripcion: 'Compas Interior 12Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-29-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 273, codigo: 'Z.C.06.02.07.096', nombre: 'Cuenta Hilo Milimetrico',
    descripcion: 'Cuenta Hilo Milimetrico — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-29-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219']
  },
  {
    id: 274, codigo: 'S.Z.C.06.02.13.004', nombre: 'Curvadora Hidraulica 1/2 A 2',
    descripcion: 'Curvadora Hidraulica 1/2 A 2 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-30-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4231']
  },
  {
    id: 275, codigo: 'S.Z.C.06.02.13.012', nombre: 'Curvadora Hidraulica 1/2 A 4 Pulg',
    descripcion: 'Curvadora Hidraulica 1/2 A 4 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-30-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166', 'P-4219']
  },
  {
    id: 276, codigo: 'S.C.21.03.06.052', nombre: 'Curvadora Manual Para Tubing Inox. 1/2"',
    descripcion: 'Curvadora Manual Para Tubing Inox. 1/2" — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-30-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 277, codigo: 'P.06.02.01.077', nombre: 'Dado Corriente Cuadrante 3/4Pulg. 36Mm.',
    descripcion: 'Dado Corriente Cuadrante 3/4Pulg. 36Mm. — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-30-04', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 278, codigo: 'S.C.30.01.08.209', nombre: 'Dado Impacto Cuadrante 3/4 X 32 Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 32 Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-30-05', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 279, codigo: 'S.C.07.03.04.015', nombre: 'Detector De Voltaje Tipo Lapiz',
    descripcion: 'Detector De Voltaje Tipo Lapiz — demanda histórica acumulada: 3 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-02-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 55500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 280, codigo: 'S.C.36.26.20.073', nombre: 'Diagonal 0.73 M',
    descripcion: 'Diagonal 0.73 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-06-03', stockActual: 72,
    stockMinimo: 37, stockMaximo: 180, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 281, codigo: 'S.C.36.26.20.110', nombre: 'Diagonal 1.57 M',
    descripcion: 'Diagonal 1.57 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-06-04', stockActual: 60,
    stockMinimo: 32, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 282, codigo: 'S.C.06.13.03.006', nombre: 'Drone Dji Mini 3 + Tarjeta Ssd 128Gb',
    descripcion: 'Drone Dji Mini 3 + Tarjeta Ssd 128Gb — demanda histórica acumulada: 3 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-05-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 68600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219', 'P-4257']
  },
  {
    id: 283, codigo: 'S.C.09.01.10.025', nombre: 'Durometro',
    descripcion: 'Durometro — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-31-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 284, codigo: 'S.Z.C.06.03.03.007', nombre: 'Equipo De Oxicorte',
    descripcion: 'Equipo De Oxicorte — demanda histórica acumulada: 3 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-05-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 53800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 285, codigo: 'S.C.06.03.03.113', nombre: 'Equipo De Oxicorte (Oxigeno-Propano)',
    descripcion: 'Equipo De Oxicorte (Oxigeno-Propano) — demanda histórica acumulada: 3 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-05-02', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 53800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4257']
  },
  {
    id: 286, codigo: 'S.C.08.08.02.032', nombre: 'Escalera Telescopica De Fibra De Vidrio 6 Mts',
    descripcion: 'Escalera Telescopica De Fibra De Vidrio 6 Mts — demanda histórica acumulada: 3 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-06-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 82300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219', 'P-4257']
  },
  {
    id: 287, codigo: 'Z.C.06.02.07.112', nombre: 'Filler Milimetrico',
    descripcion: 'Filler Milimetrico — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-31-02', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219']
  },
  {
    id: 288, codigo: 'S.Z.C.06.03.03.035', nombre: 'Horno Soldadura',
    descripcion: 'Horno Soldadura — demanda histórica acumulada: 3 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-05-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 53800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4166']
  },
  {
    id: 289, codigo: 'C.30.01.08.399', nombre: 'Huincha De Medir 5 Mts.',
    descripcion: 'Huincha De Medir 5 Mts. — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-31-03', stockActual: 60,
    stockMinimo: 19, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219']
  },
  {
    id: 290, codigo: 'C.08.09.01.022', nombre: 'Jaula Almacenamiento Respel 1600X800X1800 Mm',
    descripcion: 'Jaula Almacenamiento Respel 1600X800X1800 Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-31-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4257']
  },
  {
    id: 291, codigo: 'S.Z.C.06.02.07.159', nombre: 'Juego De Terraja Y Machos M6 -M12',
    descripcion: 'Juego De Terraja Y Machos M6 -M12 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-31-05', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 292, codigo: 'S.C.06.02.08.265', nombre: 'Juego Knockout Manual 1/2 A 2 Pulg',
    descripcion: 'Juego Knockout Manual 1/2 A 2 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-32-01', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 293, codigo: 'S.C.30.01.08.684', nombre: 'Lima Media Caña Bastarda 8 Pulg',
    descripcion: 'Lima Media Caña Bastarda 8 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-32-02', stockActual: 54,
    stockMinimo: 20, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 294, codigo: 'Z.C.06.02.07.037', nombre: 'Llave Ajustable 15',
    descripcion: 'Llave Ajustable 15 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-32-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 295, codigo: 'S.Z.C.06.02.07.169', nombre: 'Llave Caiman De 10 Pulg',
    descripcion: 'Llave Caiman De 10 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-32-04', stockActual: 18,
    stockMinimo: 8, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 296, codigo: 'Z.C.06.02.08.182', nombre: 'Llave De Golpe 60Mm',
    descripcion: 'Llave De Golpe 60Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-32-05', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 297, codigo: 'C.06.02.08.634', nombre: 'Llave De Golpe De 46 Mm',
    descripcion: 'Llave De Golpe De 46 Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-33-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 298, codigo: 'S.C.06.02.08.693', nombre: 'Llave De Impacto Electrica 1/2 Pulg',
    descripcion: 'Llave De Impacto Electrica 1/2 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-33-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 299, codigo: 'S.C.30.01.08.533', nombre: 'Llave De Impacto Electrica De 3/4 Pulg',
    descripcion: 'Llave De Impacto Electrica De 3/4 Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-33-03', stockActual: 7,
    stockMinimo: 2, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 300, codigo: 'S.C.06.02.08.692', nombre: 'Llave De Impacto Inalambrica 1/2 Pu',
    descripcion: 'Llave De Impacto Inalambrica 1/2 Pu — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-33-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 301, codigo: 'C.06.02.08.0104', nombre: 'Llave Punta Corona 1 Pulg. 1/16 Pulg.',
    descripcion: 'Llave Punta Corona 1 Pulg. 1/16 Pulg. — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-33-05', stockActual: 18,
    stockMinimo: 8, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4257']
  },
  {
    id: 302, codigo: 'Z.C.06.02.08.082', nombre: 'Llave Punta Corona 27',
    descripcion: 'Llave Punta Corona 27 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-34-01', stockActual: 14,
    stockMinimo: 7, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 303, codigo: 'Z.C.06.02.08.086', nombre: 'Llave Punta Corona 3/4',
    descripcion: 'Llave Punta Corona 3/4 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-34-02', stockActual: 18,
    stockMinimo: 10, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4257']
  },
  {
    id: 304, codigo: 'Z.C.06.02.08.088', nombre: 'Llave Punta Corona 30',
    descripcion: 'Llave Punta Corona 30 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-34-03', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 305, codigo: 'Z.C.06.02.08.092', nombre: 'Llave Punta Corona 34',
    descripcion: 'Llave Punta Corona 34 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-34-04', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 306, codigo: 'Z.C.06.02.08.096', nombre: 'Llave Punta Corona 38',
    descripcion: 'Llave Punta Corona 38 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-34-05', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 307, codigo: 'Z.C.06.02.08.100', nombre: 'Llave Punta Corona 42',
    descripcion: 'Llave Punta Corona 42 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-35-01', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 308, codigo: 'Z.C.06.02.08.132', nombre: 'Llave Punta Corona 7/8',
    descripcion: 'Llave Punta Corona 7/8 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-35-02', stockActual: 10,
    stockMinimo: 5, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 309, codigo: 'C.06.02.08.066', nombre: 'Llave Punta Y Corona 1 1/16',
    descripcion: 'Llave Punta Y Corona 1 1/16 — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-35-03', stockActual: 18,
    stockMinimo: 10, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4257']
  },
  {
    id: 310, codigo: 'Z.C.06.02.07.050', nombre: 'Llave Stillson 8 Pulgadas',
    descripcion: 'Llave Stillson 8 Pulgadas — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-35-04', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219', 'P-4231']
  },
  {
    id: 311, codigo: 'S.C.07.03.04.078', nombre: 'Luxometro',
    descripcion: 'Luxometro — demanda histórica acumulada: 3 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-02-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 55500, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 312, codigo: 'S.C.30.01.08.519', nombre: 'Medidor De Espesor',
    descripcion: 'Medidor De Espesor — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-35-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 313, codigo: '1745322', nombre: 'Mensula 0,36 M Blitz',
    descripcion: 'Mensula 0,36 M Blitz — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-36-01', stockActual: 60,
    stockMinimo: 27, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 314, codigo: 'S.C.36.26.30.073', nombre: 'Mensula 0.73 M',
    descripcion: 'Mensula 0.73 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-06-05', stockActual: 60,
    stockMinimo: 27, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 315, codigo: 'S.C.36.26.30.109', nombre: 'Mensula 1.09 M',
    descripcion: 'Mensula 1.09 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-07-01', stockActual: 60,
    stockMinimo: 27, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166', 'P-4219']
  },
  {
    id: 316, codigo: 'C.06.13.05.039', nombre: 'Odometro Manual',
    descripcion: 'Odometro Manual — demanda histórica acumulada: 3 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-05-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 68600, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 317, codigo: 'C.06.01.05.027', nombre: 'Pato Lubricador Grasero',
    descripcion: 'Pato Lubricador Grasero — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-36-02', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4231']
  },
  {
    id: 318, codigo: 'P.04.01.05.010', nombre: 'Picasal',
    descripcion: 'Picasal — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-36-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 319, codigo: 'C.36.38.01.267', nombre: 'Plataforma Acero 0.19X1.09 Mt',
    descripcion: 'Plataforma Acero 0.19X1.09 Mt — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-07-02', stockActual: 12,
    stockMinimo: 9, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 320, codigo: 'S.C.30.01.08.473', nombre: 'Regla De Pelo 300 Mm',
    descripcion: 'Regla De Pelo 300 Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-36-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 321, codigo: 'C.06.11.04.005', nombre: 'Remachadora Pop',
    descripcion: 'Remachadora Pop — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-36-05', stockActual: 10,
    stockMinimo: 7, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 322, codigo: 'S.C.36.26.40.207', nombre: 'Rodapié 2.07 M',
    descripcion: 'Rodapié 2.07 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-07-03', stockActual: 120,
    stockMinimo: 45, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 323, codigo: 'C.06.02.08.479', nombre: 'Set De Dados Cuadrante 3/4 De 7/8Pulg A 2Pulg',
    descripcion: 'Set De Dados Cuadrante 3/4 De 7/8Pulg A 2Pulg — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-37-01', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 324, codigo: 'S.C.06.02.08.287', nombre: 'Set De Dados Cuadrante De 1/2 De 10 A 32 Mm Aislados',
    descripcion: 'Set De Dados Cuadrante De 1/2 De 10 A 32 Mm Aislados — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-37-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 325, codigo: 'S.C.06.04.03.052', nombre: 'Set Llave Allens De 1.5 A 10Mm.',
    descripcion: 'Set Llave Allens De 1.5 A 10Mm. — demanda histórica acumulada: 3 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-03-04', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 50700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 326, codigo: 'C.06.05.07.036', nombre: 'Set Llave Allens De 2 A 19Mm',
    descripcion: 'Set Llave Allens De 2 A 19Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-37-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 327, codigo: 'C.32.05.07.016', nombre: 'Sonda Vibradora 60Mm',
    descripcion: 'Sonda Vibradora 60Mm — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-37-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 328, codigo: 'Z.C.06.03.03.076', nombre: 'Soplete',
    descripcion: 'Soplete — demanda histórica acumulada: 3 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-05-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 53800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 329, codigo: 'S.C.30.01.08.502', nombre: 'Taladro Base Magnetica Horizontal Baja Altura Portatil',
    descripcion: 'Taladro Base Magnetica Horizontal Baja Altura Portatil — demanda histórica acumulada: 3 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-06-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 82300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132', 'P-4231']
  },
  {
    id: 330, codigo: 'S.C.30.01.08.557', nombre: 'Tecle De Cadena 1000 Kg.',
    descripcion: 'Tecle De Cadena 1000 Kg. — demanda histórica acumulada: 3 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-37-05', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 331, codigo: 'S.C.36.26.03.400', nombre: 'Vertical 0.5 M',
    descripcion: 'Vertical 0.5 M — demanda histórica acumulada: 3 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-07-04', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 21400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 332, codigo: 'C.06.02.08.967', nombre: 'Adaptador Dado Impacto 1/2Plugl A 3/4 Pulg',
    descripcion: 'Adaptador Dado Impacto 1/2Plugl A 3/4 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-38-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 333, codigo: 'C.06.02.08.261', nombre: 'Adaptador Dado Impacto De 3/4Pulg A 1/2Pulg',
    descripcion: 'Adaptador Dado Impacto De 3/4Pulg A 1/2Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-38-02', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 334, codigo: 'C.06.02.08.999', nombre: 'Adaptador Dado Impacto Hembra 3/4 Pulg A 1/2 Pulg Macho',
    descripcion: 'Adaptador Dado Impacto Hembra 3/4 Pulg A 1/2 Pulg Macho — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-38-03', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 335, codigo: 'C.08.03.03.455', nombre: 'Adaptador Para Dados Entrada 3/8" Y Salida 1/2"',
    descripcion: 'Adaptador Para Dados Entrada 3/8" Y Salida 1/2" — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-38-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 336, codigo: 'S.C.06.02.07.212', nombre: 'Alicate Carte Diagonal 8 Pulg Aislado 1000 Volt',
    descripcion: 'Alicate Carte Diagonal 8 Pulg Aislado 1000 Volt — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-38-05', stockActual: 13,
    stockMinimo: 6, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4254']
  },
  {
    id: 337, codigo: 'C.30.01.08.060', nombre: 'Alicate Punta 6Pulg',
    descripcion: 'Alicate Punta 6Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-39-01', stockActual: 14,
    stockMinimo: 6, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 338, codigo: 'S.C.06.02.13.077', nombre: 'Aprieta Terminal Para Ferrul 0,25 A 6Mm',
    descripcion: 'Aprieta Terminal Para Ferrul 0,25 A 6Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-39-02', stockActual: 10,
    stockMinimo: 3, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 339, codigo: 'S.Z.C.06.02.10.042', nombre: 'Atornillador De Impacto',
    descripcion: 'Atornillador De Impacto — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-07-01', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 340, codigo: 'S.Z.C.06.02.07.030', nombre: 'Atornillador De Paleta',
    descripcion: 'Atornillador De Paleta — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-39-03', stockActual: 14,
    stockMinimo: 8, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4254']
  },
  {
    id: 341, codigo: 'C.06.02.07.192', nombre: 'Atornillador Plano Aisl Vde 1,6X10X205 Mm Knipex',
    descripcion: 'Atornillador Plano Aisl Vde 1,6X10X205 Mm Knipex — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-39-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 342, codigo: 'Z.C.06.14.01.023', nombre: 'Base Magnética 7010 Sn',
    descripcion: 'Base Magnética 7010 Sn — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-39-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 343, codigo: 'S.C.06.05.01.023', nombre: 'Betonera De Volteo Motor Electrico 400 Litros',
    descripcion: 'Betonera De Volteo Motor Electrico 400 Litros — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-40-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 344, codigo: 'S.C.06.05.01.022', nombre: 'Betonera Motor Electrico 200 L',
    descripcion: 'Betonera Motor Electrico 200 L — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-40-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 345, codigo: 'S.P.04.02.10.001', nombre: 'Calentador A Gas Tipo Dragon',
    descripcion: 'Calentador A Gas Tipo Dragon — demanda histórica acumulada: 2 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-02-02', stockActual: 12,
    stockMinimo: 8, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 100400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 346, codigo: 'Z.C.06.02.07.032', nombre: 'Cautín Eléctrico',
    descripcion: 'Cautín Eléctrico — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-40-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 347, codigo: 'C.06.02.09.070', nombre: 'Combo Fe 2 Lbs - Mango De Fibra',
    descripcion: 'Combo Fe 2 Lbs - Mango De Fibra — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-40-04', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 348, codigo: 'S.C.06.09.07.001', nombre: 'Compresor De Aire 2.5Hp 50L',
    descripcion: 'Compresor De Aire 2.5Hp 50L — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-40-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4231']
  },
  {
    id: 349, codigo: 'S.Z.C.06.03.02.006', nombre: 'Cortadora De Cable',
    descripcion: 'Cortadora De Cable — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-05-05', stockActual: 6,
    stockMinimo: 2, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 350, codigo: 'Z.C.06.03.02.007', nombre: 'Cortadora De Acero 0-25 Mm',
    descripcion: 'Cortadora De Acero 0-25 Mm — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-06-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 351, codigo: 'S.C.06.03.02.005', nombre: 'Cortadora De Tubo 3/8 A 2 Pulg',
    descripcion: 'Cortadora De Tubo 3/8 A 2 Pulg — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-06-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 352, codigo: 'S.P.06.02.01.057', nombre: 'Dado Corriente Cuadrante 1/2 Pulg 24 Mm',
    descripcion: 'Dado Corriente Cuadrante 1/2 Pulg 24 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-41-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 353, codigo: 'S.P.06.02.01.124', nombre: 'Dado Corriente Cuadrante 3/4 Pulg. 60 Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg. 60 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-41-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 354, codigo: 'Z.C.06.02.08.191', nombre: 'Dado Corriente Cuadrante 3/4X46Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4X46Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-41-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 355, codigo: 'S.P.06.02.01.128', nombre: 'Dado Corriente. Cuadrante 3/4Pulg. 34Mm',
    descripcion: 'Dado Corriente. Cuadrante 3/4Pulg. 34Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-41-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 356, codigo: 'S.C.06.02.08.945', nombre: 'Dado De Alta Cuadrante 3/4 De 42 Mm',
    descripcion: 'Dado De Alta Cuadrante 3/4 De 42 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-41-05', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 357, codigo: 'C.06.02.08.385', nombre: 'Dado De Alta Cuadrate 1/2 De 46 Mm',
    descripcion: 'Dado De Alta Cuadrate 1/2 De 46 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-42-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 358, codigo: 'S.C.08.07.01.009', nombre: 'Detector Multigas Msa Altair 5X',
    descripcion: 'Detector Multigas Msa Altair 5X — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-06-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 359, codigo: 'S.C.36.26.20.109', nombre: 'Diagonal 1.09 M',
    descripcion: 'Diagonal 1.09 M — demanda histórica acumulada: 2 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-07-05', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 30800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 360, codigo: 'S.C.14.01.02.007', nombre: 'Diagonales De Cierre Perimetral',
    descripcion: 'Diagonales De Cierre Perimetral — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-42-02', stockActual: 48,
    stockMinimo: 28, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 361, codigo: 'S.C.06.08.08.101', nombre: 'Doble Cabeza Allround Layher',
    descripcion: 'Doble Cabeza Allround Layher — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-07-02', stockActual: 60,
    stockMinimo: 40, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 362, codigo: 'Z.C.03.02.10.014', nombre: 'Equipo Tig 125 Amp',
    descripcion: 'Equipo Tig 125 Amp — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-06-04', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 363, codigo: 'C.08.08.02.007', nombre: 'Escalera Telescopica 3,66 Mts',
    descripcion: 'Escalera Telescopica 3,66 Mts — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-07-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 364, codigo: 'S.C.08.08.02.009', nombre: 'Escalera Telescopica De Fibra De 3 Mts',
    descripcion: 'Escalera Telescopica De Fibra De 3 Mts — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-07-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4231']
  },
  {
    id: 365, codigo: 'C.30.01.08.698', nombre: 'Escalera Tijera Fibra 1.22 Mts',
    descripcion: 'Escalera Tijera Fibra 1.22 Mts — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-42-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 366, codigo: 'Z.C.06.13.02.041', nombre: 'Escuadra Talón 10',
    descripcion: 'Escuadra Talón 10 — demanda histórica acumulada: 2 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-06-01', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 83200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 367, codigo: 'C.06.13.02.063', nombre: 'Escuadra Talon De 6"',
    descripcion: 'Escuadra Talon De 6" — demanda histórica acumulada: 2 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-06-02', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 83200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 368, codigo: 'S.Z.C.06.03.06.004', nombre: 'Esmeril Angular 9',
    descripcion: 'Esmeril Angular 9 — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-06-05', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 369, codigo: 'S.C.06.02.07.047', nombre: 'Feeler 0.05 A 1 Mm X 200Mm',
    descripcion: 'Feeler 0.05 A 1 Mm X 200Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-42-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 370, codigo: 'C.06.02.13.087', nombre: 'Ferrulera Manual A/C',
    descripcion: 'Ferrulera Manual A/C — demanda histórica acumulada: 2 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-01-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 9300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 371, codigo: 'P.04.02.08.001', nombre: 'Frigobar',
    descripcion: 'Frigobar — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-42-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 372, codigo: 'S.P.04.02.08.001', nombre: 'Frigobar 90 Litros',
    descripcion: 'Frigobar 90 Litros — demanda histórica acumulada: 2 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-02-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 100400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4257']
  },
  {
    id: 373, codigo: 'S.C.03.02.99.005', nombre: 'Galga Para Soldadura Tipo Aws',
    descripcion: 'Galga Para Soldadura Tipo Aws — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-07-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 374, codigo: 'S.Z.C.06.09.03.014', nombre: 'Generador Electrico Petrolero 5 Kva',
    descripcion: 'Generador Electrico Petrolero 5 Kva — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-43-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 375, codigo: 'C.06.01.05.028', nombre: 'Grasera Manual',
    descripcion: 'Grasera Manual — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-43-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 376, codigo: 'Z.C.06.03.04.028', nombre: 'Grifa 10Mm',
    descripcion: 'Grifa 10Mm — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-07-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 377, codigo: 'Z.C.06.03.04.027', nombre: 'Grifa 8Mm',
    descripcion: 'Grifa 8Mm — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-07-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 378, codigo: 'S.C.36.26.07.207', nombre: 'Horizontal 2.07 M',
    descripcion: 'Horizontal 2.07 M — demanda histórica acumulada: 2 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-08-01', stockActual: 77,
    stockMinimo: 54, stockMaximo: 192, unidadMedida: 'unidades',
    precioUnitario: 30800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 379, codigo: '2614073', nombre: 'Horizontal U Plataforma-Plataforma 0,64',
    descripcion: 'Horizontal U Plataforma-Plataforma 0,64 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-43-03', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 380, codigo: 'C.30.01.08.619', nombre: 'Huincha Medir Fibra 100 Mts',
    descripcion: 'Huincha Medir Fibra 100 Mts — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-43-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 381, codigo: 'S.C.08.09.01.018', nombre: 'Jaula Almacenamiento Respel 3000X1600X2800 Mm',
    descripcion: 'Jaula Almacenamiento Respel 3000X1600X2800 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-43-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231']
  },
  {
    id: 382, codigo: 'S.C.06.02.08.750', nombre: 'Juego De Dados Cuadrante De1/2 5/16-1Pulg',
    descripcion: 'Juego De Dados Cuadrante De1/2 5/16-1Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-44-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 383, codigo: 'S.C.06.02.08.298', nombre: 'Juego De Perilleros Presicion',
    descripcion: 'Juego De Perilleros Presicion — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-44-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4257']
  },
  {
    id: 384, codigo: 'S.Z.C.06.02.07.142', nombre: 'Juego Sacabocado De 3Mm- 20 Mm',
    descripcion: 'Juego Sacabocado De 3Mm- 20 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-44-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 385, codigo: 'S.C.30.01.08.686', nombre: 'Lima Media Caña 6 Pulg',
    descripcion: 'Lima Media Caña 6 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-44-04', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 386, codigo: 'S.C.30.01.08.711', nombre: 'Lima Plana Bastarda 12 Pulg',
    descripcion: 'Lima Plana Bastarda 12 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-44-05', stockActual: 28,
    stockMinimo: 12, stockMaximo: 69, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 387, codigo: 'S.C.30.01.08.687', nombre: 'Lima Redonda 8 Pulg',
    descripcion: 'Lima Redonda 8 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-45-01', stockActual: 13,
    stockMinimo: 8, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 388, codigo: 'Z.C.06.03.04.044', nombre: 'Limaton Fino 8 Pulg',
    descripcion: 'Limaton Fino 8 Pulg — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-07-04', stockActual: 14,
    stockMinimo: 6, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4219']
  },
  {
    id: 389, codigo: 'S.Z.C.06.02.09.023', nombre: 'Llana Pvc',
    descripcion: 'Llana Pvc — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-45-02', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 390, codigo: 'C.06.02.07.274', nombre: 'Llave Ajustable 8" Aislada',
    descripcion: 'Llave Ajustable 8" Aislada — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-45-03', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231']
  },
  {
    id: 391, codigo: 'C.06.02.08.216', nombre: 'Llave Ajustable 8Pulg',
    descripcion: 'Llave Ajustable 8Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-45-04', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4254']
  },
  {
    id: 392, codigo: 'S.Z.C.06.02.07.170', nombre: 'Llave Caiman Curvo De 7 Pulg',
    descripcion: 'Llave Caiman Curvo De 7 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-45-05', stockActual: 12,
    stockMinimo: 5, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4257']
  },
  {
    id: 393, codigo: 'Z.C.06.11.03.029', nombre: 'Llave De Golpe 50 Mm',
    descripcion: 'Llave De Golpe 50 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-46-01', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 394, codigo: 'C.06.02.08.676', nombre: 'Llave Golpe 30Mm',
    descripcion: 'Llave Golpe 30Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-46-02', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 395, codigo: 'C.06.02.08.729', nombre: 'Llave De Golpe De 36 Mm',
    descripcion: 'Llave De Golpe De 36 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-46-03', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 396, codigo: 'C.06.02.08.689', nombre: 'Llave Golpe 2 3/4Pulg',
    descripcion: 'Llave Golpe 2 3/4Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-46-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 397, codigo: 'C.06.02.08.384', nombre: 'Llave Golpe 41Mm',
    descripcion: 'Llave Golpe 41Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-46-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 398, codigo: 'S.C.06.02.08.694', nombre: 'Llave Impacto Inalambrica 3/4',
    descripcion: 'Llave Impacto Inalambrica 3/4 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-47-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 399, codigo: 'Z.C.06.02.08.032', nombre: 'Llave Punta Cola 3/4',
    descripcion: 'Llave Punta Cola 3/4 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-47-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 400, codigo: 'Z.C.06.02.08.047', nombre: 'Llave Punta Corona  1 7/16',
    descripcion: 'Llave Punta Corona  1 7/16 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-47-03', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
];

const _PROD_CHUNK_3: Producto[] = [
  {
    id: 401, codigo: 'Z.C.06.02.08.037', nombre: 'Llave Punta Corona 1 1/4',
    descripcion: 'Llave Punta Corona 1 1/4 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-47-04', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 402, codigo: 'Z.C.06.02.08.038', nombre: 'Llave Punta Corona 1 1/8',
    descripcion: 'Llave Punta Corona 1 1/8 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-47-05', stockActual: 12,
    stockMinimo: 7, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 403, codigo: 'Z.C.06.02.08.057', nombre: 'Llave Punta Corona 12',
    descripcion: 'Llave Punta Corona 12 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-48-01', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 404, codigo: 'Z.C.06.02.08.058', nombre: 'Llave Punta Corona 13',
    descripcion: 'Llave Punta Corona 13 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-48-02', stockActual: 14,
    stockMinimo: 7, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 405, codigo: 'Z.C.06.02.08.077', nombre: 'Llave Punta Corona 22',
    descripcion: 'Llave Punta Corona 22 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-48-03', stockActual: 18,
    stockMinimo: 10, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 406, codigo: 'Z.C.06.02.08.078', nombre: 'Llave Punta Corona 23',
    descripcion: 'Llave Punta Corona 23 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-48-04', stockActual: 14,
    stockMinimo: 7, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 407, codigo: 'Z.C.06.02.08.083', nombre: 'Llave Punta Corona 28',
    descripcion: 'Llave Punta Corona 28 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-48-05', stockActual: 12,
    stockMinimo: 7, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 408, codigo: 'S.Z.C.06.02.08.117', nombre: 'Llave Punta Corona 40 Mm',
    descripcion: 'Llave Punta Corona 40 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-49-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 409, codigo: 'Z.C.06.02.08.115', nombre: 'Llave Punta Corona 55 Mm',
    descripcion: 'Llave Punta Corona 55 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-49-02', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 410, codigo: 'Z.C.06.02.08.120', nombre: 'Llave Punta Corona 60',
    descripcion: 'Llave Punta Corona 60 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-49-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 411, codigo: 'S.C.06.02.08.734', nombre: 'Llave Punta Corona Chicharra 11 Mm',
    descripcion: 'Llave Punta Corona Chicharra 11 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-49-04', stockActual: 13,
    stockMinimo: 11, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 412, codigo: 'S.C.06.02.08.735', nombre: 'Llave Punta Corona Chicharra 13 Mm',
    descripcion: 'Llave Punta Corona Chicharra 13 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-49-05', stockActual: 13,
    stockMinimo: 11, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 413, codigo: 'Z.C.06.02.08.218', nombre: 'Llave Punta Corona Chicharra 16 Mm',
    descripcion: 'Llave Punta Corona Chicharra 16 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-50-01', stockActual: 13,
    stockMinimo: 11, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 414, codigo: 'S.C.06.02.08.736', nombre: 'Llave Punta Corona Chicharra 19 Mm',
    descripcion: 'Llave Punta Corona Chicharra 19 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-50-02', stockActual: 13,
    stockMinimo: 8, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 415, codigo: 'S.C.06.02.08.969', nombre: 'Llave Torque Cuadrante 1/2 Pulg 50-250 Lbs',
    descripcion: 'Llave Torque Cuadrante 1/2 Pulg 50-250 Lbs — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-50-03', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 416, codigo: 'S.C.06.02.08.283', nombre: 'Llave Torque Cuadrante 3/4Pulg 600 Lbs',
    descripcion: 'Llave Torque Cuadrante 3/4Pulg 600 Lbs — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-50-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4231']
  },
  {
    id: 417, codigo: 'S.C.06.02.09.027', nombre: 'Maceta Acetato 2.5 Lbs',
    descripcion: 'Maceta Acetato 2.5 Lbs — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-50-05', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 418, codigo: 'S.Z.C.06.11.06.018', nombre: 'Martillo Demoledor Sds Plus',
    descripcion: 'Martillo Demoledor Sds Plus — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-51-01', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 419, codigo: 'C.30.01.08.075', nombre: 'Martillo Mecánico 2.0 Lbs. Mango De Fibra',
    descripcion: 'Martillo Mecánico 2.0 Lbs. Mango De Fibra — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-51-02', stockActual: 12,
    stockMinimo: 8, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 420, codigo: 'C.07.03.04.097', nombre: 'Medidor Angulos Digital',
    descripcion: 'Medidor Angulos Digital — demanda histórica acumulada: 2 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-02-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 49400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4257']
  },
  {
    id: 421, codigo: 'S.C.32.03.04.036', nombre: 'Medidor De Aislamiento Megger Serie Mit 310-Es/070907/1139',
    descripcion: 'Medidor De Aislamiento Megger Serie Mit 310-Es/070907/1139 — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-51-03', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 422, codigo: 'C.36.26.30.039', nombre: 'Mensula 0.39 M',
    descripcion: 'Mensula 0.39 M — demanda histórica acumulada: 2 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-08-02', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 30800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 423, codigo: 'S.C.06.05.07.022', nombre: 'Motobomba Bencinera 2 Pulg',
    descripcion: 'Motobomba Bencinera 2 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-51-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 424, codigo: 'S.C.07.03.04.038', nombre: 'Multimetro Fluke 789',
    descripcion: 'Multimetro Fluke 789 — demanda histórica acumulada: 2 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-03-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 49400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219', 'P-4254']
  },
  {
    id: 425, codigo: 'S.C.06.02.08.244', nombre: 'Nockaut Hidraulico De 1/2Pulg A 3Pulg',
    descripcion: 'Nockaut Hidraulico De 1/2Pulg A 3Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-51-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219']
  },
  {
    id: 426, codigo: 'Z.C.06.02.08.144', nombre: 'Pasador Conico',
    descripcion: 'Pasador Conico — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-52-01', stockActual: 18,
    stockMinimo: 12, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 427, codigo: 'S.C.30.01.08.285', nombre: 'Pasador Conico 1 1/4 Pulg',
    descripcion: 'Pasador Conico 1 1/4 Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-52-02', stockActual: 24,
    stockMinimo: 20, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 428, codigo: 'Z.C.06.02.07.161', nombre: 'Pelacables Automatico',
    descripcion: 'Pelacables Automatico — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-52-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 429, codigo: 'S.C.33.02.99.031', nombre: 'Pistola De Calor Inalambrica',
    descripcion: 'Pistola De Calor Inalambrica — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-52-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 430, codigo: 'P.02.01.02.002', nombre: 'Plastificadora',
    descripcion: 'Plastificadora — demanda histórica acumulada: 2 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-02-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 100400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4254']
  },
  {
    id: 431, codigo: 'S.C.06.02.09.017', nombre: 'Platacho De Goma',
    descripcion: 'Platacho De Goma — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-52-05', stockActual: 24,
    stockMinimo: 14, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 432, codigo: '3812157', nombre: 'Plataforma Acero 0,32 X 1,57 M - Perf.',
    descripcion: 'Plataforma Acero 0,32 X 1,57 M - Perf. — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-53-01', stockActual: 60,
    stockMinimo: 41, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4257']
  },
  {
    id: 433, codigo: 'S.C.36.38.12.207', nombre: 'Plataforma Acero 0.32 X 2.07 M - Perf.',
    descripcion: 'Plataforma Acero 0.32 X 2.07 M - Perf. — demanda histórica acumulada: 2 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-08-03', stockActual: 24,
    stockMinimo: 20, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 30800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 434, codigo: 'C.06.02.09.025', nombre: 'Plomada 300 Gr',
    descripcion: 'Plomada 300 Gr — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-53-02', stockActual: 24,
    stockMinimo: 14, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4166']
  },
  {
    id: 435, codigo: 'S.C.06.02.09.023', nombre: 'Plomada Carpintera Bronce 350 Grs',
    descripcion: 'Plomada Carpintera Bronce 350 Grs — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-53-03', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 436, codigo: 'S.C.04.03.04.002', nombre: 'Rack Metalico 1500X500X2000',
    descripcion: 'Rack Metalico 1500X500X2000 — demanda histórica acumulada: 2 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-03-05', stockActual: 48,
    stockMinimo: 24, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 55800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4257']
  },
  {
    id: 437, codigo: 'S.C.04.03.04.001', nombre: 'Rack Metalico 200X200X60',
    descripcion: 'Rack Metalico 200X200X60 — demanda histórica acumulada: 2 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-04-01', stockActual: 42,
    stockMinimo: 24, stockMaximo: 105, unidadMedida: 'unidades',
    precioUnitario: 55800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4231']
  },
  {
    id: 438, codigo: 'S.C.07.03.08.749', nombre: 'Reduccion De Alta Entrada 1/2 Salida 3/4 Pulg',
    descripcion: 'Reduccion De Alta Entrada 1/2 Salida 3/4 Pulg — demanda histórica acumulada: 2 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-03-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 49400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 439, codigo: 'S.C.07.03.08.748', nombre: 'Reduccion De Alta Entrada 3/4 Pulg Salida 1/2 Pulg',
    descripcion: 'Reduccion De Alta Entrada 3/4 Pulg Salida 1/2 Pulg — demanda histórica acumulada: 2 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-03-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 49400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 440, codigo: 'Z.C.06.14.01.014', nombre: 'Reloj Comparador',
    descripcion: 'Reloj Comparador — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-53-04', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 441, codigo: 'S.C.06.08.08.046', nombre: 'Rodapie 1.57 M',
    descripcion: 'Rodapie 1.57 M — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-07-05', stockActual: 36,
    stockMinimo: 17, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4257']
  },
  {
    id: 442, codigo: 'S.C.06.02.10.122', nombre: 'Rotomartillo Combinado 6.3Kg',
    descripcion: 'Rotomartillo Combinado 6.3Kg — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-08-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 443, codigo: 'S.C.06.02.10.134', nombre: 'Rotomartillo Sds Max 10 Kg',
    descripcion: 'Rotomartillo Sds Max 10 Kg — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-08-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 444, codigo: 'C.06.02.08.344', nombre: 'Set Llave Allens De 1/16 A 3/8Pulg',
    descripcion: 'Set Llave Allens De 1/16 A 3/8Pulg — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-53-05', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 445, codigo: 'S.C.06.02.08.478', nombre: 'Set Llaves Punta Corona De 33 A 50 Mm',
    descripcion: 'Set Llaves Punta Corona De 33 A 50 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-54-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 446, codigo: 'S.C.06.02.08.277', nombre: 'Set Llaves Punta Corona De 6 A 32Mm',
    descripcion: 'Set Llaves Punta Corona De 6 A 32Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-54-02', stockActual: 7,
    stockMinimo: 4, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 447, codigo: 'C.30.01.08.623', nombre: 'Set Llaves Punta Y Corona 8 A 22 Mm',
    descripcion: 'Set Llaves Punta Y Corona 8 A 22 Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-54-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 448, codigo: 'C.32.05.07.008', nombre: 'Sonda Vibradora 25Mm',
    descripcion: 'Sonda Vibradora 25Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-54-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4231']
  },
  {
    id: 449, codigo: 'C.32.05.07.010', nombre: 'Sonda Vibradora 35Mm',
    descripcion: 'Sonda Vibradora 35Mm — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-54-05', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 450, codigo: 'S.C.33.02.10.127', nombre: 'Taladro Con Base Magnetica',
    descripcion: 'Taladro Con Base Magnetica — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-08-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4132']
  },
  {
    id: 451, codigo: 'S.C.30.01.08.535', nombre: 'Taladro De Pedestal',
    descripcion: 'Taladro De Pedestal — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-08-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4219']
  },
  {
    id: 452, codigo: 'S.Z.C.06.02.14.029', nombre: 'Tecle Cadena 1.5 Tons',
    descripcion: 'Tecle Cadena 1.5 Tons — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-08-05', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4166']
  },
  {
    id: 453, codigo: 'S.C.06.02.14.008', nombre: 'Tecle De Cadena 5000 Kg.',
    descripcion: 'Tecle De Cadena 5000 Kg. — demanda histórica acumulada: 2 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-09-01', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 59100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132', 'P-4219']
  },
  {
    id: 454, codigo: 'Z.C.06.03.04.021', nombre: 'Tijera Hojalatera Izquierda',
    descripcion: 'Tijera Hojalatera Izquierda — demanda histórica acumulada: 2 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-07-05', stockActual: 18,
    stockMinimo: 6, stockMaximo: 45, unidadMedida: 'unidades',
    precioUnitario: 52900, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166', 'P-4257']
  },
  {
    id: 455, codigo: 'C.03.01.13.144', nombre: 'Traspaleta Manual Para 2 Ton',
    descripcion: 'Traspaleta Manual Para 2 Ton — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-55-01', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 456, codigo: 'S.C.11.01.08.025', nombre: 'Tubo Acero Cortado A 2.50 M',
    descripcion: 'Tubo Acero Cortado A 2.50 M — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-55-02', stockActual: 24,
    stockMinimo: 14, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127', 'P-4257']
  },
  {
    id: 457, codigo: '2603150', nombre: 'Vertical 1,50 M',
    descripcion: 'Vertical 1,50 M — demanda histórica acumulada: 2 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-55-03', stockActual: 480,
    stockMinimo: 233, stockMaximo: 1200, unidadMedida: 'unidades',
    precioUnitario: 11800, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 458, codigo: 'S.C.06.11.12.007', nombre: 'Acodado Ocular Recto',
    descripcion: 'Acodado Ocular Recto — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-55-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 459, codigo: 'C.06.02.08.260', nombre: 'Adaptador Dado Impacto De 1Pulg A 3/4Pulg',
    descripcion: 'Adaptador Dado Impacto De 1Pulg A 3/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-55-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 460, codigo: 'C.06.02.08.467', nombre: 'Adaptador Reductor Hembra 3/4 Pulg A Macho 1/2  Impacto',
    descripcion: 'Adaptador Reductor Hembra 3/4 Pulg A Macho 1/2  Impacto — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-02-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 461, codigo: 'S.C.06.02.07.803', nombre: 'Alicate Aprieta Terminal Hidraulico 4-70 Mm2',
    descripcion: 'Alicate Aprieta Terminal Hidraulico 4-70 Mm2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-56-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 462, codigo: 'S.Z.C.06.02.07.035', nombre: 'Alicate Caiman 10 Pulg Aislado 1000 Volt',
    descripcion: 'Alicate Caiman 10 Pulg Aislado 1000 Volt — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-56-02', stockActual: 13,
    stockMinimo: 11, stockMaximo: 33, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 463, codigo: 'S.Z.C.06.02.07.034', nombre: 'Alicate Caiman Curvo 10',
    descripcion: 'Alicate Caiman Curvo 10 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-56-03', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 464, codigo: 'C.06.02.07.200', nombre: 'Alicate Cayman 5 Pulg',
    descripcion: 'Alicate Cayman 5 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-56-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 465, codigo: 'Z.C.06.02.07.069', nombre: 'Alicate Cayman 7 Pulg',
    descripcion: 'Alicate Cayman 7 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-56-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 466, codigo: 'S.C.06.02.07.209', nombre: 'Alicate Cortante 8 Pulg Aislado Para 1000 V',
    descripcion: 'Alicate Cortante 8 Pulg Aislado Para 1000 V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-57-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 467, codigo: 'S.C.06.02.07.210', nombre: 'Alicate De Punta 8 Pulg Aislado 1000V',
    descripcion: 'Alicate De Punta 8 Pulg Aislado 1000V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-57-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 468, codigo: 'S.C.06.02.07.214', nombre: 'Alicate Ferrulera 4-16Mm 11-5 Awg',
    descripcion: 'Alicate Ferrulera 4-16Mm 11-5 Awg — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-02-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 469, codigo: 'C.30.01.08.076', nombre: 'Alicate Pelacable Automatico',
    descripcion: 'Alicate Pelacable Automatico — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-02-03', stockActual: 14,
    stockMinimo: 9, stockMaximo: 36, unidadMedida: 'metros',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 470, codigo: 'C.06.02.07.270', nombre: 'Alicate Punta 8Pulg',
    descripcion: 'Alicate Punta 8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-57-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 471, codigo: 'S.C.06.02.07.401', nombre: 'Alicate Soldador Mig',
    descripcion: 'Alicate Soldador Mig — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-08-01', stockActual: 19,
    stockMinimo: 16, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 472, codigo: 'SIN-COD-0472', nombre: 'Alicate Universal 8 Pulg',
    descripcion: 'Alicate Universal 8 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-57-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 473, codigo: 'S.C.06.03.03.022', nombre: 'Alimentador Alambre Mig-Mag Ln-25',
    descripcion: 'Alimentador Alambre Mig-Mag Ln-25 — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-08-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 474, codigo: 'S.Z.C.06.08.07.004', nombre: 'Alineador De Cañeria De 2 A 6 Pulg',
    descripcion: 'Alineador De Cañeria De 2 A 6 Pulg — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-03-04', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 475, codigo: 'S.Z.C.06.08.07.005', nombre: 'Alineador De Cañeria De 6 A 12 Pulg',
    descripcion: 'Alineador De Cañeria De 6 A 12 Pulg — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-03-05', stockActual: 10,
    stockMinimo: 6, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 476, codigo: 'S.Z.C.06.08.07.001', nombre: 'Alineador Para Tuberia De 8 Pulg A 20 Pulg',
    descripcion: 'Alineador Para Tuberia De 8 Pulg A 20 Pulg — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-04-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 477, codigo: 'S.C.06.07.10.003', nombre: 'Apilador Manual 1.000 Kg De 1.6 Mt Alto',
    descripcion: 'Apilador Manual 1.000 Kg De 1.6 Mt Alto — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-57-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 478, codigo: 'S.C.06.02.13.056', nombre: 'Aprieta Terminal 0.25 Mm A 10 Mm',
    descripcion: 'Aprieta Terminal 0.25 Mm A 10 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-58-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 479, codigo: 'C.06.02.13.062', nombre: 'Aprieta Terminales 2 A 16 Mm2',
    descripcion: 'Aprieta Terminales 2 A 16 Mm2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-58-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 480, codigo: 'S.C.30.01.08.499 - 3', nombre: 'Aprieta Terminales Hidraulico 25 Mm 2-240 Mm2',
    descripcion: 'Aprieta Terminales Hidraulico 25 Mm 2-240 Mm2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-58-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 481, codigo: '2618038', nombre: 'Ar Horizontal U 0,38 M - Lw 1Kk',
    descripcion: 'Ar Horizontal U 0,38 M - Lw 1Kk — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-58-04', stockActual: 48,
    stockMinimo: 40, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 482, codigo: '2601039', nombre: 'Ar O-Horizontal 0.39 M.',
    descripcion: 'Ar O-Horizontal 0.39 M. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-58-05', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 483, codigo: '2601109', nombre: 'Ar O-Horizontal Lw 1,09 M.',
    descripcion: 'Ar O-Horizontal Lw 1,09 M. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-59-01', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 484, codigo: '2632073', nombre: 'Ar U-Mensula Lw 0,73M. C/Espiga',
    descripcion: 'Ar U-Mensula Lw 0,73M. C/Espiga — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-59-02', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 485, codigo: 'S.C.06.02.10.005', nombre: 'Atornillador A Batería',
    descripcion: 'Atornillador A Batería — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-09-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 486, codigo: 'S.C.30.01.08.431', nombre: 'Balanza',
    descripcion: 'Balanza — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-59-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 487, codigo: 'S.C.30.01.08.629', nombre: 'Barretilla 12 Pulg Punta Conica',
    descripcion: 'Barretilla 12 Pulg Punta Conica — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-59-04', stockActual: 14,
    stockMinimo: 12, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 488, codigo: 'Z.C.06.02.09.026', nombre: 'Barretilla Acero',
    descripcion: 'Barretilla Acero — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-59-05', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 489, codigo: 'Z.C.06.11.03.019', nombre: 'Barretillas',
    descripcion: 'Barretillas — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-60-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 490, codigo: 'S.C.06.02.08.481', nombre: 'Barrote De Fuerza Cuadrante 3/4',
    descripcion: 'Barrote De Fuerza Cuadrante 3/4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-60-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 491, codigo: '4003000', nombre: 'Base Eclinable  ( Ver Codigo )',
    descripcion: 'Base Eclinable  ( Ver Codigo ) — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-60-03', stockActual: 690,
    stockMinimo: 575, stockMaximo: 1725, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 492, codigo: 'S.C.06.08.08.531', nombre: 'Base Nivelante',
    descripcion: 'Base Nivelante — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-09-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 493, codigo: 'S.C.06.03.03.135', nombre: 'Base Porta Carrete 1.7 Ton Greenlee',
    descripcion: 'Base Porta Carrete 1.7 Ton Greenlee — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-08-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 494, codigo: 'S.C.22.01.04.006', nombre: 'Baston Alcotorch V6',
    descripcion: 'Baston Alcotorch V6 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-60-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 495, codigo: 'S.C.30.01.08.506', nombre: 'Biselador Manual Sm-Bm16-230V',
    descripcion: 'Biselador Manual Sm-Bm16-230V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-60-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 496, codigo: 'S.Z.C.06.14.02.007', nombre: 'Bomba De Prueba',
    descripcion: 'Bomba De Prueba — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-61-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 497, codigo: 'S.C.30.01.08.541', nombre: 'Bomba De Prueba Manual',
    descripcion: 'Bomba De Prueba Manual — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-61-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 498, codigo: 'S.C.06.08.05.048', nombre: 'Bomba Hidraulica Manual',
    descripcion: 'Bomba Hidraulica Manual — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-61-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 499, codigo: 'Z.C.06.11.10.019', nombre: 'Bomba Prueba Hidráulica',
    descripcion: 'Bomba Prueba Hidráulica — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-61-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 500, codigo: 'S.C.06.09.01.028', nombre: 'Bomba Sumergible 1 Hp 20 Mtsmanguera',
    descripcion: 'Bomba Sumergible 1 Hp 20 Mtsmanguera — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-61-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 501, codigo: 'S.C.06.09.01.029', nombre: 'Bomba Sumergible 1.5 Hp',
    descripcion: 'Bomba Sumergible 1.5 Hp — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-62-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 502, codigo: 'S.C.06.09.01.060', nombre: 'Bomba Sumergible 2 Pulg',
    descripcion: 'Bomba Sumergible 2 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-62-02', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 503, codigo: 'S.C.06.09.01.030', nombre: 'Bomba Sumergible 3 Pulg De 2 Hp',
    descripcion: 'Bomba Sumergible 3 Pulg De 2 Hp — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-62-03', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 504, codigo: 'SIN-COD-0504', nombre: 'Boquillas Oxicorte Propano Nx',
    descripcion: 'Boquillas Oxicorte Propano Nx — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-62-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 505, codigo: 'P.0', nombre: 'Cabezal De Cimbra Layher',
    descripcion: 'Cabezal De Cimbra Layher — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-62-05', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 506, codigo: 'S.Z.C.06.02.07.171', nombre: 'Caiman Tipo C P/Soldador 11 Pulg',
    descripcion: 'Caiman Tipo C P/Soldador 11 Pulg — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-08-04', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 507, codigo: 'Z.C.06.02.06.002', nombre: 'Caja Para Herramienta',
    descripcion: 'Caja Para Herramienta — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-63-01', stockActual: 17,
    stockMinimo: 14, stockMaximo: 42, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 508, codigo: 'S.C.07.03.04.020', nombre: 'Calibrador De Lazo',
    descripcion: 'Calibrador De Lazo — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-04-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 509, codigo: 'S.C.30.01.08.552', nombre: 'Calibrador De Lazo Fluke 707',
    descripcion: 'Calibrador De Lazo Fluke 707 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-63-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 510, codigo: 'S.C.07.03.04.041', nombre: 'Calibrador De Proceso',
    descripcion: 'Calibrador De Proceso — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-04-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 511, codigo: 'S.C.06.11.08.024', nombre: 'Canastillo Camion Pluma  Con Conexión Al Camiom Pluma De Rodrigo Gomez',
    descripcion: 'Canastillo Camion Pluma  Con Conexión Al Camiom Pluma De Rodrigo Gomez — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-63-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 512, codigo: 'S.C.06.03.03.115', nombre: 'Carro Portacanerias 900 Kg',
    descripcion: 'Carro Portacanerias 900 Kg — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-08-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 513, codigo: 'S.C.16.04.05.011', nombre: 'Carro Simple Gas Propano 45 Kg',
    descripcion: 'Carro Simple Gas Propano 45 Kg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-63-04', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 514, codigo: 'S.C.06.02.08.755', nombre: 'Centrador Conico 10Mm A 25Mm',
    descripcion: 'Centrador Conico 10Mm A 25Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-63-05', stockActual: 19,
    stockMinimo: 16, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 515, codigo: 'S.C.06.02.08.756', nombre: 'Centrador Conico 5/8 X 12 Pulg',
    descripcion: 'Centrador Conico 5/8 X 12 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-64-01', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 516, codigo: 'S.C.30.01.08.542', nombre: 'Cercha Vibradora',
    descripcion: 'Cercha Vibradora — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-64-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 517, codigo: 'S.C.30.01.08.543', nombre: 'Cercha Vibradora A Gasolina Con Regla De 3.04 Mts',
    descripcion: 'Cercha Vibradora A Gasolina Con Regla De 3.04 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-64-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 518, codigo: 'SIN-COD-0518', nombre: 'Cierre Perimetral Completo',
    descripcion: 'Cierre Perimetral Completo — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-64-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 519, codigo: '2635109', nombre: 'Cierre Seguridad 1,09M T8',
    descripcion: 'Cierre Seguridad 1,09M T8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-64-05', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 520, codigo: 'S.C.06.08.05.053', nombre: 'Cilindro Hidraulico Pastilla 10 Ton',
    descripcion: 'Cilindro Hidraulico Pastilla 10 Ton — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-65-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 521, codigo: '2660000', nombre: 'Collarin Alto',
    descripcion: 'Collarin Alto — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-65-02', stockActual: 48,
    stockMinimo: 26, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 522, codigo: 'Z.C.06.02.09.041', nombre: 'Combo Fe 20 Lbs.',
    descripcion: 'Combo Fe 20 Lbs. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-65-03', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 523, codigo: 'Z.C.06.02.09.071', nombre: 'Combo Fe 4 Lbs. Bronce Con Mango Fibra',
    descripcion: 'Combo Fe 4 Lbs. Bronce Con Mango Fibra — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-65-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 524, codigo: 'S.C.30.01.08.657', nombre: 'Corta Cable 1000 Mcm',
    descripcion: 'Corta Cable 1000 Mcm — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-02-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'metros',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 525, codigo: 'S.Z.C.06.05.14.032', nombre: 'Corta Tubo N 15 Acero Inox 3/16 - 1 1/8',
    descripcion: 'Corta Tubo N 15 Acero Inox 3/16 - 1 1/8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-65-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 526, codigo: 'Z.C.06.05.14.032', nombre: 'Corta Tubos',
    descripcion: 'Corta Tubos — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-66-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 527, codigo: 'S.C.06.03.02.009', nombre: 'Corta Tubos Pvc 42Mm',
    descripcion: 'Corta Tubos Pvc 42Mm — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-09-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 528, codigo: 'S.C.06.03.02.008', nombre: 'Cortador De Tubos Pvc 14Mm A 200Mm De Rodamiento',
    descripcion: 'Cortador De Tubos Pvc 14Mm A 200Mm De Rodamiento — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-09-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 529, codigo: 'P.01.01.06.002', nombre: 'Cuchillo Cartonero Metálico',
    descripcion: 'Cuchillo Cartonero Metálico — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-66-02', stockActual: 36,
    stockMinimo: 18, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 530, codigo: 'C.06.03.04.050', nombre: 'Cuchillo Para Electricista Curvo Aislado 1000 V',
    descripcion: 'Cuchillo Para Electricista Curvo Aislado 1000 V — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-09-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 531, codigo: 'S.C.30.01.08.503', nombre: 'Curvadora Manual',
    descripcion: 'Curvadora Manual — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-66-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 532, codigo: 'S.C.21.03.06.053', nombre: 'Curvadora Manual Tipo Carretilla 1 1/2 Pulg',
    descripcion: 'Curvadora Manual Tipo Carretilla 1 1/2 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-66-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 533, codigo: 'S.P.06.02.01.059', nombre: 'Dado Corriente Cuadrante 1/2 Pulg 25 Mm',
    descripcion: 'Dado Corriente Cuadrante 1/2 Pulg 25 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-66-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 534, codigo: 'S.P.06.02.01.058', nombre: 'Dado Corriente Cuadrante 1/2 Pulg 60 Mm',
    descripcion: 'Dado Corriente Cuadrante 1/2 Pulg 60 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-67-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 535, codigo: 'C.30.01.08.213', nombre: 'Dado Corriente Cuadrante 1/2Pulg 3/4Pulg',
    descripcion: 'Dado Corriente Cuadrante 1/2Pulg 3/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-67-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 536, codigo: 'P.06.02.01.057', nombre: 'Dado Corriente Cuadrante 1/2Pulg. 19Mm.',
    descripcion: 'Dado Corriente Cuadrante 1/2Pulg. 19Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-67-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 537, codigo: 'S.P.06.02.01.122', nombre: 'Dado Corriente Cuadrante 3/4 Pulg 50Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg 50Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-67-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 538, codigo: 'S.P.06.02.01.126', nombre: 'Dado Corriente Cuadrante 3/4 Pulg De 18Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg De 18Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-67-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 539, codigo: 'S.P.06.02.01.127', nombre: 'Dado Corriente Cuadrante 3/4 Pulg De 21Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg De 21Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-68-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 540, codigo: 'P.06.02.01.081', nombre: 'Dado Corriente Cuadrante 3/4 Pulg De 24Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg De 24Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-68-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 541, codigo: 'P.06.02.01.078', nombre: 'Dado Corriente Cuadrante 3/4 Pulg De 30Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg De 30Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-68-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 542, codigo: 'P.06.02.01.123', nombre: 'Dado Corriente Cuadrante 3/4 Pulg De 32Mm',
    descripcion: 'Dado Corriente Cuadrante 3/4 Pulg De 32Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-68-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 543, codigo: 'P.06.02.01.084', nombre: 'Dado Corriente Cuadrante 3/4Pulg. 1 5/8Pulg',
    descripcion: 'Dado Corriente Cuadrante 3/4Pulg. 1 5/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-68-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 544, codigo: 'P.06.02.01.079', nombre: 'Dado Corriente Cuadrante 3/4Pulg. 27Mm.',
    descripcion: 'Dado Corriente Cuadrante 3/4Pulg. 27Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-69-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 545, codigo: 'P.06.02.01.075', nombre: 'Dado Corriente Cuadrante 3/4Pulg. 50Mm.',
    descripcion: 'Dado Corriente Cuadrante 3/4Pulg. 50Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-69-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 546, codigo: 'P.06.02.01.055', nombre: 'Dado Corriente. Cuadrante 1/2Pulg. 16Mm.',
    descripcion: 'Dado Corriente. Cuadrante 1/2Pulg. 16Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-69-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 547, codigo: 'P.06.02.01.056', nombre: 'Dado Corriente. Cuadrante 1/2Pulg. 18Mm.',
    descripcion: 'Dado Corriente. Cuadrante 1/2Pulg. 18Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-69-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 548, codigo: 'P.06.02.01.059', nombre: 'Dado Corriente. Cuadrante 1/2Pulg. 21Mm.',
    descripcion: 'Dado Corriente. Cuadrante 1/2Pulg. 21Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-69-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 549, codigo: 'P.06.02.01.062', nombre: 'Dado Corriente. Cuadrante 1/2Pulg. 30Mm.',
    descripcion: 'Dado Corriente. Cuadrante 1/2Pulg. 30Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-70-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 550, codigo: 'C.30.01.08.485', nombre: 'Dado Corriente. Cuadrante 1/2Pulg. 36Mm',
    descripcion: 'Dado Corriente. Cuadrante 1/2Pulg. 36Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-70-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 551, codigo: 'P.06.02.01.073', nombre: 'Dado Corriente. Cuadrante 3/4Pulg. 41Mm.',
    descripcion: 'Dado Corriente. Cuadrante 3/4Pulg. 41Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-70-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 552, codigo: 'P.06.02.01.090', nombre: 'Dado Corriente. Cuadrante 3/4Pulg. 7/8Pulg',
    descripcion: 'Dado Corriente. Cuadrante 3/4Pulg. 7/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-70-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 553, codigo: 'S.C.06.02.08.911', nombre: 'Dado Cuadrante Largo 1/2 Pulg X 17 Mm',
    descripcion: 'Dado Cuadrante Largo 1/2 Pulg X 17 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-70-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 554, codigo: 'S.C.06.02.08.943', nombre: 'Dado De Alta Cuadrante 3/4 De 28 Mm',
    descripcion: 'Dado De Alta Cuadrante 3/4 De 28 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-71-01', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 555, codigo: 'S.C.06.02.08.944', nombre: 'Dado De Alta Cuadrante 3/4 De 36 Mm',
    descripcion: 'Dado De Alta Cuadrante 3/4 De 36 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-71-02', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 556, codigo: 'S.C.06.02.08.966', nombre: 'Dado De Alta Cuadrate 1/2 De 27 Mm',
    descripcion: 'Dado De Alta Cuadrate 1/2 De 27 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-71-03', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 557, codigo: 'C.06.02.08.966', nombre: 'Dado De Alta Cuadrate 1/2 De 32 Mm',
    descripcion: 'Dado De Alta Cuadrate 1/2 De 32 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-71-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 558, codigo: 'Z.C.06.02.08.150', nombre: 'Dado De Alta Resistencia 1 1/4',
    descripcion: 'Dado De Alta Resistencia 1 1/4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-71-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 559, codigo: 'Z.C.06.02.08.178', nombre: 'Dado De Alta Resistencia 1 13/16',
    descripcion: 'Dado De Alta Resistencia 1 13/16 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-72-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 560, codigo: 'Z.C.06.02.08.177', nombre: 'Dado De Alta Resistencia 1 5/8',
    descripcion: 'Dado De Alta Resistencia 1 5/8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-72-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 561, codigo: 'Z.C.06.02.08.176', nombre: 'Dado De Alta Resistencia 1 7/16',
    descripcion: 'Dado De Alta Resistencia 1 7/16 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-72-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 562, codigo: 'Z.C.06.02.08.154', nombre: 'Dado De Alta Resistencia 2',
    descripcion: 'Dado De Alta Resistencia 2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-72-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 563, codigo: 'C.06.02.08.281', nombre: 'Dado De Alta Resistencia 32Mm.',
    descripcion: 'Dado De Alta Resistencia 32Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-72-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 564, codigo: 'Z.C.06.02.08.199', nombre: 'Dado De Alta Resistencia 36Mm',
    descripcion: 'Dado De Alta Resistencia 36Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-73-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 565, codigo: 'S.C.06.02.08.0115', nombre: 'Dado Impacto 30 Mm Cuadrante 1/2',
    descripcion: 'Dado Impacto 30 Mm Cuadrante 1/2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-73-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 566, codigo: 'S.C.06.02.08.0116', nombre: 'Dado Impacto 36Mm Cuadrante 3/4 Pulg',
    descripcion: 'Dado Impacto 36Mm Cuadrante 3/4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-73-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 567, codigo: 'C.06.02.08.598', nombre: 'Dado Impacto Cuadrante 1Pulg X 55Mm.',
    descripcion: 'Dado Impacto Cuadrante 1Pulg X 55Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-73-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 568, codigo: 'C.06.02.08.324', nombre: 'Dado Impacto Cuadrante 3/4 X 1 1/16Pulg',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 1 1/16Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-73-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 569, codigo: 'C.06.02.08.469', nombre: 'Dado Impacto Cuadrante 3/4 X 1 1/4Pulg',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 1 1/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-74-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 570, codigo: 'C.06.02.08.326', nombre: 'Dado Impacto Cuadrante 3/4 X 1 5/8Pulg',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 1 5/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-74-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 571, codigo: 'C.06.02.08.322', nombre: 'Dado Impacto Cuadrante 3/4 X 1 7/16Pulg',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 1 7/16Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-74-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 572, codigo: 'C.06.02.08.566', nombre: 'Dado Impacto Cuadrante 3/4 X 28Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 28Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-74-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 573, codigo: 'C.30.01.08.209', nombre: 'Dado Impacto Cuadrante 3/4 X 32Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 32Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-74-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 574, codigo: 'C.30.01.08.674', nombre: 'Dado Impacto Cuadrante 3/4 X 34Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 34Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-75-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 575, codigo: 'C.06.02.07.331', nombre: 'Dado Impacto Cuadrante 3/4 X 40Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 40Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-75-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 576, codigo: 'C.06.02.08.320', nombre: 'Dado Impacto Cuadrante 3/4 X 41Mm.',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 41Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-75-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 577, codigo: 'C.30.01.08.179', nombre: 'Dado Impacto Cuadrante 3/4 X 42Mm.',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 42Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-75-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 578, codigo: 'S.C.06.02.08.325', nombre: 'Dado Impacto Cuadrante 3/4 X 5/8Pulg',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 5/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-75-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 579, codigo: 'Z.P.09.075', nombre: 'Dado Impacto Cuadrante 3/4 X 7/8',
    descripcion: 'Dado Impacto Cuadrante 3/4 X 7/8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-76-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 580, codigo: 'C.06.02.08.984', nombre: 'Dado Impacto Cuadrante 3/4Pulg 38Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4Pulg 38Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-76-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 581, codigo: 'C.06.02.08.940', nombre: 'Dado Impacto Cuadrante 3/4Pulg X 50Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4Pulg X 50Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-76-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 582, codigo: 'C.06.02.08.563', nombre: 'Dado Impacto Cuadrante 3/4Pulg. 33Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4Pulg. 33Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-76-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 583, codigo: 'C.06.02.08.564', nombre: 'Dado Impacto Cuadrante 3/4Pulg. 45Mm',
    descripcion: 'Dado Impacto Cuadrante 3/4Pulg. 45Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-76-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 584, codigo: 'S.C.06.02.08.942', nombre: 'Dado Largo Alto Impacto 1 Pulg X 50 Mm',
    descripcion: 'Dado Largo Alto Impacto 1 Pulg X 50 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-77-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 585, codigo: 'S.C.06.02.08.982', nombre: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 40Mm',
    descripcion: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 40Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-77-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 586, codigo: 'S.C.06.02.08.983', nombre: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 42Mm',
    descripcion: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 42Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-77-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 587, codigo: 'S.C.06.02.08.984', nombre: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 46Mm',
    descripcion: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 46Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-77-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 588, codigo: 'S.C.06.02.08.985', nombre: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 60Mm',
    descripcion: 'Dado Largo De Impacto Cuadrante 3/4 Pulg 60Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-77-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 589, codigo: 'S.C.06.02.08.912', nombre: 'Dado Normal Cuadrante De 3/4 Diametro 70Mm',
    descripcion: 'Dado Normal Cuadrante De 3/4 Diametro 70Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-78-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 590, codigo: 'C.06.02.08.979', nombre: 'Dados Cuadrante 1/4  De 4 A 13 Mm',
    descripcion: 'Dados Cuadrante 1/4  De 4 A 13 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-78-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 591, codigo: 'C.30.01.08.226', nombre: 'Dados De Impacto 43 Mm',
    descripcion: 'Dados De Impacto 43 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-78-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 592, codigo: 'C.30.01.08.261', nombre: 'Dados De Impacto 48 Mm',
    descripcion: 'Dados De Impacto 48 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-78-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 593, codigo: 'SIN-COD-0593', nombre: 'Demoledor Tipo T60 7.8 Kg (Makita 9Kg)',
    descripcion: 'Demoledor Tipo T60 7.8 Kg (Makita 9Kg) — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-78-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 594, codigo: 'SIN-COD-0594', nombre: 'Demoledor Tpo T1000  12.5 Kg (Makita 15Kg)',
    descripcion: 'Demoledor Tpo T1000  12.5 Kg (Makita 15Kg) — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-79-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 595, codigo: 'S.C.07.03.04.022', nombre: 'Detector De Poros Para Cañerias De 0 A 30 Kv',
    descripcion: 'Detector De Poros Para Cañerias De 0 A 30 Kv — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-04-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 596, codigo: 'S.C.36.26.20.207', nombre: 'Diagonal 2.07 M',
    descripcion: 'Diagonal 2.07 M — demanda histórica acumulada: 1 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-08-04', stockActual: 19,
    stockMinimo: 16, stockMaximo: 48, unidadMedida: 'unidades',
    precioUnitario: 27400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 597, codigo: 'S.Z.C.06.03.01.002', nombre: 'Dobladora De Tubo De Acero 3/8 Pulg Con Palanca',
    descripcion: 'Dobladora De Tubo De Acero 3/8 Pulg Con Palanca — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-09-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 598, codigo: 'S.C.11.01.01.040', nombre: 'Dobladora Manual De Fierro Construccion 6 – 30Mm',
    descripcion: 'Dobladora Manual De Fierro Construccion 6 – 30Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-79-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 599, codigo: 'S.C.06.03.03.136', nombre: 'Eje Para Carrete 1.9 X 50 Mm Greenlee',
    descripcion: 'Eje Para Carrete 1.9 X 50 Mm Greenlee — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-09-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 600, codigo: 'S.C.06.03.03.134', nombre: 'Eje Porta Carrete 60 X 1930 Mm',
    descripcion: 'Eje Porta Carrete 60 X 1930 Mm — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-10-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
];

const _PROD_CHUNK_4: Producto[] = [
  {
    id: 601, codigo: 'S.C.07.03.04.023', nombre: 'Electrodo Tipo Resorte Para Inspeccion De Cañerias 14 Pulg',
    descripcion: 'Electrodo Tipo Resorte Para Inspeccion De Cañerias 14 Pulg — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-10-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 602, codigo: 'SIN-COD-0602', nombre: 'Engrasadora Manual',
    descripcion: 'Engrasadora Manual — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-79-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 603, codigo: 'Z.C.03.01.08.009', nombre: 'Enzunchadora Tensor Para Zuncho Metalico',
    descripcion: 'Enzunchadora Tensor Para Zuncho Metalico — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-79-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 604, codigo: 'C.03.02.10.037', nombre: 'Equipo Tig 150 Amp',
    descripcion: 'Equipo Tig 150 Amp — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-10-03', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 605, codigo: 'SIN-COD-0605', nombre: 'Escala Telescopica 6 Metros Aluminio',
    descripcion: 'Escala Telescopica 6 Metros Aluminio — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-79-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 606, codigo: 'S.C.30.01.08.647', nombre: 'Escalera Recta Fibra De Vidrio 5.49 Mts',
    descripcion: 'Escalera Recta Fibra De Vidrio 5.49 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-80-01', stockActual: 29,
    stockMinimo: 24, stockMaximo: 72, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 607, codigo: 'S.C.08.08.02.010', nombre: 'Escalera Telescopica De Fibra De 1.5 Mts',
    descripcion: 'Escalera Telescopica De Fibra De 1.5 Mts — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-09-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 608, codigo: 'S.C.30.01.08.464', nombre: 'Escalera Tijera 1,5 Mts',
    descripcion: 'Escalera Tijera 1,5 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-80-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 609, codigo: 'S.C.30.01.08.465', nombre: 'Escalera Tijera Aluminio 1.87 Mts',
    descripcion: 'Escalera Tijera Aluminio 1.87 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-80-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 610, codigo: 'S.C.30.01.08.466', nombre: 'Escalera Tijera Aluminio 2.48 Mts',
    descripcion: 'Escalera Tijera Aluminio 2.48 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-80-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 611, codigo: 'S.Z.C.06.04.03.038', nombre: 'Escuadra 24 Pulg Plana',
    descripcion: 'Escuadra 24 Pulg Plana — demanda histórica acumulada: 1 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-04-02', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 80200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 612, codigo: 'P.01.02.14.029', nombre: 'Escuadra Metalica 16X24 Pulg',
    descripcion: 'Escuadra Metalica 16X24 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-80-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 613, codigo: 'C.30.01.08.414', nombre: 'Escuadra Talon 8 Pulg',
    descripcion: 'Escuadra Talon 8 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-81-01', stockActual: 14,
    stockMinimo: 11, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 614, codigo: 'S.C.30.01.08.349', nombre: 'Esmeril Angular 1/4 Pulg Neumatico',
    descripcion: 'Esmeril Angular 1/4 Pulg Neumatico — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-09-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 615, codigo: 'C.30.01.08.352', nombre: 'Esmeril De Banco 170W/220V',
    descripcion: 'Esmeril De Banco 170W/220V — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-10-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 616, codigo: 'S.C.06.02.05.067', nombre: 'Espatulas 4 Pulg',
    descripcion: 'Espatulas 4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-81-02', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 617, codigo: 'S.C.36.26.56.002', nombre: 'Espiga De Arranque Horizontal U Reforzada',
    descripcion: 'Espiga De Arranque Horizontal U Reforzada — demanda histórica acumulada: 1 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-08-05', stockActual: 120,
    stockMinimo: 100, stockMaximo: 300, unidadMedida: 'unidades',
    precioUnitario: 27400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 618, codigo: 'S.C.36.26.56.000', nombre: 'Espiga Para Viga En U',
    descripcion: 'Espiga Para Viga En U — demanda histórica acumulada: 1 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-09-01', stockActual: 24,
    stockMinimo: 20, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 27400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 619, codigo: 'C.09.01.09.023', nombre: 'Estanque Movil Para Petroleo 900 Lts 12V',
    descripcion: 'Estanque Movil Para Petroleo 900 Lts 12V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-81-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 620, codigo: '1260201', nombre: 'Fg Rueda 1000 T12',
    descripcion: 'Fg Rueda 1000 T12 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-81-04', stockActual: 48,
    stockMinimo: 26, stockMaximo: 120, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 621, codigo: 'C.06.04.06.027', nombre: 'Formon 7/8 Pulg',
    descripcion: 'Formon 7/8 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-81-05', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 622, codigo: 'Z.C.06.08.05.011', nombre: 'Gata Hidráulica Tipo Botella 10 Ton.',
    descripcion: 'Gata Hidráulica Tipo Botella 10 Ton. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-82-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 623, codigo: 'Z.C.06.08.05.016', nombre: 'Gata Hidraulica Tipo Botella 12 Ton',
    descripcion: 'Gata Hidraulica Tipo Botella 12 Ton — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-82-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 624, codigo: 'S.Z.C.06.09.03.020', nombre: 'Generador Diesel Trifasico Insonoro 13 Kva',
    descripcion: 'Generador Diesel Trifasico Insonoro 13 Kva — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-82-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 625, codigo: 'S.Z.C.06.09.03.015', nombre: 'Generador Electrico Petrolero 110 Kva',
    descripcion: 'Generador Electrico Petrolero 110 Kva — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-82-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 626, codigo: 'S.Z.C.06.09.03.018', nombre: 'Generador Electrico Petrolero 70 Kva',
    descripcion: 'Generador Electrico Petrolero 70 Kva — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-82-05', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 627, codigo: '4716022', nombre: 'Grapa Con Garra Para Perfil',
    descripcion: 'Grapa Con Garra Para Perfil — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-83-01', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 628, codigo: '4750019', nombre: 'Grapa De Descuelgue',
    descripcion: 'Grapa De Descuelgue — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-83-02', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 629, codigo: 'S.C.30.01.08.345', nombre: 'Grifa 20 Mm',
    descripcion: 'Grifa 20 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-83-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 630, codigo: 'Z.C.06.03.04.031', nombre: 'Grifa 22 Mm',
    descripcion: 'Grifa 22 Mm — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-10-04', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 631, codigo: 'P.02.01.06.007', nombre: 'Guillotina Metalica Corta Papel Tamaño A4',
    descripcion: 'Guillotina Metalica Corta Papel Tamaño A4 — demanda histórica acumulada: 1 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-02-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 92100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 632, codigo: 'S.C.36.26.13.074', nombre: 'Horizontal En U 0.73 M Pie Compartido 15-44 Grados',
    descripcion: 'Horizontal En U 0.73 M Pie Compartido 15-44 Grados — demanda histórica acumulada: 1 un', categoriaId: 4,
    categoriaNombre: 'Andamios y Estructuras', ubicacion: 'D-09-02', stockActual: 96,
    stockMinimo: 80, stockMaximo: 240, unidadMedida: 'unidades',
    precioUnitario: 27400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 633, codigo: '2614108', nombre: 'Horizontal U Plataforma-Plataforma 0,96',
    descripcion: 'Horizontal U Plataforma-Plataforma 0,96 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-83-04', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 634, codigo: 'S.C.30.01.08.398', nombre: 'Huincha 30 Metros Metalica Esmaltada',
    descripcion: 'Huincha 30 Metros Metalica Esmaltada — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-83-05', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 635, codigo: 'Z.C.06.13.02.022', nombre: 'Huincha De Medir 5 Mts.Con Certificado De Contrastación.',
    descripcion: 'Huincha De Medir 5 Mts.Con Certificado De Contrastación. — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-06-03', stockActual: 12,
    stockMinimo: 8, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 636, codigo: 'SIN-COD-0636', nombre: 'Jaula Para Sustancias Peligrosas',
    descripcion: 'Jaula Para Sustancias Peligrosas — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-84-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 637, codigo: 'SIN-COD-0637', nombre: 'Jgos. De Tragallamas Para Soplete Y Regul.',
    descripcion: 'Jgos. De Tragallamas Para Soplete Y Regul. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-84-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 638, codigo: 'SIN-COD-0638', nombre: 'Jgos. Manguera Oxicorte 14X40Mt. C/Term.',
    descripcion: 'Jgos. Manguera Oxicorte 14X40Mt. C/Term. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-84-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 639, codigo: 'C.30.01.08.080-S.C.06.02.07.209', nombre: 'Juego Alicates Aislados 1000 Volt',
    descripcion: 'Juego Alicates Aislados 1000 Volt — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-84-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 640, codigo: 'S.C.06.02.08.284', nombre: 'Juego Dados 1/4',
    descripcion: 'Juego Dados 1/4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-84-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 641, codigo: 'C.06.02.08.747', nombre: 'Juego Dados Aislados 1000V Cuadrante 1/2 Pulg',
    descripcion: 'Juego Dados Aislados 1000V Cuadrante 1/2 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-85-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 642, codigo: 'S.C.06.02.08.476', nombre: 'Juego Dados Impacto Cuadrante 3/4 De 21Mm A 46Mm',
    descripcion: 'Juego Dados Impacto Cuadrante 3/4 De 21Mm A 46Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-85-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 643, codigo: 'S.C.06.02.08.326', nombre: 'Juego Dados Normal Cuadrante 3/4 De 6Mm A 32Mm C/Barrote',
    descripcion: 'Juego Dados Normal Cuadrante 3/4 De 6Mm A 32Mm C/Barrote — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-85-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 644, codigo: 'S.C.06.02.07.209- C.30.01.08.080-C.06.02.07.210', nombre: 'Juego De Alicates  3 Piezas (Cualquier Marca) Aislados 100 Volt.',
    descripcion: 'Juego De Alicates  3 Piezas (Cualquier Marca) Aislados 100 Volt. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-85-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 645, codigo: 'C.06.02.07.806', nombre: 'Juego De Alicates Para Seguros Segers',
    descripcion: 'Juego De Alicates Para Seguros Segers — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-85-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 646, codigo: 'C.06.02.08.981', nombre: 'Juego De Dados Punta Allen Cuadrante 1/2" De 3 A 10 Mm.',
    descripcion: 'Juego De Dados Punta Allen Cuadrante 1/2" De 3 A 10 Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-86-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 647, codigo: 'S.C.06.02.08.296', nombre: 'Juego De Dados Punta Estrella (Torx) Cuadrante 1/2" E4 Hasta E20 - Tx10 A Tx60',
    descripcion: 'Juego De Dados Punta Estrella (Torx) Cuadrante 1/2" E4 Hasta E20 - Tx10 A Tx60 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-86-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 648, codigo: 'S.C.06.02.08.977', nombre: 'Juego De Knockout Hidraulico De 1/2 A 4 Pulg',
    descripcion: 'Juego De Knockout Hidraulico De 1/2 A 4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-86-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 649, codigo: 'SIN-COD-0649', nombre: 'Juego De Llave Punta Corona De 22 A 48 Mm',
    descripcion: 'Juego De Llave Punta Corona De 22 A 48 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-86-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 650, codigo: 'SIN-COD-0650', nombre: 'Juego De Llaves Punta Corona (10 A 32)Mm',
    descripcion: 'Juego De Llaves Punta Corona (10 A 32)Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-86-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 651, codigo: 'C.12.02.07.005', nombre: 'Kardex',
    descripcion: 'Kardex — demanda histórica acumulada: 1 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-04-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 80200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 652, codigo: 'S.C.03.02.99.004', nombre: 'Kit 6 Galgas Medidores De Soldadura',
    descripcion: 'Kit 6 Galgas Medidores De Soldadura — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-10-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 653, codigo: 'S.C.07.03.19.035', nombre: 'Laucha De Fibra De Vidrio Con Carrete 8 X100 Mt',
    descripcion: 'Laucha De Fibra De Vidrio Con Carrete 8 X100 Mt — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-04-05', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 654, codigo: 'C.07.03.19.001', nombre: 'Laucha Metalica 20 Mts',
    descripcion: 'Laucha Metalica 20 Mts — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-05-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 655, codigo: 'C.30.01.08.445', nombre: 'Laucha Metalica 30 Mts',
    descripcion: 'Laucha Metalica 30 Mts — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-87-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 656, codigo: 'S.C.06.02.07.403', nombre: 'Lima Cuchilla 6 Pulg',
    descripcion: 'Lima Cuchilla 6 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-87-02', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 657, codigo: 'S.C.30.01.08.348', nombre: 'Lima Cuchillo Bastarda 8"',
    descripcion: 'Lima Cuchillo Bastarda 8" — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-87-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 658, codigo: 'Z.C.06.03.04.043', nombre: 'Lima Redodnda Bastarda 7/32 X8',
    descripcion: 'Lima Redodnda Bastarda 7/32 X8 — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-11-01', stockActual: 54,
    stockMinimo: 45, stockMaximo: 135, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 659, codigo: 'C.06.02.05.020', nombre: 'Llana',
    descripcion: 'Llana — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-87-04', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 660, codigo: 'Z.C.06.02.09.022', nombre: 'Llana Dentada',
    descripcion: 'Llana Dentada — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-87-05', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 661, codigo: 'C.30.01.08.650', nombre: 'Llave Ajustable 12Pulg. Aislada Para 1000 V',
    descripcion: 'Llave Ajustable 12Pulg. Aislada Para 1000 V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-88-01', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 662, codigo: 'C.06.02.07.769', nombre: 'Llave Cadena Para Cañeria 6Pulg',
    descripcion: 'Llave Cadena Para Cañeria 6Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-88-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 663, codigo: 'S.C.30.01.08.665', nombre: 'Llave Corona Chicharra 17Mm',
    descripcion: 'Llave Corona Chicharra 17Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-88-03', stockActual: 36,
    stockMinimo: 30, stockMaximo: 90, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 664, codigo: 'S.C.06.02.07.041', nombre: 'Llave Corona Corona 12 X 13Mm',
    descripcion: 'Llave Corona Corona 12 X 13Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-88-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 665, codigo: 'S.C.06.02.07.042', nombre: 'Llave Corona Corona 14 X 15Mm',
    descripcion: 'Llave Corona Corona 14 X 15Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-88-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 666, codigo: 'S.C.06.02.07.043', nombre: 'Llave Corona Corona 16 X 17Mm',
    descripcion: 'Llave Corona Corona 16 X 17Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-89-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 667, codigo: 'S.C.06.02.07.044', nombre: 'Llave Corona Corona 18 X 19Mm',
    descripcion: 'Llave Corona Corona 18 X 19Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-89-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 668, codigo: 'S.C.30.01.08.510', nombre: 'Llave Corta Espiga Cuadrante De 1',
    descripcion: 'Llave Corta Espiga Cuadrante De 1 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-89-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 669, codigo: 'C.06.02.08.518', nombre: 'Llave De Golpe 48Mm',
    descripcion: 'Llave De Golpe 48Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-89-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 670, codigo: 'Z.C.06.02.08.250', nombre: 'Llave De Golpe 56Mm',
    descripcion: 'Llave De Golpe 56Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-89-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 671, codigo: 'S.C.06.02.08.727', nombre: 'Llave De Torque 10 A 150 Ft-Lb',
    descripcion: 'Llave De Torque 10 A 150 Ft-Lb — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-90-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 672, codigo: 'S.C.06.02.08.972', nombre: 'Llave De Torque De 50 A 300 Lbs Cuadrante De 3/4',
    descripcion: 'Llave De Torque De 50 A 300 Lbs Cuadrante De 3/4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-90-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 673, codigo: 'S.C.30.01.08.513', nombre: 'Llave De Torque Manual De 250 A 1000 Lbs Cua. 3/4',
    descripcion: 'Llave De Torque Manual De 250 A 1000 Lbs Cua. 3/4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-90-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 674, codigo: 'Z.C.06.02.07.039', nombre: 'Llave Francesa 24 Pulg',
    descripcion: 'Llave Francesa 24 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-90-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 675, codigo: 'C.06.02.08.253', nombre: 'Llave Golpe 1.1/4Pulg',
    descripcion: 'Llave Golpe 1.1/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-90-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 676, codigo: 'C.06.02.08.254', nombre: 'Llave Golpe 1.5/8Pulg',
    descripcion: 'Llave Golpe 1.5/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-91-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 677, codigo: 'C.06.02.08.506', nombre: 'Llave Golpe 24Mm',
    descripcion: 'Llave Golpe 24Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-91-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 678, codigo: 'C.06.02.08.222', nombre: 'Llave Golpe 2Pulg',
    descripcion: 'Llave Golpe 2Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-91-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 679, codigo: 'C.06.02.08.697', nombre: 'Llave Golpe 32Mm',
    descripcion: 'Llave Golpe 32Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-91-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 680, codigo: 'C.06.02.08.514', nombre: 'Llave Golpe 80Mm',
    descripcion: 'Llave Golpe 80Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-91-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 681, codigo: 'C.06.02.08.028', nombre: 'Llave Golpe Corona 1 7/16Pulg',
    descripcion: 'Llave Golpe Corona 1 7/16Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-92-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 682, codigo: 'S.C.06.02.07.766', nombre: 'Llave Golpe Corona 27 Mm',
    descripcion: 'Llave Golpe Corona 27 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-92-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 683, codigo: 'S.C.06.02.07.765', nombre: 'Llave Golpe Corona 36 Mm',
    descripcion: 'Llave Golpe Corona 36 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-92-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 684, codigo: 'S.C.06.02.07.764', nombre: 'Llave Golpe Corona 85 Mm',
    descripcion: 'Llave Golpe Corona 85 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-92-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 685, codigo: 'C.06.02.08.022', nombre: 'Llave Punta Cola 1 1/2',
    descripcion: 'Llave Punta Cola 1 1/2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-92-05', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 686, codigo: 'Z.C.06.02.08.034', nombre: 'Llave Punta Cola 7/8',
    descripcion: 'Llave Punta Cola 7/8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-93-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 687, codigo: 'Z.C.06.02.08.050', nombre: 'Llave Punta Corona 1',
    descripcion: 'Llave Punta Corona 1 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-93-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 688, codigo: 'Z.C.06.02.08.040', nombre: 'Llave Punta Corona 1 13/16 Pulg',
    descripcion: 'Llave Punta Corona 1 13/16 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-93-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 689, codigo: 'C.06.02.08.307', nombre: 'Llave Punta Corona 1 3/4Pulg',
    descripcion: 'Llave Punta Corona 1 3/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-93-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 690, codigo: 'Z.C.06.02.08.046', nombre: 'Llave Punta Corona 1 5/8',
    descripcion: 'Llave Punta Corona 1 5/8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-93-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 691, codigo: 'Z.C.06.02.08.051', nombre: 'Llave Punta Corona 1/2',
    descripcion: 'Llave Punta Corona 1/2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-94-01', stockActual: 24,
    stockMinimo: 12, stockMaximo: 60, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 692, codigo: 'Z.C.06.02.08.054', nombre: 'Llave Punta Corona 10',
    descripcion: 'Llave Punta Corona 10 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-94-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 693, codigo: 'Z.C.06.02.08.055', nombre: 'Llave Punta Corona 11',
    descripcion: 'Llave Punta Corona 11 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-94-03', stockActual: 14,
    stockMinimo: 7, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 694, codigo: 'Z.C.06.02.08.060', nombre: 'Llave Punta Corona 14',
    descripcion: 'Llave Punta Corona 14 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-94-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 695, codigo: 'Z.C.06.02.08.061', nombre: 'Llave Punta Corona 15',
    descripcion: 'Llave Punta Corona 15 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-94-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 696, codigo: 'Z.C.06.02.08.063', nombre: 'Llave Punta Corona 16',
    descripcion: 'Llave Punta Corona 16 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-95-01', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 697, codigo: 'Z.C.06.02.08.064', nombre: 'Llave Punta Corona 17',
    descripcion: 'Llave Punta Corona 17 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-95-02', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 698, codigo: 'Z.C.06.02.08.065', nombre: 'Llave Punta Corona 18',
    descripcion: 'Llave Punta Corona 18 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-95-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 699, codigo: 'Z.C.06.02.08.074', nombre: 'Llave Punta Corona 2',
    descripcion: 'Llave Punta Corona 2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-95-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 700, codigo: 'Z.C.06.02.08.068', nombre: 'Llave Punta Corona 2 1/4 Pulg',
    descripcion: 'Llave Punta Corona 2 1/4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-95-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 701, codigo: 'C.06.02.08.070', nombre: 'Llave Punta Corona 2 3/16Pulg',
    descripcion: 'Llave Punta Corona 2 3/16Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-96-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 702, codigo: 'C.06.02.08.071', nombre: 'Llave Punta Corona 2 3/8Pulg',
    descripcion: 'Llave Punta Corona 2 3/8Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-96-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 703, codigo: 'Z.C.06.02.08.075', nombre: 'Llave Punta Corona 20',
    descripcion: 'Llave Punta Corona 20 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-96-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 704, codigo: 'Z.C.06.02.08.076', nombre: 'Llave Punta Corona 21',
    descripcion: 'Llave Punta Corona 21 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-96-04', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 705, codigo: 'Z.C.06.02.08.081', nombre: 'Llave Punta Corona 26',
    descripcion: 'Llave Punta Corona 26 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-96-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 706, codigo: 'Z.C.06.02.08.091', nombre: 'Llave Punta Corona 33',
    descripcion: 'Llave Punta Corona 33 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-97-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 707, codigo: 'Z.C.06.02.08.093', nombre: 'Llave Punta Corona 35',
    descripcion: 'Llave Punta Corona 35 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-97-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 708, codigo: 'C.06.02.08.274', nombre: 'Llave Punta Corona 6Mm.',
    descripcion: 'Llave Punta Corona 6Mm. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-97-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 709, codigo: 'Z.C.06.02.08.139', nombre: 'Llave Punta Corona 8',
    descripcion: 'Llave Punta Corona 8 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-97-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 710, codigo: 'Z.C.06.02.08.140', nombre: 'Llave Punta Corona 9',
    descripcion: 'Llave Punta Corona 9 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-97-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 711, codigo: 'S.C.06.02.07.046', nombre: 'Llave Punta Y Corona 70Mm',
    descripcion: 'Llave Punta Y Corona 70Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-98-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 712, codigo: 'C.06.02.07.047', nombre: 'Llave Stillson 36Pulg',
    descripcion: 'Llave Stillson 36Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-98-02', stockActual: 5,
    stockMinimo: 3, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 713, codigo: 'S.C.06.02.08.695', nombre: 'Llave Torque 1/2 30-250 Nm',
    descripcion: 'Llave Torque 1/2 30-250 Nm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-98-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 714, codigo: 'S.C.06.02.08.919', nombre: 'Llave Torque Cuadrante ¼ Pulg De 25Mm',
    descripcion: 'Llave Torque Cuadrante ¼ Pulg De 25Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-98-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 715, codigo: 'S.C.06.02.07.040', nombre: 'Llave Torque Cuadrante ½ De 15-75 Lbs',
    descripcion: 'Llave Torque Cuadrante ½ De 15-75 Lbs — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-98-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 716, codigo: 'S.C.06.02.08.921', nombre: 'Llave Torque Cuadrante 1/4 Pulg De 4.5 – 30 Nm',
    descripcion: 'Llave Torque Cuadrante 1/4 Pulg De 4.5 – 30 Nm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-99-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 717, codigo: 'S.C.06.02.08.733', nombre: 'Llave Torque Cuadrante 3/8 De 15-80 Lb',
    descripcion: 'Llave Torque Cuadrante 3/8 De 15-80 Lb — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-99-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 718, codigo: 'S.C.30.01.08.516', nombre: 'Llave Torque De 100-600 Lbs Cuadrante ¾',
    descripcion: 'Llave Torque De 100-600 Lbs Cuadrante ¾ — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-99-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 719, codigo: 'S.C.30.01.08.517', nombre: 'Llave Torque De 10-150 Lbs Cuadrante ½',
    descripcion: 'Llave Torque De 10-150 Lbs Cuadrante ½ — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-99-04', stockActual: 2,
    stockMinimo: 1, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 720, codigo: 'S.Z.C.06.02.07.115', nombre: 'Llaves Stilson De 14"',
    descripcion: 'Llaves Stilson De 14" — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-99-05', stockActual: 10,
    stockMinimo: 6, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 721, codigo: 'S.Z.C.06.02.07.046', nombre: 'Llaves Stilson De 24"',
    descripcion: 'Llaves Stilson De 24" — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-100-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 722, codigo: 'S.C.04.03.04.006', nombre: 'Locker Metalico 5 Cuerpos',
    descripcion: 'Locker Metalico 5 Cuerpos — demanda histórica acumulada: 1 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-04-04', stockActual: 6,
    stockMinimo: 3, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 80200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 723, codigo: 'Z.C.06.02.09.063', nombre: 'Maceta 2Lbs Con Mango',
    descripcion: 'Maceta 2Lbs Con Mango — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-100-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 724, codigo: 'C.07.01.03.680', nombre: 'Macetas De Goma 16 Onza',
    descripcion: 'Macetas De Goma 16 Onza — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-02-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 725, codigo: 'S.C.06.03.03.108', nombre: 'Maquina Para Torchar 630 Amp',
    descripcion: 'Maquina Para Torchar 630 Amp — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-11-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 726, codigo: 'S.C.32.03.03.089', nombre: 'Maquina Soldadora De Corte Por Plasma',
    descripcion: 'Maquina Soldadora De Corte Por Plasma — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-11-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 727, codigo: 'S.Z.C.06.03.03.017', nombre: 'Maquinas Mig Lincoln V350 Comleta O Similar Para Soldar Inershiel',
    descripcion: 'Maquinas Mig Lincoln V350 Comleta O Similar Para Soldar Inershiel — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-11-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 728, codigo: 'S.C.06.02.10.046', nombre: 'Martillo Demoledor Sds Max 9.7 Kg',
    descripcion: 'Martillo Demoledor Sds Max 9.7 Kg — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-10-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 729, codigo: 'S.Z.C.06.11.06.041', nombre: 'Martillo Demoledor Toma Hexagonal',
    descripcion: 'Martillo Demoledor Toma Hexagonal — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-100-03', stockActual: 4,
    stockMinimo: 2, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 730, codigo: 'C.06.02.08.013', nombre: 'Martillo Mecánico',
    descripcion: 'Martillo Mecánico — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-100-04', stockActual: 10,
    stockMinimo: 6, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 731, codigo: 'Z.C.06.11.03.055', nombre: 'Martillo Mecanico 1/2 Lbs.',
    descripcion: 'Martillo Mecanico 1/2 Lbs. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-100-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 732, codigo: 'S.C.03.02.99.008', nombre: 'Medidor De Soldadura De Filete 7Piesas',
    descripcion: 'Medidor De Soldadura De Filete 7Piesas — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-11-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 733, codigo: 'C.07.03.04.113', nombre: 'Medidor De Traslape',
    descripcion: 'Medidor De Traslape — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-05-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 734, codigo: 'S.Z.C.06.13.02.009', nombre: 'Medidor Distancia Laser',
    descripcion: 'Medidor Distancia Laser — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-06-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 735, codigo: 'S.C.06.05.01.014', nombre: 'Mezcladora Inalambrica',
    descripcion: 'Mezcladora Inalambrica — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-101-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 736, codigo: 'S.C.30.01.08.522', nombre: 'Micrometro Exterior',
    descripcion: 'Micrometro Exterior — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-101-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 737, codigo: 'S.C.06.05.05.007', nombre: 'Mini Dumper Electrico 500 Kg',
    descripcion: 'Mini Dumper Electrico 500 Kg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-101-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 738, codigo: 'Z.C.06.13.01.010', nombre: 'Mira De Nivelacion',
    descripcion: 'Mira De Nivelacion — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-06-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 739, codigo: 'C.19.03.04.014', nombre: 'Monitor 19"',
    descripcion: 'Monitor 19" — demanda histórica acumulada: 1 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-03-01', stockActual: 20,
    stockMinimo: 14, stockMaximo: 51, unidadMedida: 'unidades',
    precioUnitario: 92100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 740, codigo: 'S.C.19.03.04.015', nombre: 'Monitor 21.45 Pulg',
    descripcion: 'Monitor 21.45 Pulg — demanda histórica acumulada: 1 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-03-02', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 92100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 741, codigo: 'S.C.33.09.01.038', nombre: 'Motobomba Bencinera 3 Pulg',
    descripcion: 'Motobomba Bencinera 3 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-101-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 742, codigo: 'S.C.33.09.01.039', nombre: 'Motobomba Bencinera 4 Pulg',
    descripcion: 'Motobomba Bencinera 4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-101-05', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 743, codigo: 'S.C.06.13.02.035', nombre: 'Nivel Carpintero 30 Pulg',
    descripcion: 'Nivel Carpintero 30 Pulg — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-07-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 744, codigo: 'C.32.13.05.018', nombre: 'Nivel De Precision De 200 X 200 Mm',
    descripcion: 'Nivel De Precision De 200 X 200 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-102-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 745, codigo: 'S.C.06.02.08.964', nombre: 'Nivel Imantado 48 Pulg',
    descripcion: 'Nivel Imantado 48 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-102-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 746, codigo: 'Z.C.06.13.02.042', nombre: 'Nivel Mecánico 18 Pulg',
    descripcion: 'Nivel Mecánico 18 Pulg — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-07-02', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 747, codigo: 'Z.C.06.13.02.027', nombre: 'Nivel Mecanico 24 Pulg',
    descripcion: 'Nivel Mecanico 24 Pulg — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-07-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 748, codigo: 'S.C.03.01.13.170', nombre: 'Pasteca Para 3.2 Tons',
    descripcion: 'Pasteca Para 3.2 Tons — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-102-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 749, codigo: 'S.C.03.01.13.166', nombre: 'Pateca Simple 2 Ton',
    descripcion: 'Pateca Simple 2 Ton — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-102-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 750, codigo: 'S.C.03.01.13.231', nombre: 'Pateca Simple De 1/2Pulg Para 1 Tons',
    descripcion: 'Pateca Simple De 1/2Pulg Para 1 Tons — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-102-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 751, codigo: 'C.03.01.13.229', nombre: 'Pateca Simple De 4Pulg Para 1.0 Tons',
    descripcion: 'Pateca Simple De 4Pulg Para 1.0 Tons — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-103-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 752, codigo: 'SIN-COD-0752', nombre: 'Pela Cable Aislado 1000 Volt',
    descripcion: 'Pela Cable Aislado 1000 Volt — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-03-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'metros',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 753, codigo: 'SIN-COD-0753', nombre: 'Pela Cable Automatico',
    descripcion: 'Pela Cable Automatico — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-03-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'metros',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 754, codigo: 'C.06.13.02.089', nombre: 'Pie De Metro 6 Pulg',
    descripcion: 'Pie De Metro 6 Pulg — demanda histórica acumulada: 1 un', categoriaId: 10,
    categoriaNombre: 'Medición y Topografía', ubicacion: 'J-07-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 81700, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 755, codigo: 'Z.C.06.11.02.046', nombre: 'Pie De Metro 8 Pulg',
    descripcion: 'Pie De Metro 8 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-103-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 756, codigo: 'C.06.14.01.012', nombre: 'Pie De Metro Digital 200Mm. Con Certificado De Calibración',
    descripcion: 'Pie De Metro Digital 200Mm. Con Certificado De Calibración — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-103-03', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 757, codigo: 'P.09.076', nombre: 'Pistola Calafatera',
    descripcion: 'Pistola Calafatera — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-103-04', stockActual: 6,
    stockMinimo: 4, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 758, codigo: 'S.C.03.01.08.006', nombre: 'Pistola K – 126 Para Ln 25 Pro',
    descripcion: 'Pistola K – 126 Para Ln 25 Pro — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-103-05', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 759, codigo: 'Z.C.06.03.03.043', nombre: 'Pistola Para Proceso Tig',
    descripcion: 'Pistola Para Proceso Tig — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-12-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 760, codigo: 'S.C.06.03.03.109', nombre: 'Pistola Para Torchar 1000 Amp',
    descripcion: 'Pistola Para Torchar 1000 Amp — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-12-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 761, codigo: 'Z.C.06.02.09.048', nombre: 'Plana Punta',
    descripcion: 'Plana Punta — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-104-01', stockActual: 14,
    stockMinimo: 12, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 762, codigo: '3835257', nombre: 'Plataforma Robusta C/Escalera 2,57 M X 0,61 M',
    descripcion: 'Plataforma Robusta C/Escalera 2,57 M X 0,61 M — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-104-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 763, codigo: 'C.30.01.08.407', nombre: 'Plomada 500 Grm',
    descripcion: 'Plomada 500 Grm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-104-03', stockActual: 7,
    stockMinimo: 5, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 764, codigo: 'S.C.06.02.09.025', nombre: 'Plomada 900 Gr',
    descripcion: 'Plomada 900 Gr — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-104-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 765, codigo: 'SIN-COD-0765', nombre: 'Plomo 450 Grms. Albañil',
    descripcion: 'Plomo 450 Grms. Albañil — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-104-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 766, codigo: 'S.C.19.01.02.032', nombre: 'Polea Con Freno Y Adaptador Para Mensula',
    descripcion: 'Polea Con Freno Y Adaptador Para Mensula — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-105-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 767, codigo: 'S.C.19.01.02.033', nombre: 'Polea Tipo Bandeja 12 Pulg X 5 Pulg - Green Lee',
    descripcion: 'Polea Tipo Bandeja 12 Pulg X 5 Pulg - Green Lee — demanda histórica acumulada: 1 un', categoriaId: 6,
    categoriaNombre: 'Material Eléctrico', ubicacion: 'F-03-03', stockActual: 30,
    stockMinimo: 25, stockMaximo: 75, unidadMedida: 'unidades',
    precioUnitario: 10300, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4231']
  },
  {
    id: 768, codigo: 'S.C.30.01.08.380', nombre: 'Porta Power Hidraulco 20 Ton',
    descripcion: 'Porta Power Hidraulco 20 Ton — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-105-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 769, codigo: 'C.06.02.07.356', nombre: 'Prensa C 3 Pulg',
    descripcion: 'Prensa C 3 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-105-03', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 770, codigo: 'C.30.01.08.063', nombre: 'Prensa C De 6Pulg',
    descripcion: 'Prensa C De 6Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-105-04', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 771, codigo: 'S.Z.C.06.02.09.018', nombre: 'Punto Acero Con Proteccion',
    descripcion: 'Punto Acero Con Proteccion — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-105-05', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 772, codigo: 'SIN-COD-0772', nombre: 'Radio Motorola Dep 450 Ep 2 Con Frecuencia Mcen',
    descripcion: 'Radio Motorola Dep 450 Ep 2 Con Frecuencia Mcen — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-106-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 773, codigo: 'S.C.30.01.08.472', nombre: 'Regla De Pelo 4 Pulg',
    descripcion: 'Regla De Pelo 4 Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-106-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 774, codigo: 'SIN-COD-0774', nombre: 'Regulador De Oxigeno',
    descripcion: 'Regulador De Oxigeno — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-106-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 775, codigo: 'SIN-COD-0775', nombre: 'Regulador De Propano Gas',
    descripcion: 'Regulador De Propano Gas — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-106-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 776, codigo: 'S.Z.C.03.01.08.006', nombre: 'Remachadora Tipo Acordeon',
    descripcion: 'Remachadora Tipo Acordeon — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-106-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 777, codigo: 'S.C.20.01.04.014', nombre: 'Roedora 1.6 Mm Inalambrica',
    descripcion: 'Roedora 1.6 Mm Inalambrica — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-107-01', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 778, codigo: 'C.03.01.13.019', nombre: 'Roldana Con Polea Manual De 500 Kilos',
    descripcion: 'Roldana Con Polea Manual De 500 Kilos — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-107-02', stockActual: 12,
    stockMinimo: 6, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 779, codigo: 'C.03.01.13.020', nombre: 'Roldana Doble',
    descripcion: 'Roldana Doble — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-107-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 780, codigo: 'S.C.06.02.10.119', nombre: 'Rotomartillo Cincelador Toma Sds Max 8Kg',
    descripcion: 'Rotomartillo Cincelador Toma Sds Max 8Kg — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-10-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 781, codigo: 'S.C.06.02.10.135', nombre: 'Rotomartillo Sds Plus 3.3 Kg',
    descripcion: 'Rotomartillo Sds Plus 3.3 Kg — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-10-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 782, codigo: 'S.P.02.01.08.002', nombre: 'Rotuladora Industrial Profesional E550W',
    descripcion: 'Rotuladora Industrial Profesional E550W — demanda histórica acumulada: 1 un', categoriaId: 8,
    categoriaNombre: 'Equipos Electrónicos', ubicacion: 'H-03-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 92100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 783, codigo: 'SIN-COD-0783', nombre: 'Rueda 200, 10Kn / Con Base Regulable',
    descripcion: 'Rueda 200, 10Kn / Con Base Regulable — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-107-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 784, codigo: 'SIN-COD-0784', nombre: 'Rueda 200, 7 Kn',
    descripcion: 'Rueda 200, 7 Kn — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-107-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 785, codigo: '2634031', nombre: 'Seguro P/Plataforma (20 U)',
    descripcion: 'Seguro P/Plataforma (20 U) — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-108-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 786, codigo: 'SIN-COD-0786', nombre: 'Serrucho Electrico',
    descripcion: 'Serrucho Electrico — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-108-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 787, codigo: 'S.C.06.02.08.294', nombre: 'Set Dado De Cuadrante 1/2 De 10 A 22 Mm',
    descripcion: 'Set Dado De Cuadrante 1/2 De 10 A 22 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-108-03', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 788, codigo: 'SIN-COD-0788', nombre: 'Set De Dados Cuadrante 1/2 Aislados A 1000 Volt',
    descripcion: 'Set De Dados Cuadrante 1/2 Aislados A 1000 Volt — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-108-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 789, codigo: 'S.C.06.02.08.285', nombre: 'Set De Dados Cuadrante 1/2 Aislados A 1000 Volt (7Pc) 14-24',
    descripcion: 'Set De Dados Cuadrante 1/2 Aislados A 1000 Volt (7Pc) 14-24 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-108-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 790, codigo: 'S.C.06.02.08.297', nombre: 'Set De Dados Cuadrante 1/2 De 8 A 26 Mm',
    descripcion: 'Set De Dados Cuadrante 1/2 De 8 A 26 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-109-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 791, codigo: 'C.06.02.08.644', nombre: 'Set De Dados Cuadrante 1/4Pulg',
    descripcion: 'Set De Dados Cuadrante 1/4Pulg — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-109-02', stockActual: 7,
    stockMinimo: 3, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 792, codigo: 'S.C.06.02.08.201', nombre: 'Set De Dados Cuadrante 3/4 De 19 A 50 Mm',
    descripcion: 'Set De Dados Cuadrante 3/4 De 19 A 50 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-109-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 793, codigo: 'C.06.02.08.997', nombre: 'Set De Dados Cuadrante 3/4 De 21 A 50 Mm',
    descripcion: 'Set De Dados Cuadrante 3/4 De 21 A 50 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-109-04', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 794, codigo: 'SIN-COD-0794', nombre: 'Set De Dados Cuadrante De 1/2',
    descripcion: 'Set De Dados Cuadrante De 1/2 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-109-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 795, codigo: 'C.06.02.08.285', nombre: 'Set De Dados Cuadrante De 1/2″ De 1/4"-1.1/4″',
    descripcion: 'Set De Dados Cuadrante De 1/2″ De 1/4"-1.1/4″ — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-110-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 796, codigo: 'S.C.06.02.08.295', nombre: 'Set De Dados Largo Cuadrante 3/8 De 10 A 22 Mm',
    descripcion: 'Set De Dados Largo Cuadrante 3/8 De 10 A 22 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-110-02', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 797, codigo: 'S.C.06.02.08.299', nombre: 'Set De Dados Largos 1/2 10-32 Mm',
    descripcion: 'Set De Dados Largos 1/2 10-32 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-110-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 798, codigo: 'S.C.06.02.08.300', nombre: 'Set De Dados Largos Cuadrante 3/8 8-24 Mm',
    descripcion: 'Set De Dados Largos Cuadrante 3/8 8-24 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-110-04', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 799, codigo: 'S.C.06.02.08.754', nombre: 'Set De Dados Poligonales Cuadrante 1/2 De 12 A 32Mm',
    descripcion: 'Set De Dados Poligonales Cuadrante 1/2 De 12 A 32Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-110-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 800, codigo: 'S.C.06.02.08.288', nombre: 'Set De Llaves Allen 10 Pcs',
    descripcion: 'Set De Llaves Allen 10 Pcs — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-111-01', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
];

const _PROD_CHUNK_5: Producto[] = [
  {
    id: 801, codigo: 'Z.C.06.02.08.017', nombre: 'Set De Llaves Estrellas',
    descripcion: 'Set De Llaves Estrellas — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-111-02', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 802, codigo: 'C.33.02.08.646', nombre: 'Set Llaves Punta Corona De 5/16″-1.1/4″',
    descripcion: 'Set Llaves Punta Corona De 5/16″-1.1/4″ — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-111-03', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 803, codigo: 'C.33.02.08.734', nombre: 'Set Llaves Punta Y Corona 8 A 24Mm',
    descripcion: 'Set Llaves Punta Y Corona 8 A 24Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-111-04', stockActual: 14,
    stockMinimo: 6, stockMaximo: 36, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 804, codigo: 'C.12.02.08.007', nombre: 'Silla Sin Brazos (Sala De Reunión)',
    descripcion: 'Silla Sin Brazos (Sala De Reunión) — demanda histórica acumulada: 1 un', categoriaId: 5,
    categoriaNombre: 'Mobiliario de Obra', ubicacion: 'E-04-05', stockActual: 12,
    stockMinimo: 10, stockMaximo: 30, unidadMedida: 'unidades',
    precioUnitario: 80200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 805, codigo: 'S.C.06.08.08.532', nombre: 'Sistema Gnns Con Imu',
    descripcion: 'Sistema Gnns Con Imu — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-10-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 806, codigo: 'SIN-COD-0806', nombre: 'Soplete Cortador Propano Largo 1Mt.',
    descripcion: 'Soplete Cortador Propano Largo 1Mt. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-111-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
  {
    id: 807, codigo: 'S.C.07.03.14.018', nombre: 'Starter Kit Baterias 18V Bosch',
    descripcion: 'Starter Kit Baterias 18V Bosch — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-05-03', stockActual: 7,
    stockMinimo: 6, stockMaximo: 18, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 808, codigo: 'SIN-COD-0808', nombre: 'Tablero De Faena',
    descripcion: 'Tablero De Faena — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-112-01', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 809, codigo: 'SIN-COD-0809', nombre: 'Tablero Distribucion',
    descripcion: 'Tablero Distribucion — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-112-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 810, codigo: 'S.C.07.03.06.013', nombre: 'Tablero Electrico De 800X600X250 Mm',
    descripcion: 'Tablero Electrico De 800X600X250 Mm — demanda histórica acumulada: 1 un', categoriaId: 3,
    categoriaNombre: 'Equipo de Medición', ubicacion: 'C-05-04', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 35400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 811, codigo: 'SIN-COD-0811', nombre: 'Tablero Faena Estandar 380/220V',
    descripcion: 'Tablero Faena Estandar 380/220V — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-112-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 812, codigo: 'S.C.30.01.08.312', nombre: 'Taladro De Rotacion 1/2 Pulg',
    descripcion: 'Taladro De Rotacion 1/2 Pulg — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-11-01', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 813, codigo: 'SIN-COD-0813', nombre: 'Taladro Sds Max 6Kg',
    descripcion: 'Taladro Sds Max 6Kg — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-11-02', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4254']
  },
  {
    id: 814, codigo: 'Z.C.06.11.99.021', nombre: 'Tanquetas De Arrastre Polines',
    descripcion: 'Tanquetas De Arrastre Polines — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-112-04', stockActual: 10,
    stockMinimo: 4, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 815, codigo: 'S.Z.C.06.02.14.030', nombre: 'Tecle De Cadena 7.5 Toneladas',
    descripcion: 'Tecle De Cadena 7.5 Toneladas — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-11-03', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 816, codigo: 'S.Z.C.06.02.14.054', nombre: 'Tecle De Palanca 1000 Kg.',
    descripcion: 'Tecle De Palanca 1000 Kg. — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-11-04', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 817, codigo: 'SIN-COD-0817', nombre: 'Tecle Palanca 1 Tons.',
    descripcion: 'Tecle Palanca 1 Tons. — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-112-05', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 818, codigo: 'P.08.02.17.008', nombre: 'Tenaza 7\'\' Knipex Power Cut',
    descripcion: 'Tenaza 7\'\' Knipex Power Cut — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-113-01', stockActual: 5,
    stockMinimo: 4, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 819, codigo: 'S.C.30.01.08.082', nombre: 'Tenaza De Enfierrador 250 A 300 Mm',
    descripcion: 'Tenaza De Enfierrador 250 A 300 Mm — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-113-02', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 820, codigo: 'S.C.08.08.02.028', nombre: 'Tensores Para Prensas',
    descripcion: 'Tensores Para Prensas — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-11-05', stockActual: 2,
    stockMinimo: 2, stockMaximo: 6, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 821, codigo: 'S.C.33.02.09.019', nombre: 'Termometro Hormigon Rango -40+300°C',
    descripcion: 'Termometro Hormigon Rango -40+300°C — demanda histórica acumulada: 1 un', categoriaId: 9,
    categoriaNombre: 'Soldadura y Corte', ubicacion: 'I-12-03', stockActual: 1,
    stockMinimo: 1, stockMaximo: 3, unidadMedida: 'unidades',
    precioUnitario: 58100, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 822, codigo: 'S.C.08.08.02.029', nombre: 'Terraja Hilo Npt 1/2 A 2Pulg Con Barrote',
    descripcion: 'Terraja Hilo Npt 1/2 A 2Pulg Con Barrote — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-12-01', stockActual: 5,
    stockMinimo: 2, stockMaximo: 12, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4219']
  },
  {
    id: 823, codigo: 'C.32.02.08.020', nombre: 'Tornillo Mecanico Num 4',
    descripcion: 'Tornillo Mecanico Num 4 — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-113-03', stockActual: 6,
    stockMinimo: 5, stockMaximo: 15, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4127']
  },
  {
    id: 824, codigo: 'S.C.03.01.13.299', nombre: 'Traspaleta Manual Para 3 Ton',
    descripcion: 'Traspaleta Manual Para 3 Ton — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-113-04', stockActual: 4,
    stockMinimo: 3, stockMaximo: 9, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 825, codigo: 'C.11.01.08.019', nombre: 'Tubo Acero Cortado A 3,00 M',
    descripcion: 'Tubo Acero Cortado A 3,00 M — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-113-05', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4166']
  },
  {
    id: 826, codigo: 'S.C.06.08.08.041', nombre: 'Vertical 1.00 M Sin Espiga',
    descripcion: 'Vertical 1.00 M Sin Espiga — demanda histórica acumulada: 1 un', categoriaId: 2,
    categoriaNombre: 'Herramientas Eléctricas', ubicacion: 'B-12-02', stockActual: 60,
    stockMinimo: 50, stockMaximo: 150, unidadMedida: 'unidades',
    precioUnitario: 59200, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4132']
  },
  {
    id: 827, codigo: '2639004', nombre: 'Viga P/ Escalera 500 5 Peld H 1,00 M - Lw',
    descripcion: 'Viga P/ Escalera 500 5 Peld H 1,00 M - Lw — demanda histórica acumulada: 1 un', categoriaId: 1,
    categoriaNombre: 'Herramientas Manuales', ubicacion: 'A-114-01', stockActual: 10,
    stockMinimo: 8, stockMaximo: 24, unidadMedida: 'unidades',
    precioUnitario: 20400, estado: 'activo',
    fechaIngreso: new Date('2024-04-15'), ultimaActualizacion: new Date('2026-04-10'),
    proyectos: ['P-4257']
  },
];

export const MOCK_PRODUCTOS: Producto[] = [..._PROD_CHUNK_1, ..._PROD_CHUNK_2, ..._PROD_CHUNK_3, ..._PROD_CHUNK_4, ..._PROD_CHUNK_5];

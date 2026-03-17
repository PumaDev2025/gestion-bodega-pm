import { Categoria } from '../../domain/models';

export const MOCK_CATEGORIAS: Categoria[] = [
  {
    id: 1, nombre: 'Materiales Básicos',
    descripcion: 'Cemento, fierro, arena, gravilla, madera y materiales estructurales',
    color: '#e74c3c', icono: '🧱', cantidadProductos: 4
  },
  {
    id: 2, nombre: 'EPP',
    descripcion: 'Equipos de protección personal: cascos, guantes, zapatos, lentes, arnés',
    color: '#3498db', icono: '🦺', cantidadProductos: 3
  },
  {
    id: 3, nombre: 'Herramientas',
    descripcion: 'Herramientas manuales y eléctricas: taladros, sierras, llaves, etc.',
    color: '#2ecc71', icono: '🔧', cantidadProductos: 1
  },
  {
    id: 4, nombre: 'Fijaciones',
    descripcion: 'Clavos, tornillos, pernos, anclas y elementos de fijación',
    color: '#f39c12', icono: '🔩', cantidadProductos: 1
  },
  {
    id: 5, nombre: 'Instalaciones',
    descripcion: 'Materiales eléctricos, sanitarios, cañerías y tubos',
    color: '#9b59b6', icono: '🔌', cantidadProductos: 2
  },
  {
    id: 6, nombre: 'Seguridad',
    descripcion: 'Extintores, señalética, conos, cintas de seguridad',
    color: '#e67e22', icono: '🧯', cantidadProductos: 1
  }
];

import { Categoria } from '../../domain/models';

// Categorías generadas desde Requerimientos Tendencias SEM14 - 06 Abril 2026
export const MOCK_CATEGORIAS: Categoria[] = [
  {
    id: 1, nombre: 'Herramientas Manuales',
    descripcion: 'Alicates, llaves, martillos, niveles, huinchas, tizadores y herramientas de mano',
    color: '#27ae60', icono: '🔧', cantidadProductos: 566
  },
  {
    id: 2, nombre: 'Herramientas Eléctricas',
    descripcion: 'Esmeriles angulares, taladros percutores, sierras circulares y rectificadores',
    color: '#e74c3c', icono: '⚡', cantidadProductos: 57
  },
  {
    id: 3, nombre: 'Equipo de Medición',
    descripcion: 'Detectores de voltaje, medidores de gas, amperímetros y comprobadores',
    color: '#3498db', icono: '📐', cantidadProductos: 24
  },
  {
    id: 4, nombre: 'Andamios y Estructuras',
    descripcion: 'Verticales, horizontales, plataformas, rodapiés y accesorios de andamio Allround',
    color: '#8e44ad', icono: '🏗️', cantidadProductos: 42
  },
  {
    id: 5, nombre: 'Mobiliario de Obra',
    descripcion: 'Sillas, escritorios, cajoneras, lockers metálicos y muebles de faena',
    color: '#f39c12', icono: '🪑', cantidadProductos: 20
  },
  {
    id: 6, nombre: 'Material Eléctrico',
    descripcion: 'Extensiones eléctricas, tableros, ferrules aislados y marcadores de cable',
    color: '#e67e22', icono: '🔌', cantidadProductos: 13
  },
  {
    id: 7, nombre: 'EPP',
    descripcion: 'Cascos, guantes, zapatos de seguridad, lentes, arnés y ropa de trabajo',
    color: '#1abc9c', icono: '🦺', cantidadProductos: 0
  },
  {
    id: 8, nombre: 'Equipos Electrónicos',
    descripcion: 'Monitores, impresoras, radios portátiles y equipos electrónicos de obra',
    color: '#2c3e50', icono: '💻', cantidadProductos: 13
  },
  {
    id: 9, nombre: 'Soldadura y Corte',
    descripcion: 'Soldadoras, electrodos, alimentadores MIG-MAG y hornos para soldadura',
    color: '#c0392b', icono: '🔥', cantidadProductos: 58
  },
  {
    id: 10, nombre: 'Medición y Topografía',
    descripcion: 'Niveles topográficos, estaciones totales, prismas y equipos de nivelación',
    color: '#16a085', icono: '📏', cantidadProductos: 34
  },
];

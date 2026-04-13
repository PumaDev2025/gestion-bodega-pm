import { Injectable, signal, computed } from '@angular/core';
import type { Movimiento, Producto } from '../domain/models';

export interface Proyecto {
  codigo: string;
  nombre: string;
  color: string;
}

/** Todos los proyectos que suministra Bodega P-1010 */
export const PROYECTOS: Proyecto[] = [
  { codigo: 'TODOS',   nombre: 'Todos los proyectos', color: '#6c757d' },
  { codigo: 'P-4127',  nombre: 'P-4127 GASMAR',       color: '#e74c3c' },
  { codigo: 'P-4132',  nombre: 'P-4132 IDE',           color: '#3498db' },
  { codigo: 'P-4166',  nombre: 'P-4166 ESMAX',         color: '#2ecc71' },
  { codigo: 'P-4219',  nombre: 'P-4219 IDE SENTINA',   color: '#9b59b6' },
  { codigo: 'P-4231',  nombre: 'P-4231 CMDIC',         color: '#f39c12' },
  { codigo: 'P-4254',  nombre: 'P-4254 DOOSAN',        color: '#1abc9c' },
  { codigo: 'P-4257',  nombre: 'P-4257 CENTINELA',     color: '#e67e22' },
  { codigo: 'P-4267',  nombre: 'P-4267 ANTUCOYA',      color: '#c0392b' },
  { codigo: 'P-4291',  nombre: 'P-4291 ANTUCOYA PISC', color: '#16a085' },
  { codigo: 'P-4302',  nombre: 'P-4302 ELABRA',        color: '#2980b9' },
  { codigo: 'P-4323',  nombre: 'P-4323 CHILEPANEL',    color: '#8e44ad' },
];

@Injectable({ providedIn: 'root' })
export class ProyectoStateService {
  readonly proyectos = PROYECTOS;

  /** Código del proyecto actualmente seleccionado ('TODOS' = sin filtro) */
  readonly seleccionado = signal<string>('TODOS');

  readonly proyectoActual = computed(() =>
    this.proyectos.find(p => p.codigo === this.seleccionado()) ?? this.proyectos[0]
  );

  readonly esTodos = computed(() => this.seleccionado() === 'TODOS');

  seleccionar(codigo: string) {
    this.seleccionado.set(codigo);
  }

  /** Siguiente proyecto en la lista (para navegación con flechas) */
  siguiente() {
    const idx = this.proyectos.findIndex(p => p.codigo === this.seleccionado());
    const next = (idx + 1) % this.proyectos.length;
    this.seleccionado.set(this.proyectos[next].codigo);
  }

  /** Anterior en la lista */
  anterior() {
    const idx = this.proyectos.findIndex(p => p.codigo === this.seleccionado());
    const prev = (idx - 1 + this.proyectos.length) % this.proyectos.length;
    this.seleccionado.set(this.proyectos[prev].codigo);
  }

  /**
   * Dado un array de movimientos, retorna el Set de productoIds que pertenecen
   * al proyecto seleccionado. Retorna null si está en modo "TODOS".
   * Usado para filtrar alertas (que no tienen campo proyectos propio).
   */
  getProductIdsParaProyecto(movimientos: Movimiento[]): Set<number> | null {
    const proyecto = this.seleccionado();
    if (proyecto === 'TODOS') return null;
    return new Set(
      movimientos
        .filter(m => m.proyecto?.startsWith(proyecto) || m.motivo?.includes(proyecto))
        .map(m => m.productoId)
    );
  }

  /**
   * Filtra productos usando su campo proyectos[] (dato directo de la hoja Codigos).
   * Mucho más fiable que inferirlo desde movimientos.
   */
  filtrarProductosPorProyecto(productos: Producto[]): Producto[] {
    const proyecto = this.seleccionado();
    if (proyecto === 'TODOS') return productos;
    return productos.filter(p => p.proyectos?.includes(proyecto));
  }

  /**
   * Filtra un array genérico con campo id usando movimientos (para alertas, etc.).
   * Prefer filtrarProductosPorProyecto para Producto[].
   */
  filtrarPorProyecto<T extends { id: number }>(items: T[], movimientos: Movimiento[]): T[] {
    const ids = this.getProductIdsParaProyecto(movimientos);
    if (!ids) return items;
    return items.filter(item => ids.has(item.id));
  }
}

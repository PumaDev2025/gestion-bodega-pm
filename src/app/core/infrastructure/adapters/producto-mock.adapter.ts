import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { Producto } from '../../domain/models';
import { ProductoRepository } from '../../domain/ports';
import { MOCK_PRODUCTOS } from '../mock/productos.mock';

@Injectable()
export class ProductoMockAdapter implements ProductoRepository {
  private productos: Producto[] = [...MOCK_PRODUCTOS];
  private nextId = this.productos.length + 1;

  obtenerTodos(): Observable<Producto[]> {
    return of([...this.productos]).pipe(delay(300));
  }

  obtenerPorId(id: number): Observable<Producto | undefined> {
    return of(this.productos.find(p => p.id === id)).pipe(delay(150));
  }

  crear(producto: Omit<Producto, 'id'>): Observable<Producto> {
    const nuevo: Producto = {
      ...producto,
      id: this.nextId++,
      fechaIngreso: new Date(),
      ultimaActualizacion: new Date()
    } as Producto;
    this.productos = [nuevo, ...this.productos];
    return of(nuevo).pipe(delay(300));
  }

  actualizar(producto: Producto): Observable<Producto> {
    const actualizado = { ...producto, ultimaActualizacion: new Date() };
    this.productos = this.productos.map(p => p.id === producto.id ? actualizado : p);
    return of(actualizado).pipe(delay(300));
  }

  eliminar(id: number): Observable<boolean> {
    const existia = this.productos.some(p => p.id === id);
    this.productos = this.productos.filter(p => p.id !== id);
    return of(existia).pipe(delay(300));
  }

  buscar(termino: string): Observable<Producto[]> {
    const lower = termino.toLowerCase();
    return of(
      this.productos.filter(p =>
        p.nombre.toLowerCase().includes(lower) ||
        p.codigo.toLowerCase().includes(lower) ||
        p.ubicacion.toLowerCase().includes(lower) ||
        (p.categoriaNombre?.toLowerCase().includes(lower) ?? false)
      )
    ).pipe(delay(200));
  }
}

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models';

export interface ProductoRepository {
  obtenerTodos(): Observable<Producto[]>;
  obtenerPorId(id: number): Observable<Producto | undefined>;
  crear(producto: Omit<Producto, 'id'>): Observable<Producto>;
  actualizar(producto: Producto): Observable<Producto>;
  eliminar(id: number): Observable<boolean>;
  buscar(termino: string): Observable<Producto[]>;
}

export const PRODUCTO_REPOSITORY = new InjectionToken<ProductoRepository>('ProductoRepository');

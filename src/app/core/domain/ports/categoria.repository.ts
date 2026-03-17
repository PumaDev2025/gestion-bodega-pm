import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models';

export interface CategoriaRepository {
  obtenerTodas(): Observable<Categoria[]>;
  obtenerPorId(id: number): Observable<Categoria | undefined>;
  crear(categoria: Omit<Categoria, 'id'>): Observable<Categoria>;
  actualizar(categoria: Categoria): Observable<Categoria>;
  eliminar(id: number): Observable<boolean>;
}

export const CATEGORIA_REPOSITORY = new InjectionToken<CategoriaRepository>('CategoriaRepository');

import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Categoria } from '../../domain/models';
import { CategoriaRepository } from '../../domain/ports';
import { MOCK_CATEGORIAS } from '../mock/categorias.mock';

@Injectable()
export class CategoriaMockAdapter implements CategoriaRepository {
  private categorias: Categoria[] = [...MOCK_CATEGORIAS];
  private nextId = this.categorias.length + 1;

  obtenerTodas(): Observable<Categoria[]> {
    return of([...this.categorias]).pipe(delay(300));
  }

  obtenerPorId(id: number): Observable<Categoria | undefined> {
    return of(this.categorias.find(c => c.id === id)).pipe(delay(150));
  }

  crear(categoria: Omit<Categoria, 'id'>): Observable<Categoria> {
    const nueva: Categoria = { ...categoria, id: this.nextId++ } as Categoria;
    this.categorias = [nueva, ...this.categorias];
    return of(nueva).pipe(delay(300));
  }

  actualizar(categoria: Categoria): Observable<Categoria> {
    this.categorias = this.categorias.map(c => c.id === categoria.id ? { ...categoria } : c);
    return of(categoria).pipe(delay(300));
  }

  eliminar(id: number): Observable<boolean> {
    const existia = this.categorias.some(c => c.id === id);
    this.categorias = this.categorias.filter(c => c.id !== id);
    return of(existia).pipe(delay(300));
  }
}

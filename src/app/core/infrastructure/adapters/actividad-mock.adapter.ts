import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { RegistroActividad, ModuloActividad } from '../../domain/models/actividad.model';
import { ActividadRepository } from '../../domain/ports/actividad.repository';

@Injectable()
export class ActividadMockAdapter implements ActividadRepository {
  private registros: RegistroActividad[] = [];
  private nextId = 1;

  obtenerTodos(): Observable<RegistroActividad[]> {
    return of([...this.registros].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    )).pipe(delay(200));
  }

  obtenerPorModulo(modulo: ModuloActividad): Observable<RegistroActividad[]> {
    return of(
      this.registros
        .filter(r => r.modulo === modulo)
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    ).pipe(delay(200));
  }

  registrar(entry: Omit<RegistroActividad, 'id'>): Observable<RegistroActividad> {
    const nuevo: RegistroActividad = { ...entry, id: this.nextId++ };
    this.registros = [nuevo, ...this.registros];
    return of(nuevo).pipe(delay(100));
  }
}

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroActividad, ModuloActividad } from '../models/actividad.model';

export interface ActividadRepository {
  obtenerTodos(): Observable<RegistroActividad[]>;
  obtenerPorModulo(modulo: ModuloActividad): Observable<RegistroActividad[]>;
  registrar(entry: Omit<RegistroActividad, 'id'>): Observable<RegistroActividad>;
}

export const ACTIVIDAD_REPOSITORY = new InjectionToken<ActividadRepository>('ActividadRepository');

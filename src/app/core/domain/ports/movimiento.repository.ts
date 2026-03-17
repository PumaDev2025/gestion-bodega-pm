import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento, TipoMovimiento } from '../models';

export interface MovimientoRepository {
  obtenerTodos(): Observable<Movimiento[]>;
  obtenerPorProducto(productoId: number): Observable<Movimiento[]>;
  obtenerPorTipo(tipo: TipoMovimiento): Observable<Movimiento[]>;
  obtenerPorRangoFecha(desde: Date, hasta: Date): Observable<Movimiento[]>;
  crear(movimiento: Omit<Movimiento, 'id'>): Observable<Movimiento>;
}

export const MOVIMIENTO_REPOSITORY = new InjectionToken<MovimientoRepository>('MovimientoRepository');

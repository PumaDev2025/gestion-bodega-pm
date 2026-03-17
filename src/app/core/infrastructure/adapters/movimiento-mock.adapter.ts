import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Movimiento, TipoMovimiento } from '../../domain/models';
import { MovimientoRepository } from '../../domain/ports';
import { MOCK_MOVIMIENTOS } from '../mock/movimientos.mock';

@Injectable()
export class MovimientoMockAdapter implements MovimientoRepository {
  private movimientos: Movimiento[] = [...MOCK_MOVIMIENTOS];
  private nextId = this.movimientos.length + 1;

  obtenerTodos(): Observable<Movimiento[]> {
    return of([...this.movimientos].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    )).pipe(delay(300));
  }

  obtenerPorProducto(productoId: number): Observable<Movimiento[]> {
    return of(this.movimientos.filter(m => m.productoId === productoId)).pipe(delay(200));
  }

  obtenerPorTipo(tipo: TipoMovimiento): Observable<Movimiento[]> {
    return of(this.movimientos.filter(m => m.tipo === tipo)).pipe(delay(200));
  }

  obtenerPorRangoFecha(desde: Date, hasta: Date): Observable<Movimiento[]> {
    return of(this.movimientos.filter(m => {
      const fecha = new Date(m.fecha);
      return fecha >= desde && fecha <= hasta;
    })).pipe(delay(200));
  }

  crear(movimiento: Omit<Movimiento, 'id'>): Observable<Movimiento> {
    const nuevo: Movimiento = { ...movimiento, id: this.nextId++ } as Movimiento;
    this.movimientos = [nuevo, ...this.movimientos];
    return of(nuevo).pipe(delay(300));
  }
}

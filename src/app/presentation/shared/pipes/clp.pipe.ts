import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'clp', standalone: true })
export class ClpPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '$0';
    return '$' + value.toLocaleString('es-CL');
  }
}

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// ─── Hexagonal: Ports (contratos) ─────────────────
import { PRODUCTO_REPOSITORY } from './core/domain/ports';
import { CATEGORIA_REPOSITORY } from './core/domain/ports';
import { MOVIMIENTO_REPOSITORY } from './core/domain/ports';
import { ACTIVIDAD_REPOSITORY } from './core/domain/ports';
import { AUTH_REPOSITORY } from './core/domain/ports/auth.repository';

// ─── Hexagonal: Adapters (implementaciones mock) ──
// Cuando tengas acceso a la BD, solo cambia estos imports
// por HttpProductoAdapter, HttpCategoriaAdapter, etc.
import { ProductoMockAdapter } from './core/infrastructure/adapters';
import { CategoriaMockAdapter } from './core/infrastructure/adapters';
import { MovimientoMockAdapter } from './core/infrastructure/adapters';
import { ActividadMockAdapter } from './core/infrastructure/adapters';
import { AuthMockAdapter } from './core/infrastructure/adapters/auth-mock.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // ─── Inyección hexagonal: Port → Adapter ────────
    // Para cambiar a datos reales, reemplaza las clases adapter:
    //   { provide: PRODUCTO_REPOSITORY, useClass: ProductoHttpAdapter }
    { provide: PRODUCTO_REPOSITORY, useClass: ProductoMockAdapter },
    { provide: CATEGORIA_REPOSITORY, useClass: CategoriaMockAdapter },
    { provide: MOVIMIENTO_REPOSITORY, useClass: MovimientoMockAdapter },
    { provide: ACTIVIDAD_REPOSITORY, useClass: ActividadMockAdapter },
    { provide: AUTH_REPOSITORY, useClass: AuthMockAdapter },
  ]
};

import { Routes } from '@angular/router';
import { LayoutComponent } from './presentation/layout/layout.component';
import { authGuard, adminGuard } from './presentation/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/pages/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./presentation/pages/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      },
      {
        path: 'inventario',
        loadComponent: () => import('./presentation/pages/inventario/inventario.component')
          .then(m => m.InventarioComponent)
      },
      {
        path: 'movimientos',
        loadComponent: () => import('./presentation/pages/movimientos/movimientos.component')
          .then(m => m.MovimientosComponent)
      },
      {
        path: 'categorias',
        loadComponent: () => import('./presentation/pages/categorias/categorias.component')
          .then(m => m.CategoriasComponent)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./presentation/pages/usuarios/usuarios.component')
          .then(m => m.UsuariosComponent),
        canActivate: [adminGuard]
      },
      {
        path: 'actividad',
        loadComponent: () => import('./presentation/pages/actividad/actividad.component')
          .then(m => m.ActividadComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

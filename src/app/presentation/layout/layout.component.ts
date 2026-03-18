import { Component, signal, computed } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthFacadeService } from '../../core/application/auth-facade.service';
import { BodegaFacadeService } from '../../core/application/bodega-facade.service';
import type { AlertaStock } from '../../core/domain/models';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarCollapsed = signal(false);
  notifOpen = signal(false);
  alertas = signal<AlertaStock[]>([]);
  today = new Date().toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  allNavItems: NavItem[] = [
    { icon: '📊', label: 'Dashboard', route: '/dashboard' },
    { icon: '📦', label: 'Inventario', route: '/inventario' },
    { icon: '🔄', label: 'Movimientos', route: '/movimientos' },
    { icon: '🏷️', label: 'Categorías', route: '/categorias' },
    { icon: '📋', label: 'Actividad', route: '/actividad' },
    { icon: '👥', label: 'Usuarios', route: '/usuarios', adminOnly: true },
  ];

  navItems = computed(() => {
    const isAdmin = this.authFacade.isAdmin();
    return this.allNavItems.filter(item => !item.adminOnly || isAdmin);
  });

  currentUser = computed(() => this.authFacade.getUsuarioActual());

  constructor(
    private authFacade: AuthFacadeService,
    private bodegaFacade: BodegaFacadeService,
    private router: Router
  ) {
    this.bodegaFacade.alertasStock$.subscribe(a => this.alertas.set(a));
  }

  toggleSidebar() {
    this.sidebarCollapsed.update(v => !v);
  }

  toggleNotif() {
    this.notifOpen.update(v => !v);
  }

  closeNotif() {
    this.notifOpen.set(false);
  }

  getAlertaIcon(tipo: string): string {
    return tipo === 'critico' ? '🔴' : tipo === 'bajo' ? '🟡' : '🔵';
  }

  getAlertaLabel(tipo: string): string {
    return tipo === 'critico' ? 'CRÍTICO' : tipo === 'bajo' ? 'BAJO' : 'SOBRESTOCK';
  }

  logout() {
    this.authFacade.logout();
    this.router.navigate(['/login']);
  }
}

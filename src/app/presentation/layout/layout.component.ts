import { Component, signal, computed } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthFacadeService } from '../../core/application/auth-facade.service';
import { BodegaFacadeService } from '../../core/application/bodega-facade.service';
import { ProyectoStateService, PROYECTOS } from '../../core/application/proyecto-state.service';
import type { AlertaStock, Movimiento, Producto } from '../../core/domain/models';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarCollapsed = signal(false);
  notifOpen = signal(false);
  allAlertas = signal<AlertaStock[]>([]);
  allMovimientos = signal<Movimiento[]>([]);
  today = new Date().toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  /** Alertas filtradas por proyecto seleccionado */
  alertas = computed(() => {
    const proyecto = this.proyectoState.seleccionado();
    if (proyecto === 'TODOS') return this.allAlertas();
    const ids = this.proyectoState.getProductIdsParaProyecto(this.allMovimientos());
    if (!ids) return this.allAlertas();
    return this.allAlertas().filter(a => ids.has(a.productoId));
  });

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

  readonly proyectos = PROYECTOS;
  readonly proyectoState: ProyectoStateService;

  constructor(
    private authFacade: AuthFacadeService,
    private bodegaFacade: BodegaFacadeService,
    private router: Router,
    proyectoState: ProyectoStateService
  ) {
    this.proyectoState = proyectoState;
    this.bodegaFacade.alertasStock$.subscribe(a => this.allAlertas.set(a));
    this.bodegaFacade.getMovimientos().subscribe(m => this.allMovimientos.set(m));
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

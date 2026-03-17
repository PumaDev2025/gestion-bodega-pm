import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthFacadeService } from '../../../core/application/auth-facade.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  error = signal('');
  loading = signal(false);

  constructor(
    private authFacade: AuthFacadeService,
    private router: Router
  ) {
    // Si ya está logueado, redirigir
    if (this.authFacade.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(): void {
    this.error.set('');
    this.loading.set(true);

    // Simular delay de red
    setTimeout(() => {
      const usuario = this.authFacade.login(this.email, this.password);
      this.loading.set(false);

      if (usuario) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error.set('Correo o contraseña incorrectos. Verifique sus credenciales.');
      }
    }, 600);
  }
}

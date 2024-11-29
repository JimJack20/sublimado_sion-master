import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sublimado_sion';

  username: string | null = '';

  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();  // Llama al servicio de logout
    this.router.navigate(['/login']);  // Redirige a la página de login
  }
}

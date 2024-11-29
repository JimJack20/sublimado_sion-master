import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  message = '';  // Mensaje de error o éxito
  loading = false;  // Indicador de carga

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username && this.password && this.email) {
      this.loading = true; // Muestra una carga mientras se hace la solicitud
      const user = {
        username: this.username,
        password: this.password,
        email: this.email,
      };

      this.authService.register(user).subscribe({
        next: (res) => {
          this.message = "Registro exitoso. Puedes iniciar sesión ahora.";
          this.loading = false;
        },
        error: (err) => {
          this.message = err.error; 
          this.loading = false;
        },
      });
    } else {
      this.message = 'Por favor completa todos los campos';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';
  isSuccess = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user = {
      username: this.username,
      password: this.password,
    };
    
    this.authService.login(user).subscribe({
      next: (res) => {
        // Suponiendo que la respuesta tenga la estructura { message, success }
        if (res.success) {
          this.message = res.message;
          this.router.navigate(['/productos']);
          // Puedes redirigir al usuario o realizar alguna acción adicional aquí
        } else {
          this.message = res.message;
        }
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
        this.message = 'Error en la solicitud';
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']); // Redirige a la página de registro
  }
  
}

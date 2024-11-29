import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user'; // Cambia el puerto si es necesario

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((res: any) => {
        if (res && res.success) {
          localStorage.setItem('username', res.username);
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  logout(): void {
    // Elimina el nombre de usuario y el token de localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Verifica si hay un token en el localStorage
  }
}

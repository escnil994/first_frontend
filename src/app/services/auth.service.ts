import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from './api.service';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = API.url;



  }


  register(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.url}register`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.accessToken, res.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.url}auth/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {

            // guardar token
            this.saveToken(res.accessToken, res.expiresIn);
          }
        })
      );
  }


  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }



  private getToken1(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    swal('Adios', 'Para tener privilegios de administrador inicia sesión nuevamente', 'success');
    this.router.navigate(['/blog']);
  }



  loggedIn(): boolean {
    
    const url = this.url + 'auth/renew';

    const headers = new HttpHeaders().set('x-token', localStorage.getItem('ACCESS_TOKEN') || '');

    this.http.get(`${url}`, { headers });
    
return true;
  }
}

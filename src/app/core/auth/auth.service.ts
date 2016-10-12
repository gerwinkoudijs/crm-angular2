import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private http: Http) {

  }

  login(email: string, password: string): Observable<boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'http://localhost:3001/login',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.isAuthenticated = true;
        }

        return res.success;
      }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated = false;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

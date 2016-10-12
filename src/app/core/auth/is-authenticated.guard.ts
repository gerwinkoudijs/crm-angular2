import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.isUserAuthenticated()) {
      return true;
    }

    // Redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'login',
  providers: [],
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export class Login {

  constructor(private auth: AuthService, private http: Http, private router: Router) {
  }

  login(email: string, password: string) {
    this.auth.login(email, password).subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      } else {
        alert('error');
        alert(result);
      }
    }, err => {
      console.log(err);
    })
  }
}
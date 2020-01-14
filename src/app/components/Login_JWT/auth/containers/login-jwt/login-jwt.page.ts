import { Users } from './../../../../Session_Login/users';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login-jwt',
  templateUrl: './login-jwt.page.html',
  styleUrls: ['./login-jwt.page.scss'],
})
export class LoginJWTPage implements OnInit {

constructor(private authService: AuthService, private router: Router) { }
  loginForm: FormGroup;
  user: Users[]
  private username;
  private password;
  ngOnInit() {

  }

  login() {
    this.authService.login(
      {
        username: this.username.value,
        password: this.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/secret-random-number']);
      }
    });
  }

  registerModal(){
    
  }

}

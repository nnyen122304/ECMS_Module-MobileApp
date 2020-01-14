import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.page.html',
  styleUrls: ['./a.page.scss'],
})
export class APage implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  loginForm: FormGroup;
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() { return this.loginForm.controls; }
 
  login() {
    this.authService.login(
      {
        username: this.f.username.value,
        password: this.f.password.value
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




 




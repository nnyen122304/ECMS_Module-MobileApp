import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomNumberService } from '../../services/random-number.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.page.html',
  styleUrls: ['./random-number.page.scss'],
}) 
export class RandomNumberPage implements OnInit {
  randomNumber: Observable<number>;
  constructor(private random: RandomNumberService, private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    this.randomNumber = this.random.getRandomNumber();
  }

  logout() {
  this.authService.logout()
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      }
    });
  }

}

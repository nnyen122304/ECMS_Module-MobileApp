import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {}
  
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = this.authService.isLoggedIn;
      //kiểm tra người dùng tồn tại = đã đăng nhập
      if (currentUser) {
          return true;
      }
      // chưa đăng nhập chuyển vào trang đăng nhập
      this.router.navigate(['/dang-nhap']);
      return false;
    // return this.authService.isAuthenticated();
    
  }

  
}
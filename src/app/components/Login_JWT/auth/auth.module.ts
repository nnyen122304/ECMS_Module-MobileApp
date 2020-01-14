import { LoginJWTPage } from './containers/login-jwt/login-jwt.page';
import { AppRoutingModule } from './../../../app-routing.module';
import { AuthGuard } from './guards/auth.guards';
import { TokenInterceptor } from './token.interceptor';
import { RandomGuard } from './guards/random.guards';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes} from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


providers: [
  AuthGuard,
  AuthService,
  RandomGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [LoginJWTPage]
})
export class  AuthModule {}

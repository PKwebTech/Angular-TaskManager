import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtAuthorizedInterceptorService } from './jwt-authorized-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorService,
    multi:true
   },
   {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtAuthorizedInterceptorService,
    multi:true
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

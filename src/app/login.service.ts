import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = 'https://taskmanager-htn9.onrender.com/';
  private httpClient!: HttpClient;
  constructor(
    private httpBackend: HttpBackend,
    private jwtHelperService: JwtHelperService
  ) {}

  public LogOut() {
    sessionStorage.removeItem('currentUser');
    this.currentUserName = null;
  }
  public isAuthenticate(): boolean {
    var token = sessionStorage.getItem('currentUser')
      ? JSON.parse(sessionStorage.getItem('currentUser') as string).token
      : null;
    if (this.jwtHelperService.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }

  currentUserName = null;
  public Login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient
      .post<any>(this.BASE_URL + 'authenticate', loginViewModel, {
        responseType: 'json',
        observe: 'response',
      })
      .pipe(
        map((response) => {
          if (response) {
            this.currentUserName = response.body.userName;
            console.log(this.currentUserName);

            sessionStorage['currentUser'] = JSON.stringify(response.body);
            sessionStorage['XSRFRequestToekn'] =
              response.headers.get('XSRF-RQUEST-TOKEN');
          }
          return response.body;
        })
      );
  }
}

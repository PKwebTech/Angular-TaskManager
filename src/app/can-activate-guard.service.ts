import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {

  constructor(
    private loginService:LoginService,
    private jwtHelperService:JwtHelperService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
    var token=sessionStorage.getItem('currentUser')?JSON.parse(sessionStorage.getItem('currentUser') as string).token:null;
    if(this.loginService.isAuthenticate() && this.jwtHelperService.decodeToken(token).role==route.data['expectedRole']){
    return true;
   }else{
    this.router.navigate(["login"]);
    return false;
   }
  }
}

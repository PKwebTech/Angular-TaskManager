import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL="https://taskmanager-htn9.onrender.com/"
  private httpClient!:HttpClient;
  constructor(private httpBackend:HttpBackend) { }
  currentUserName=null;
  public Login(loginViewModel:LoginViewModel):Observable<any>{
    this.httpClient=new HttpClient(this.httpBackend)
    return this.httpClient.post<any>(this.BASE_URL+'authenticate',loginViewModel,{responseType:"json"})
    .pipe(map(user=>{
      if(user){
        this.currentUserName=user.userName;
        console.log(this.currentUserName);
        
        sessionStorage['currentUser']=JSON.stringify(user);        
      }
      return user;
    }));
  }
  public LogOut(){
    sessionStorage.removeItem("currentUser");
    this.currentUserName=null;
  }
}

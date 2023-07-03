import { Component } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginViewModel:LoginViewModel=new LoginViewModel();
  loginError:string="";
  constructor(private loginService:LoginService,private Router:Router){}
 
  onLoginCLick(){
    this.loginService.Login(this.loginViewModel).subscribe((res)=>{
      this.Router.navigateByUrl("/dashboard");
    })
  }
}

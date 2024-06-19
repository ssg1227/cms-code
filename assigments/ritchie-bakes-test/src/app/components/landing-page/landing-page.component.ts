import { Component } from '@angular/core';
import  { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private authService:AuthService) {

  }
  
  public get UserLoggedIn():boolean {
    return this.authService.NeedLogin === false? true:  this.authService.LoggedIn ;
  }
  public get SmallScreen():string {
    return  JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  }
}

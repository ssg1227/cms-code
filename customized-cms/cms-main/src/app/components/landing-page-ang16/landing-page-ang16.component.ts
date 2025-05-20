import { Component } from '@angular/core';
import  { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-landing-page-ang16',
  templateUrl: './landing-page-ang16.component.html',
  styleUrls: ['./landing-page-ang16.component.css']
})
export class LandingPageComponentAng16 {
  constructor(private authService:AuthService) {

  }
  public get UserLoggedIn():boolean {
    return  this.authService.LoggedIn ;
  }
  public get SmallScreen():string {
    return  'false' ; //  JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  }
}

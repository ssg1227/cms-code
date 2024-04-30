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
    return  this.authService.LoggedIn ;
  }
}

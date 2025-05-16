import { Component } from '@angular/core';
import  { AuthService } from 'src/app/services/auth.service'

import { staticText } from '@settings-and-models/static-text-other-constants';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

 directLatest =  this.IsMobileScreen === 'true'? false: true ;
 appTitle= staticText.appTitle;
 appAuthor= staticText.appAuthor;
 appContent = staticText.introContentList[0];
 userId=""
  constructor(private authService:AuthService) {

  }
  get IsMobileScreen(): string {
  return JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  
 }
  public get UserLoggedIn():boolean {
    return   this.authService.LoggedIn ;
  }
  public get SmallScreen():string {
    return  'false' ; //  JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  }

 cmsLogin(){
  this.authService.login(this.userId, this.directLatest);
 }
 cmsLogout(){
    this.authService.logout() ;
   }
}

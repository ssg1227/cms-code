import { Component, Input, OnInit  } from '@angular/core';
import  { AuthService } from 'src/app/services/auth.service'
import { staticText } from '@settings-and-models/static-text-other-constants';

import { Router } from '@angular/router';
/*eslint-disable */
@Component({
  selector: 'app-login-landing',
  templateUrl: './login-landing.component.html',
  styleUrls: ['./login-landing.component.css']
})
export class LoginLandingComponent {
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
 cmsLogin(){
  this.authService.login(this.userId, this.directLatest);
 }
}

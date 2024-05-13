import { Component, Input, OnInit  } from '@angular/core';
import  { AuthService } from 'src/app/services/auth.service'
import { staticText } from 'src/assets/common-config/static-text-other-constants';

import { Router } from '@angular/router';
/*eslint-disable */
@Component({
  selector: 'app-login-landing',
  templateUrl: './login-landing.component.html',
  styleUrls: ['./login-landing.component.css']
})
export class LoginLandingComponent {
 appTitle= staticText.appTitle;
 appAuthor= staticText.appAuthor;
 appContent = staticText.introContentList[0];
 userId=""
 constructor(private authService:AuthService) {

 }
 cmsLogin(){
  this.authService.login(this.userId);
 }
}

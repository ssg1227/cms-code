import { Component } from '@angular/core';
import { staticText } from 'src/assets/common-config/static-text';
import  { AuthService } from 'src/app/services/auth.service'


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  appTitle= staticText.appTitle;

  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  constructor(private authService:AuthService) {

  }
  cmsLogout(){
    this.authService.logout() ;
   }
}

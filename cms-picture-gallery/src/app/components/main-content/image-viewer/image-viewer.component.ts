import { Component } from '@angular/core';
import { staticText } from 'src/assets/common-config/static-text';
import  { AuthService } from 'src/app/services/auth.service';
import { CoreContentService } from 'src/app/services/core-content.service';
import { TreeNode } from 'src/assets/content-tree/tree-nodes' ;
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  treeNode: TreeNode[] =[];
  currentCellSelected = 0 ;
  constructor(private authService:AuthService, private coreContentService: CoreContentService) {
  
  }
  ngOnInit() {
    this.treeNode = this.coreContentService.setCurrentMenu();
  }
  cmsLogout(){
    this.authService.logout() ;
   }
   compareSelected(a:any, b:any) {

   }
}

import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { staticText } from 'src/assets/common-config/static-text';
import  { AuthService } from 'src/app/services/auth.service';
import { CoreContentService } from 'src/app/services/core-content.service';
import { TreeNode, TreeNodeCollection } from 'src/assets/content-tree/tree-nodes' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  breadCrumbs:BreadCrumb[] = [ 
    { 
      link:'/view',
      params:'top-level',
      label:'Home',
      levelIndex: 0},
    
  ];
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  treeNodeCollection: TreeNodeCollection = this.coreContentService.setCurrentMenu();
  currentCellSelected = 0 ;
  constructor(private router:Router, private authService:AuthService, private coreContentService: CoreContentService) {
  
  }
  ngOnInit() {
   }
  cmsLogout(){
    this.authService.logout() ;
   }
   compareSelected(a:any, b:any) {
      if(isNaN(a)) {
        localStorage.setItem('current-menu',a);
        this.router.navigate([`/view`, a]).then( (e) => {
          this.treeNodeCollection = this.coreContentService.setCurrentMenu();
          this.breadCrumbs = this.coreContentService.BreadCrumbs ;
         //  this.breadCrumbs = ``;// this.coreContentService.displayBreadCrumbs();
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
   }
}

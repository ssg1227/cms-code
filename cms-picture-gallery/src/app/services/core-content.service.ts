import { Injectable } from '@angular/core';
import { TreeNode, TreeNodeCollection, TopLevelCollection, ShreeGaneshCollection } from 'src/assets/content-tree/tree-nodes' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';
import { parseTemplate } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {

  constructor() { }
  private breadCrumbs:BreadCrumb[] =[] ;
  
  get BreadCrumbs():BreadCrumb[] {
    return this.breadCrumbs;
  } 
  setCurrentMenu():TreeNodeCollection  {
    let retElement:TreeNodeCollection = TopLevelCollection;
    let currentMenu =  localStorage.getItem('current-menu') ;
    let parentKey = null;
    switch(currentMenu) {
      case 'top-level': 
      retElement =  TopLevelCollection ;
        break ;
      case 'religious-shree-ganesh':
        retElement =  ShreeGaneshCollection ;
      
          break ;
    }
    this.breadCrumbs  = retElement.breadCrumb;
    return retElement ;
  }
 
}

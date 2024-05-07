import { Injectable } from '@angular/core';
import { TreeNodeElement,MenuTreeElements } from 'src/assets/content-tree/tree-nodes' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {

  constructor() { }
  private breadCrumbs?:BreadCrumb[] =[] ;
  
  get BreadCrumbs():BreadCrumb[]| undefined{
    return this.breadCrumbs;
  } 
  setCurrentCardList():TreeNodeElement[]  {
    let retCardList:TreeNodeElement[] = [];
    let currentParentKey =  localStorage.getItem('current-menu') ;
    retCardList = MenuTreeElements.filter((x) => x.parentKey === currentParentKey) ;
     
    this.breadCrumbs  = MenuTreeElements.find((x) => x.key === currentParentKey)?.breadCrumb ;
    return retCardList ;
  }
}

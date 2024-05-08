import { Injectable } from '@angular/core';
import { TreeNodeElement,MenuTreeElements } from 'src/assets/content-tree/tree-nodes' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {

  constructor() { }
  private breadCrumbs?:BreadCrumb[] =[] ;
  private parentDescription?:string ='';
  get BreadCrumbs():BreadCrumb[]| undefined{
    return this.breadCrumbs;
  } 
  get ParentDescription():string| undefined{
    return this.parentDescription;
  } 
  setCurrentCardList():TreeNodeElement[]  {
    let retCardList:TreeNodeElement[] = [];
    let currentParentKey =  localStorage.getItem('current-menu') ;
    retCardList = MenuTreeElements.filter((x) => x.parentKey === currentParentKey) ;
    
    let currentParent = MenuTreeElements.find((x) => x.key === currentParentKey) ;
    this.breadCrumbs  = currentParent?.breadCrumb ;
    this.parentDescription = currentParent?.description !== undefined ? currentParent?.description: currentParent?.label;
    return retCardList ;
  }
}

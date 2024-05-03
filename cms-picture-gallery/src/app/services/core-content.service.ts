import { Injectable } from '@angular/core';
import { TreeNode, TopLevel } from 'src/assets/content-tree/tree-nodes' ;
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {

  constructor() { }

  setCurrentMenu():TreeNode[] {
    let retElement:TreeNode[] = [] ;
    let currentMenu =  localStorage.getItem('current-menu') ;
    switch(currentMenu) {
      case 'top-level': 
        return TopLevel ;
        break ;
    }

    return retElement ;
  }
}

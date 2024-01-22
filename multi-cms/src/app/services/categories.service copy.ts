/* tslint:disable */
import { MenuItem, MenuNav, MenuTree } from './../../assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoriesService {

  constructor() {  }
  // user based roles
  get Categories(): MenuItem[] { // one off this is invoked at login only 
    let userThemes = '';
    return   MenuTree;
   if(localStorage.getItem('userThemes') !== null) {
    userThemes = this.Rawthemes();
    if(userThemes && userThemes.indexOf('all') < 0){
      let filteredMenu:MenuItem[] = [] ;
      MenuTree.forEach((menuItem:MenuItem) => {
        if(menuItem.roles.toString().indexOf(userThemes) >=0 )
          filteredMenu.push(menuItem);
      });
    }
   }    
   
    
    return   MenuTree;
  }

  Rawthemes():string{
    return localStorage.getItem('userThemes')? localStorage.getItem('userThemes').toString(): '' ;
  }
  
}

import { MenuItem,/* see source for comments MenuNav, */ MenuTree } from './../../assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoriesService {
  _seeAll = localStorage.getItem('seeAll');
  constructor() {  }

  get Categories(): MenuItem[] { // one off this is invoked at login only 
  this._seeAll = localStorage.getItem('seeAll');
  // Start of user role based logic - high level religious vs non religious Jan 5
  return this._seeAll === 'true'?
        MenuTree : 
        MenuTree.filter(x => x.roles.indexOf('non-religious') >= 0) ;
        // this.ThemeBasedMenu
  }
  get ThemeBasedMenu(): MenuItem[] {
    let userThemes = '';
    if(localStorage.getItem('userThemes') !== null) {
      userThemes = this.Rawthemes();
      if(userThemes && userThemes.indexOf('all') < 0){
        let filteredMenu:MenuItem[] = [] ;
        MenuTree.forEach((menuItem:MenuItem) => {
          console.log(`${menuItem.label.toString()} Menu roles ${menuItem.roles.toString()}: USER - ${userThemes}`) ;
          menuItem.roles.forEach( (x:string) => {
          //  if(userThemes.indexOf(x)>=0 || x.indexOf('any') >=0) {
            if (CategoriesService.roleFilter(userThemes, x) === true){
              filteredMenu.push(menuItem);
            } 
          }) ;
          /* previous logic - above better to iterate
         // if(menuItem.roles.toString().indexOf(userThemes) >=0 || menuItem.roles.toString().indexOf('any') >=0)
        if(userThemes.indexOf(menuItem.roles.toString()) >=0 || menuItem.roles.toString().indexOf('any') >=0)
            filteredMenu.push(menuItem);
        */
        });
        
        return filteredMenu ;
      }
     
     }  
     return MenuTree.filter(x => x.roles.indexOf('non-religious') >= 0) ;;
      
  }
  /*
  public static RolesFilter(userThemes:string, menuRoles:any[]):any[] {
    let filteredMenu:any[] = [];
    menuRoles.forEach( (x:string) => {
      //  if(userThemes.indexOf(x)>=0 || x.indexOf('any') >=0) {
        if (CategoriesService.roleFilter(userThemes, x) === true){
          filteredMenu.push(menuItem);
        } 
      }) ;
    return userThemes.indexOf(menuRoles) >=0 || menuRoles.indexOf('any') >=0 ;
  } 
  */

  public static roleFilter(userThemes, menuRoles, twoWay=false, cons=false ):boolean {
    if (cons === true) {
      console.log(`${userThemes}, ${menuRoles}`);
    }
    return userThemes.indexOf(menuRoles) >=0 || menuRoles.indexOf('any') >=0 ;
  } 
  Rawthemes():string{
    return localStorage.getItem('userThemes')? localStorage.getItem('userThemes').toString(): '' ;
  }
}

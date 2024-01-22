import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
/*eslint-disable */
import { Component, Input, OnInit } from '@angular/core';
import { NumberLiteralType } from 'typescript';
import { CategoriesService } from 'src/app/services/categories.service';
/*
import { ListsFunnelService  } from 'src/app/services/lists-funnel.service';
replacing above service with the new kid below.. 
This new version will attempt to use caching, casting off need to (re)load new instances of the content lists.
In conjunction, use a generic list type to collect the content lists to make for more efficient code AND 
 be able to factor in generic applicability like masking or including lists based on user roles...
 ...
 Once tested will rename the instances of 'listFunnelService' appropriately
*/
import { CoreContentService } from 'src/app/services/core-content.service';
interface MenuItem {
  label:string;
  key:string;
  uniqueKey:string;
  parentKey:string;
  
}
@Component({
  selector: 'app-theme-navigation',
  templateUrl: './theme-navigation.component.html',
  styleUrls: ['./theme-navigation.component.css']
})
/* Component to display and operate menus
   History
   1. Original side-nav-bar.component created with this app 
   2. This file theme-navigation.component.ts created by initial copy of the above latter half of May 2023
*/
export class ThemeNavigationComponent implements OnInit {

  @Input() tab='';
  @Input() layout:string ='vertical';

  userNotLoggedIn:boolean;
  smallScreenIndex:number = 0;
  private  _userId:string = '';
  private  _seeAll:string = 'false';
  private  _password:string = '';
  private _categories:any;
  picLayout ='carousel';
  private _unplugged: boolean = this.picLayout === 'carousel' ;
  private _viewLink:string = `/view`;
  unpluggedSet(layout='carousel') {
    // alert (layout);
    console.log(this._unplugged) ;
    this._unplugged = layout === 'card' ;// true ;
  }
  private menus:any[] = [
    {path: '/', label:'Home page', param:[]}
  ]
  get ViewLink():string {
    return this._viewLink;
  }
  get UnPlugged():boolean {
    return this._unplugged;
  }
  
  get Menus():any[] {
    return this.menus;
  }
  get SeeAll():string {
    return  (this._seeAll ) === 'false' ?  ' Selected Sketch Categories' : 'All Sketches, and more..';
  } 
  
  get userId():string {
    return this._userId? this._userId : '';
  } 
  set userId(val :string) {
    this._userId = val;
  } 
  get password():string {
    return this._password? this._password : '';
  } 
  get LoggedInClass():string {
    return localStorage.getItem('userId') !== null? 'right-nav' :  'right-nav full-size';
  }
  set password(val :string) {
    this._password = val;
  } 
  getFloat() {
    return this.layout === 'horizontal'? { 'float':'left '}: {};
  }
  menuStyle(menu:any) {
  //  console.log(`${JSON.stringify(menu)}`);
  const marginLeft   = menu.child===false || menu.label.indexOf('Latest Uploads') >= 0? '0':'15px'
    const dateuploaded = menu.dateUploaded? menu.dateUploaded: '01-01-1990'
    return  this.listFunnelService.daysAgoUploaded({dateUploaded: dateuploaded}) === true || menu.label.indexOf('Latest Uploads') >= 0 ? 
  //  { 'text-decoration': 'none', 'background': 'skyblue', 'border': '1px brown outset'} : {  'text-decoration': 'none',  'background': 'beige', 'border': '1px yellow inset'}
    { 'text-decoration': 'none', 'color': 'blue', 'font-weight': '800','font-family': 'Garamond, serif','background': 'beige', 'margin-left': marginLeft} : 
   menu.parentKey === 'art' || menu.child===false ?
   //  menu.child===true ?
    {  'text-decoration': 'none',  'color': 'blue', 'font-weight': '600'}: 
      { 'list-style-type': "-", 'margin-left': marginLeft, 'text-decoration': 'none',  'color': 'blue', 'font-weight': '500'} ;
  }
  menuStylePre(menu:any) {
    //  console.log(`${JSON.stringify(menu)}`);
      const dateuploaded = menu.dateUploaded? menu.dateUploaded: '01-01-1990'
      return  this.listFunnelService.daysAgoUploaded({dateUploaded: dateuploaded}) === true || menu.label.indexOf('Latest Uploads') >= 0 ? 
    //  { 'text-decoration': 'none', 'background': 'skyblue', 'border': '1px brown outset'} : {  'text-decoration': 'none',  'background': 'beige', 'border': '1px yellow inset'}
      { 'text-decoration': 'none', 'color': 'blue', 'font-weight': '800','font-family': 'Garamond, serif','background': 'beige'} : 
     menu.parentKey === 'art' || menu.child===false ?
     //  menu.child===true ?
      {  'text-decoration': 'none',  'color': 'blue', 'font-weight': '600'}: 
        { 'list-style-type': "-", 'margin-left': '15px', 'text-decoration': 'none',  'color': 'blue', 'font-weight': '500'} ;
    }

  constructor(
      private categoryServices: CategoriesService, 
      private authService: AuthService,
      private router: Router, private listFunnelService: CoreContentService) {  //private listFunnelService: ListsFunnelService
    
        let  a:any  = ''; //
    a = localStorage.getItem('userId');
    if (a)this._userId = a;
    this.userNotLoggedIn = localStorage.getItem('userId') === null;
    let storedMenus = localStorage.getItem('userMenu');
    if (storedMenus !== null) {
      this.menus = JSON.parse(storedMenus);
      this.filterByTab();
    }
    // ts-lint:disable
    this._categories = localStorage.getItem('categories'); // ts-lint:disable
  }
  setContext(contextNum:string) {
    localStorage.setItem('context', contextNum) ;
  }
  // Saving option - this is to preserve the selection if a tab change is encountered..
  // See tabbing container component
  setCurrentLink(item:any) {
    console.log(`OPTION ${item}`);
    localStorage.setItem('optionSelect', item) ;
  }
  ngOnInit() {
  }
  navigateStoragelogin() {
    if (!this._userId) this._userId = 'viewer';
    this.authService.clearCaches();
    this.userNotLoggedIn = true ;
    this._viewLink  = `/view`;
    console.log(`${this._categories}`)
    this.authService.login(this.userId);
    this._seeAll = localStorage.getItem('seeAll')
    this._categories = (this.categoryServices.Categories);
    
    this.menus = [ {path: '/', label:'Home page',parentKey:'art', param:[]}];
    /*
    as yet unused May 29 2023
    if (this.userId === 'steadyshan' || this.userId === 'songads') {
      this.menus.push({path: '/content-manage', label:'Manage Content', param:[]})
    }
    */
    this._viewLink = `/view` ;// this._unplugged === true ? `/unplugged-view` : `/view`;
    for (let i = 0; i < this._categories.length ; i++){
      //this._unplugged === true ?
      this.menus.push({
        tab: `${this._categories[i].tab}`,
          path: this._categories[i].parentKey === 'art'?this._viewLink: `/${this._categories[i].key}`, 
          label:`${this._categories[i].label}`, 
          uniqueKey: `${this._categories[i].uniqueKey}`, 
          dateUploaded:  `${this._categories[i].dateUploaded? this._categories[i].dateUploaded: '01-01-1990' }`, 
          parentKey: `${this._categories[i].parentKey}`, 
          param:this._categories[i].key
        }) ;
      // this.menus.push({path: 'view', label:`${this._categories[i].label}`, param:this._categories[i].key});
    }
    /* New for technical details to 'show' interested parties May 29 2023*/
  /*  if (this.userId === 'technician' || this.userId === 'shantanu' || this.userId === 'admin') {
      this.menus.push({path: '/technical', label:'(Technical)', param:[]}); // at the end
      this.menus.unshift({path: '/technical', label:'(Technical)', param:[]});// at the top 
      
    }
  */
    
    // alert(JSON.stringify(this.menus));
    localStorage.setItem('userMenu', JSON.stringify(this.menus));
    this.filterByTab()
    this.userNotLoggedIn = false ;
    
  }
  navigateStoragelogout() {
    // user based visibility
    this._userId = null ;
    this.authService.clearCaches();
    this.router.navigate(['']);
    this.userNotLoggedIn = true ;
    this._unplugged  = false ;
    this._viewLink  = `/view`;
  }
  navigateStorageRegisterUser() {
    localStorage.setItem('userRegister','true'); 
  }
  filterByTab() {
    let test = null;
    if (this.tab !== '') {
      test =  this.menus.filter(menu => menu.tab && menu.tab === this.tab);
    }
  //  console.log(`${JSON.stringify(test)}, ${this.tab}`);
  }
  setMenuIndex(factor:number) {
    this.smallScreenIndex += factor;
    if(this.smallScreenIndex < 1) {
      this.smallScreenIndex = this.Menus.length - 1;
    } else if (this.smallScreenIndex === this.menus.length) {
      this.smallScreenIndex = 1;
    }
    if (!this._unplugged || this._unplugged === null) {
      this._unplugged = false ;
      console.log(`##### unplugged ${this._unplugged}`) ;
    }
    let viewLink = `/view` ; // this._unplugged === true ? `/unplugged-view` : `/view`;
    //if(this.smallScreenIndex === 0 ? factor < 0 
    const route = this.smallScreenIndex > 0 ?  viewLink : '/' ;//'/view' : '/';
    alert(this.menus[this.smallScreenIndex].param );
    const params = this.smallScreenIndex > 0 ?  this.menus[this.smallScreenIndex].param : '';
    this.router.navigate([route, params]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    // alert(JSON.st ringify(this.menus[this.smallScreenIndex].param));
    // this.router.navigate(['view'], { queryParams: { key: 'changers-b4-2022' } });
      
  }
  
  getMenuIndex(factor:number):number {
    this.smallScreenIndex += factor;
    if(this.smallScreenIndex < 0) {
      this.smallScreenIndex = this.Menus.length - 1;
    } else if (this.smallScreenIndex === this.menus.length) {
      this.smallScreenIndex = 0;
    }
    alert(JSON.stringify(this.menus[this.smallScreenIndex].param));
   return this.smallScreenIndex;
      
  }
  

}
/*

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  
}

*/

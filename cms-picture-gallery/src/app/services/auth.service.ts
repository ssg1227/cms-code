import { Injectable } from '@angular/core';
import { CoreContentService } from './core-content.service';

import { Router } from '@angular/router';
interface User {
  userName: string;
  userRoles: string[] ;
}
@Injectable({
  providedIn: 'root'
})
/*
 June 19 2023 - introduction of authentication and authorization.
 Step1 is to filter some pages based on user role.
 As this point, hard coded, if and when required and bandwidth will enter into config file...
 ...
 Also, at this point, the intent is more from avoiding TMI for some users, keeping some views visible for interested parties,
 And also, I'd probably 'mask' some themes from some user roles..
 (Bottom line - more a convenience thing than security)
*/
export class AuthService {
  // Step 1 - hard code, using only ADMIN, and shantanu/technician
  /* next steps - 
    - map (hard coded) users to the roles in a new object/list
    - sub level auth. showing and masking some themes based on user roles
    - multiple roles
    - add logic for password (again, at this stage, cosmetic value)
  */
  Roles = [
    "ADMIN",
    "TECHNICAL",
    "USER-ALL",
    "USER-OBJECTS",
    "USER-BEINGS"
  ]
  userList: User[] = [
    { 
      userName: 'shantanu',
      userRoles: ["admin", "all"] 
    },
    { 
      userName: 'super',
      userRoles: ["superuser"] 
    },
    { 
      userName: 'saint',
      userRoles: ["guru"] 
    },

    { 
      userName: 'pandit',
      userRoles: ["sanatani", "guru"] 
    },

    { 
      userName: 'default',
      userRoles: ["sanatani", "guru"] 
    },

    { 
      userName: 'mechanic',
      userRoles: ['non-living'] 
    },

    { 
      userName: 'generic',
      userRoles: ['non-religious'] 
    },
  ]; 
  users = [
    "shantanu",
    "technician",
    "other"
  ]
  constructor(private router:Router, private coreContentService:CoreContentService) { }
  login(username:string){
    this.clearCaches() ;
    
    // neew logic to get user roles Dec 18 2023. localstorage for roles used by categories.service.ts
    let loggedinUser = username ? 
    this.userList.find((userObject) => userObject.userName === username): { userName: 'default', userRoles: ["non-religious"] } ;
    console.log(`${JSON.stringify(loggedinUser)}`)
    /* Doesnt make sense 
    if (!loggedinUser ) {
      loggedinUser =   { userName: 'default',
      userRoles: ["sanatani", "guru"] } ;
    }
    */
    localStorage.setItem('user-object',JSON.stringify(loggedinUser)) ;
    localStorage.setItem('userId',username);
    localStorage.setItem('current-menu','top-level');
    localStorage.setItem('role',this.roleSetter(username));
  }
  private roleSetter(username:string):string { // change logic later on for the technical menu item, merge into general logic above
    let loggedinUser = username ? 
        this.userList.find((userObject) => userObject.userName === username):
        { userName: 'default',
        userRoles: ["non-religious"] } ;
    if (!loggedinUser ) {
      loggedinUser =   { userName: 'default',
      userRoles: ["non-religious"] } ;
    }
    // alert(JSON.stringify(loggedinUser));
    let selectedIndex = 2 ;
    if (username === 'shantanu' ||  username === 'admin') {
      selectedIndex = 0 ;
    }
      if ( username === 'technician' ) {
       selectedIndex = 1 ;
    }
    return this.Roles[selectedIndex];
  }
  getRole():string {
    let role = localStorage.getItem('role') ;
    return role? role:'' ;
  }
  clearCaches() {
    /*
    localStorage.removeItem('role') ;
    localStorage.removeItem('optionSelect');
    localStorage.removeItem('userThemes') ;
    localStorage.removeItem("usersContentList")
    localStorage.removeItem('context');
    */
    localStorage.removeItem('user-object');
    localStorage.removeItem('userId');
    localStorage.removeItem('current-menu');
    localStorage.removeItem("isLeafParent");
    localStorage.removeItem("key");
    this.coreContentService.clearContentList() ;

    /*
    localStorage.removeItem('userMenu');
    localStorage.removeItem('categories');
    localStorage.removeItem('categorizedMenus');
    localStorage.removeItem('userRegister'); //??
    */
    
  }
  logout() {
   this.clearCaches();
   this.router.navigate([`/home`]).then( (e) => {
    
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });
  }
  public get LoggedIn() : boolean {
    return localStorage.getItem('userId') !== null;
  }
}

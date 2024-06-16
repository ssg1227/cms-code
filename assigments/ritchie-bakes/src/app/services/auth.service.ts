import { Injectable } from '@angular/core';
import { CoreContentService } from './core-content.service';
import { Router } from '@angular/router';
import { needLogin, Roles,userList, users } from 'src/assets/common-config/static-text-other-constants';
interface User {
  userName: string;
  userRoles: string[] ;
  landingPage?: '',
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
  moved to static
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
      userRoles: ["superuser"] 
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
   */

  get NeedLogin(): boolean  {
    return  needLogin  ;
  }
  constructor(private router:Router, private coreContentService:CoreContentService) { }
  login(username:string, directLatet=false){
    /*
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      alert("mobile");
    }else{
      alert("not mobile");
    }
    */
    this.clearCaches() ;
    
    // neew logic to get user roles Dec 18 2023. localstorage for roles used by categories.service.ts
    let loggedinUser = username ? 
    userList.find((userObject) => userObject.userName === username): { userName: 'default', userRoles: ["any"] } ;
    console.log(`Auth service ${JSON.stringify(loggedinUser)}`)
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
    if (directLatet === true) {
      this.router.navigate(['/view','latest-uploads-timewise']).then( (e) => {
      
        if (e) {
          localStorage.setItem("key", 'latest-uploads-timewise');
          localStorage.setItem('current-menu','latest-uploads-timewise');
          localStorage.setItem("isLeafParent",'true');
          if (this.coreContentService.TestMode === true)
              console.log("auth service: login  is successful!");
        } else {
          if (this.coreContentService.TestMode === true)
            console.log("auth service: login  has failed!");
        }
      });
  }
  }
  
  private roleSetter(username:string):string { // change logic later on for the technical menu item, merge into general logic above
    let loggedinUser = username ? 
        userList.find((userObject) => userObject.userName === username):
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
    return Roles[selectedIndex];
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
    this.coreContentService.clearContent() ;

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

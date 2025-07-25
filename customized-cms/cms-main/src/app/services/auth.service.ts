import { Injectable } from '@angular/core';
import { CoreContentService } from './core-content.service';

import { needLogin, /* later Roles,userList, users*/ } from '@settings-and-models/static-text-other-constants';
import { Router } from '@angular/router';
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
      userRoles: ["superuser","core"]  // 'core user type'
    },
    { 
      userName: 'achyutM',
      userRoles: ["superuser","core"]  // 'core user type'
    },
    { 
      userName: 'harshaG',
      userRoles: ["superuser","core"]  // 'core user type'
    },
    { 
      userName: 'sunilbhai',
      userRoles: ["superuser","core"]  // 'core user type'
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

  get NeedLogin(): boolean  {
    return  needLogin  ;
  }
  constructor(private router:Router, private coreContentService:CoreContentService) { }
  isSpecialDate(date: Date= new Date()): boolean {
  const month = date.getMonth(); // 0 = Jan, 5 = June
  const day = date.getDate();
  return (
    (month === 5 && day === 27) || // June 27
    (month === 6 && day === 4)  || // July 4
    (month === 6 && day === 19) || // July 19
    (month === 7 && day === 15)    // August 15
  );
}
  freeForAll():boolean 
  {
    return this.isSpecialDate(); 
  }
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
    this.userList.find((userObject) => userObject.userName === username): { userName: 'default', userRoles: ["any"] } ;
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
    // @ts-ignore: Object is possibly 'null'.
       localStorage.setItem('userRoles',this.userList.find(x => x.userName === username).userRoles.toString());// core user type
    if (directLatet === true) { //June 2025 C&O restructuring - from latest-uplpads-timewise
      this.router.navigate(['/view','most-recently-uploaded']).then( (e) => {
      
        if (e) {
          localStorage.setItem("key", 'most-recently-uploaded'); //June 2025 C&O restructuring - from latest-uplpads-timewise
          localStorage.setItem('current-menu','most-recently-uploaded'); //June 2025 C&O restructuring - from latest-uplpads-timewise
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
    localStorage.removeItem('userRoles'); // core user type

    /* April 25+ load issues */
    localStorage.removeItem('latest-list-timeline');
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

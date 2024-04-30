import { Injectable } from '@angular/core';

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
  constructor() { }
  login(username:string){
    this.clearCaches() ;
   
    // neew logic to get user roles Dec 18 2023. localstorage for roles used by categories.service.ts
    let loggedinUser = username ? 
    this.userList.find((userObject) => userObject.userName === username):
    { userName: 'default',
    userRoles: ["sanatani", "guru"] } ;
    if (!loggedinUser ) {
      loggedinUser =   { userName: 'default',
      userRoles: ["sanatani", "guru"] } ;
    }
    localStorage.setItem('userThemes', 'all') 
    localStorage.setItem('userId',username);
    localStorage.setItem('role',this.roleSetter(username));
  }
  private roleSetter(username:string):string { // change logic later on for the technical menu item, merge into general logic above
    let loggedinUser = username ? 
        this.userList.find((userObject) => userObject.userName === username):
        { userName: 'default',
        userRoles: ["sanatani", "guru"] } ;
    if (!loggedinUser ) {
      loggedinUser =   { userName: 'default',
      userRoles: ["sanatani", "guru"] } ;
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
    localStorage.removeItem('role') ;
    localStorage.removeItem('optionSelect');
    localStorage.removeItem('userThemes') ;
    localStorage.removeItem("usersContentList")
    localStorage.removeItem('context');
    localStorage.removeItem('userId');
    localStorage.removeItem('userMenu');
    localStorage.removeItem('categories');
    localStorage.removeItem('categorizedMenus');
    localStorage.removeItem('userRegister'); //??
    
  }
  logout() {
   this.clearCaches();
  }
  public get LoggedIn() : boolean {
    return localStorage.getItem('userId') !== null;
  }
}

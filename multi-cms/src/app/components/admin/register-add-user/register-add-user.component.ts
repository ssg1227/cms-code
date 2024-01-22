import { Component, OnInit } from '@angular/core';
class UserCred {
  userId:string='';
  roles:string[]=[];
  password:string='' ;
}
@Component({
  selector: 'app-register-add-user',
  templateUrl: './register-add-user.component.html',
  styleUrls: ['./register-add-user.component.css']
})

export class RegisterAddUserComponent implements OnInit {
  private  _userCred:UserCred ;
  get userId():string {
    return this._userCred.userId;
  } 
  set userId(val :string) {
    this._userCred.userId = val;
  } 
  get userRoles():string {
    return this._userCred.roles.join(',');
  } 
  set userRoles(val :string) {
    this._userCred.roles = val.split(',');
  } 
  get localStorageReg(): string {
    let a = localStorage.getItem('userRegister');
    return a ? a:'';
  }
  constructor() {
    this._userCred = new UserCred();
    this.userId = 'user';
    this.userRoles = 'all, objects, spiritual, animates';
   }

  register() {
    localStorage.removeItem('userRegister')
  }
  ngOnInit() {
  }

}

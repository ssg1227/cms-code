import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService:AuthService,private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserRole();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  checkUserRole():boolean {// route:ActivatedRouteSnapshot?):boolean{
    console.log('HHHH')
    let adminFound = this.authService.getRole() === "ADMIN";
    let techieFound = this.authService.getRole() === "TECHNICAL";
    if (adminFound === false && techieFound === false) {
      this.router.navigate(['/home']);
    }
    return adminFound ; 
  }
}

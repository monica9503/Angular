import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate():
  boolean {
    debugger
    return this.checkLoggedIn();
  }
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    // {
    // return this.checkLoggedIn(state.url);
    // }

  // Use the segments to build the full route
  // when using canLoad
  // canLoad(): boolean {
  //   debugger
  //   return this.checkLoggedIn();
  // }

  checkLoggedIn(): boolean {
    debugger
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    // Retain the attempted URL for redirection
    //this.authService.redirectUrl = url;
  }

}

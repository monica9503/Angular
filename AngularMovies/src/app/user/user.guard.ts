import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    return this.checkIsAdmin();
  }

  checkIsAdmin(): boolean {
      debugger;
    if (!this.authService.isAdmin) {
        return true;
      } else if (this.authService.isLoggedIn){
        this.router.navigate(['/admin']);
        return false;
      }
  }
}

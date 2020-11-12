import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any = [];
  redirectUrl: string;


  get isLoggedIn(): boolean {
    return !!localStorage.getItem('loginStatus');
  }

  get isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === "true";
  }

  set loggedInStatus(status: string){
      localStorage.setItem('loginStatus', status);
  }

  constructor() { }
}

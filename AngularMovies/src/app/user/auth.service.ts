import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginCheck(userName: any, password: any) {
    throw new Error('Method not implemented.');
  }
  currentUser: Boolean;
  users: any = [];
  redirectUrl: string;


  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  set loggedInStatus(status: boolean){
      this.currentUser = status 
  }

  constructor() { }
}

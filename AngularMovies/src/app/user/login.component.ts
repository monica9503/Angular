import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  users: any;
  currentUser: boolean;
  errorFlag: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private httpClient: HttpClient) { }

            
  
  ngOnInit() {
    debugger
    if(this.authService.isLoggedIn) {
      debugger
      this.router.navigate(['/movies']);
    }
  } 

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.loginCheck(userName, password);
    } else {
      this.errorFlag = true;
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  loginCheck(userName: string, password: string): void {
    if (!userName || !password) {
      return;
    } else {
      debugger
      this.httpClient.get("assets/users.json").subscribe(data =>{
        this.users = data;
        this.users = this.users.filter(x => x.userName === userName && x.password === password)
        this.currentUser = true
        if (this.users.length > 0) {
            this.errorFlag = false;
            this.authService.loggedInStatus = 'true';
            this.router.navigate(['/movies']);
        } else {
          debugger
          this.errorFlag = true;
          this.errorMessage = 'Incorrect username or password.';
        }
      })
    }
  }
}

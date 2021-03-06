import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMovies';
  
  constructor(public router: Router,) {
  }

  ngOnInit(){
    this.router.navigateByUrl('/login');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  home() {
    this.router.navigateByUrl('/movies');
  }
}

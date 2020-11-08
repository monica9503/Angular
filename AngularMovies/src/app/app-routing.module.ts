import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      //{path: 'movies', component: MoviesComponent},
    {
      path: 'movies',
      canActivate: [AuthGuard],
      component: MoviesComponent
      // loadChildren: () =>
      // import('./movies/movies.module').then(
      //   (m) => m.MoviesModule
      // ),
    }
   ], {})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }

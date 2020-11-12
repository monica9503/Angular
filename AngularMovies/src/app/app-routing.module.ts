import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthGuard } from './user/auth.guard';
import { UserGuard } from '../app/user/user.guard';
import { LoginComponent } from './user/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'movies',
      canActivate: [AuthGuard, UserGuard],
      component: MoviesComponent
    },
    { path: 'movie/details/:id', component: MovieDetailsComponent },
    {
      path: 'admin', component: AdminComponent
    }
   ], {})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }

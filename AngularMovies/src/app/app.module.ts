import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '../app/user/user.module'
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesModule } from './movies/movies.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import {MovieDBService} from './movies/moviedb.service'
import {ApiService} from '../app/services/api.service';
import { FilterPipe } from './filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FilterPipe,
    AdminComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    MoviesModule,
    FormsModule
  ],
  providers: [MovieDBService, ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }

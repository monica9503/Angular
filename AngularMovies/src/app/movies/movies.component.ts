import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service'
import { Movie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  moviesData: Movie[]
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.moviesData = this.movieService.getMovieDetails()
  }

  movieDetails(movie: Movie) {
    this.router.navigate(['/movie/details/' + movie.id]);
  }
}

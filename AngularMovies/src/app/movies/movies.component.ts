import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service'
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  moviesData: Movie[]
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.moviesData = this.movieService.getMovieTitleList()
  }

  movieDetails(movie: Movie) {
    debugger;
    console.log(movie);
  }
}

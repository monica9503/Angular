import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../movies/moviedb.service'
import { Movie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  moviesData: Movie[]
  
  constructor(private router: Router, private movieDBService: MovieDBService) { }

  ngOnInit(): void {
   this.movieDBService.getMovies().subscribe(data => {
    this.moviesData = data;
   })
  }

  movieDetails(movie: Movie) {
    this.router.navigate(['/movie/details/' + movie.id]);
  }
}

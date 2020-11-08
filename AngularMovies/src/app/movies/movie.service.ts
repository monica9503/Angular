import { MovieData } from "../data/movie-data";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class MovieService {

    movieTemp = []
    
    constructor(private movieData: MovieData) {
    }
    
    ngOnInit() {
    }

    getMovieDetails() {
       return this.movieData.getMovies()
    }

    getMovieSpecificInfo(id: number) {
      return this.movieData.getMovieInfo(id)
    }
}
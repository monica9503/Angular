import { MovieData } from "../data/movie-data";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class MovieService {

    constructor(private movieData: MovieData) {
    }
    
    ngOnInit() {
    }

    getMovieTitleList() {
       return this.movieData.getMovies()
    }
}
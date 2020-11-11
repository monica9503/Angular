import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../services/api.service';

@Injectable()
export class MovieDBService extends ApiService {
    
    constructor(http: HttpClient) {
        super(http)
    }

    getMovies() {
        const currURL = this.url + 'movies'
        return this.http.get<any>(currURL)
    }

    getMovieSpecific(movieID: number) {
        const currURL = this.url + 'movies/' + movieID
        return this.http.get<any>(currURL)
    }

    getMovieInfo(movieID: number) {
        const currURL = this.url + 'movies/' + movieID+ '/movieinfo' 
        return this.http.get<any>(currURL)
    }    
}

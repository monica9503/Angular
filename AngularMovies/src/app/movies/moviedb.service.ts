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

    updateMovieInfo(movieInfoId: number, data: any) {
        const currURL = this.url + 'movieinfo/' + movieInfoId;
        return this.http.put<any>(currURL, data);
    }

    addMovieInfo(data: any) {
        const currURL = this.url + 'movieinfo';
        return this.http.post<any>(currURL, data);
    }

    removeMovie(movieId: number) {
        debugger
        const currURL = this.url + 'movies/' + movieId;
        return this.http.delete<any>(currURL);
    }

    addNewMovie(data: any) {
        const currURL = this.url + 'movies';
        return this.http.post<any>(currURL, data);
    }
}

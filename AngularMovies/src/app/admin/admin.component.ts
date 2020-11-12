import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movies/movie';
import { MovieDBService } from '../movies/moviedb.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private movieDBService: MovieDBService) { }

  moviesData: Movie[]
  
  ngOnInit(): void {
    this.movieDBService.getMovies().subscribe(data => {
      this.moviesData = data;
     })
  }

  deleteUser(movieId: Movie) {
    this.movieDBService.removeMovie(movieId.id).subscribe(data => {
      this.pageRefresh()
    });
  }

  pageRefresh() {
    window.location.reload();
  }

  addMovie() {
    
  }

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Movie } from '../movies/movie';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieInfo: Movie;
  movieID: string;
  ratingFlag = true;
  commentFlag = true;
  userRating: any;
  userComment: any;
  userId: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieID = params.get("id");
      this.movieInfo = this.movieService.getMovieSpecificInfo(parseInt(this.movieID));
      this.userId = parseInt(localStorage.getItem("userId"));
      this.userRating = this.movieInfo.userRating[this.userId];
      this.userComment = this.movieInfo.userComments[this.userId];
    })
  }

  editRating(movie: Movie) {
    this.ratingFlag = false;
  }


  editComment(movie: Movie) {
    this.commentFlag = false;
  }

  save() {
  }

  cancel(){
    this.ratingFlag = true;
  }
}

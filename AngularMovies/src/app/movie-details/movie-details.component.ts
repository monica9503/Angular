import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from "@angular/router";
import { Movie } from '../movies/movie';
import { MovieService } from '../movies/movie.service';
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieID = params.get("id");
      this.movieInfo = this.movieService.getMovieSpecificInfo(parseInt(this.movieID));
      this.userId = parseInt(localStorage.getItem("userId"));
      this.userRating = this.movieInfo.userRating[this.userId];
      this.userComment = this.movieInfo.userComments[this.userId];
    })
  }

  editRating() {
    this.ratingFlag = false;
  }


  editComment() {
    this.commentFlag = false;
  }

  save(detailsForm: NgForm) : void {
    debugger;
    
    console.log(detailsForm.controls.moviedes.value)
    console.log(detailsForm.controls.movieid.value)
    console.log(detailsForm.controls.movierating.value)
    console.log(detailsForm.controls.userrating.value)
    this.movieService.updateUserRating(parseInt(this.movieID), this.userId, detailsForm.controls.userrating.value);
    this.router.navigate(['/movies']);
  }

  cancel(){
    this.ratingFlag = true;
  }
}

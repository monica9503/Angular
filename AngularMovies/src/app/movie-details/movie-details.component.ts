import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from "@angular/router";
import { Movie } from '../movies/movie';
import { Router } from '@angular/router';
import { MovieDBService } from '../movies/moviedb.service';
import { forkJoin } from 'rxjs';

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

  constructor(private route: ActivatedRoute, private movieService: MovieDBService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieID = params.get("id");
      const movieGenericDetail = this.movieService.getMovieSpecific(parseInt(this.movieID));
      const movieInfo = this.movieService.getMovieInfo(parseInt(this.movieID));

      forkJoin([movieGenericDetail, movieInfo]).subscribe(result => {
        debugger;
        this.movieInfo = result[0];
        this.userRating = result[1][0].rating;
        this.userComment = result[1][0].comment;
      })
    })
  }

  editRating() {
    this.ratingFlag = false;
  }


  editComment() {
    this.commentFlag = false;
  }

  save(detailsForm: NgForm) : void {    
    // console.log(detailsForm.controls.moviedes.value)
    // console.log(detailsForm.controls.movieid.value)
    // console.log(detailsForm.controls.movierating.value)
    // console.log(detailsForm.controls.userrating.value)
    // this.movieService.updateUserRating(parseInt(this.movieID), this.userId, detailsForm.controls.userrating.value);
    // this.router.navigate(['/movies']);
  }

  cancel(){
    this.ratingFlag = true;
  }
}

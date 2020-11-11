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
    debugger
    this.route.paramMap.subscribe(params => {
      debugger
      this.movieID = params.get("id");
      const movieGenericDetail = this.movieService.getMovieSpecific(parseInt(this.movieID));
      const movieInfo = this.movieService.getMovieInfo(parseInt(this.movieID));
      debugger
      forkJoin([movieGenericDetail, movieInfo]).subscribe(result => {
        debugger
        this.movieInfo = result[0];
        if(result[1][0] === undefined) {
          console.log("not found...");
        } else {
          this.userRating = (result[1][0] !== undefined) ? result[1][0].rating: 0.0;
          this.userComment =  (result[1][0] !== undefined) ? result[1][0].comment: "N/A";
          localStorage.setItem("movieInfoID", result[1][0].id);
        }
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
    const movieId = detailsForm.controls.movieid.value;
    const movieInfoId = parseInt(localStorage.getItem("movieInfoID"));
    const userId = parseInt(localStorage.getItem("userId"));
    const rating = detailsForm.controls.userrating.value;
    const comment = detailsForm.controls.usercomment.value;

    const dataInput = {"id": movieInfoId, "movieId": movieId, "userId": userId, "rating": rating, "comment": comment}

    this.movieService.updateMovieInfo(movieInfoId, dataInput).subscribe(data => {
      this.router.navigate(['/movies']);
    })
  }

  cancel(){
    this.ratingFlag = true;
  }
}

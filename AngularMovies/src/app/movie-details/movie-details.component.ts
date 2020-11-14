import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from "@angular/router";
import { Movie } from '../movies/movie';
import { Router } from '@angular/router';
import { MovieDBService } from '../movies/moviedb.service';
import { forkJoin } from 'rxjs';
import { formatCurrency } from '@angular/common';

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
  tempMovieInfo: any;
  tempMovieDetail: any;

 
  constructor(private route: ActivatedRoute, private movieService: MovieDBService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      debugger
      this.movieID = params.get("id");
      const movieGenericDetail = this.movieService.getMovieSpecific(parseInt(this.movieID));
      const movieInfo = this.movieService.getMovieInfo(parseInt(this.movieID));

      forkJoin([movieGenericDetail, movieInfo]).subscribe(result => {
        debugger
        this.movieInfo = result[0];
        this.tempMovieDetail = result[0];
        const userId = parseInt(localStorage.getItem("userId"));
        if(result[1][0] === undefined) {
          console.log("not found...");
          const dataInput = {"movieId": parseInt(this.movieID), "userId": userId, "rating": 0, "comment": ""}
          this.movieService.addMovieInfo(dataInput).subscribe();
        } else {
          this.tempMovieInfo = result[1]
          result[1] = result[1].filter(x => x.userId == userId);
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
    let rating = detailsForm.controls.userrating.value;
    const comment = detailsForm.controls.usercomment.value;

    debugger
    if(rating < 0) {
      rating = 0;
    } else if(rating > 5){
      rating = 5;
    }
    const dataInput = {"id": movieInfoId, "movieId": parseInt(movieId), "userId": userId, "rating": parseInt(rating), "comment": comment}

    this.movieService.updateMovieInfo(movieInfoId, dataInput).subscribe(data => {
      debugger;
      this.tempMovieInfo = this.tempMovieInfo.filter(x => x.movieId)
      let ratingSum = 0;
      for(let x=0;x<this.tempMovieInfo.length;x++) {
        ratingSum = rating + this.tempMovieInfo[x].rating
      }
      const avgR = ratingSum / this.tempMovieInfo.length;
      const dataInput = {"id": movieId, "title": this.tempMovieDetail.title, "description": this.tempMovieDetail.description, "avgRating": avgR}
      this.movieService.updateMovieAvgRating(movieId, dataInput).subscribe(data => {
        this.router.navigate(['/movies']);
      }) 
    })
  }

  cancel(){
    this.ratingFlag = true;
  }
}

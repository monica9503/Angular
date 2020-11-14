import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieDBService } from '../movies/moviedb.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieDBService) { }

  ngOnInit(): void {
  }

  save(detailsForm: NgForm) {
    const movieTitle = detailsForm.controls.movietitle.value.trim();
    const movieDesc = detailsForm.controls.moviedes.value.trim();

    const dataInput = {"title": movieTitle, "description": movieDesc, "avgRating": 0}
    this.movieService.addNewMovie(dataInput).subscribe(data => {
        this.router.navigateByUrl('/admin');
    })
  }

  cancel() {
    this.router.navigateByUrl('/admin');
  }
}

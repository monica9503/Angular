import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(detailsForm: NgForm) {

  }

  cancel() {
    
  }

}

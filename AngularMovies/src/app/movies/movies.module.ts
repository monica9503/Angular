import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MoviesComponent } from '../movies/movies.component'

@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild([
        {
          path: 'movies',
          component: MoviesComponent
        }
     ]) 
    ] ,
    declarations: [
      ]
})

export class MoviesModule {}
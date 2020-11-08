import { Movie } from "../movies/movie";

 export class MovieData {
    movies: Movie[] = [
        {
          id: 1,
          title: 'Leaf Rake',
          description: 'Leaf rake with 48-inch wooden handle',
          avgRating: 19.95,
          userRating: {1000 :'3.0', 1001: '2.0'},
          userComments: {1000: 'good'}
        },
        {
            id: 2,
            title: 'Inception',
            description: 'Leaf rake with 48-inch wooden handle',
            avgRating: 19.5,
            userRating: {},
            userComments: {}
        },
        {
            id: 3,
            title: 'Harry Rake',
            description: 'Leaf rake with 48-inch wooden handle',
            avgRating: 1.95,
            userRating: {},
            userComments: {}
          },
          {
            id: 4,
            title: 'Leaf potter',
            description: 'Leaf rake with 48-inch wooden handle',
            avgRating: 9.95,
            userRating: {},
            userComments: {}
          },
          {
            id: 5,
            title: 'Leaf devil',
            description: 'Leaf rake with 48-inch wooden handle',
            avgRating: 19.5,
            userRating: {},
            userComments: {}
          }]

        getMovies() {
            return this.movies
        }

        getMovieInfo(id: number) {
            return this.movies.slice().filter(m => m.id = id)[0];
        }
 }
 
 
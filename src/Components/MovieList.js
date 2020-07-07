  
import React, {Component} from 'react';
import Movie from "./Movie";

class MovieList extends Component {
    render() {
        const movie = this.props.movies.map( movie => {
          return (
            <Movie name={movie.name} url={movie.url} key={movie.id}>
            </Movie>
         );
        });
    
        return (
        <div className="movies">{movie}</div>
        )
    }
}

export default MovieList;
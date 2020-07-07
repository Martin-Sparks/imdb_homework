import React, {Component} from "react";

class Movie extends Component{
    render(){
        return(
            <div className="movies">
                <h4>{this.props.name}</h4>
                <h4>{this.props.url}</h4>
            </div>
        ) 
    }
}

export default Movie;


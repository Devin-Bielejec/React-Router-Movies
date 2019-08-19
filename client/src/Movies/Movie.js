import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log(props);

  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    const getMovie = () => {
      axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
    
    getMovie();

  }, [props.match.params.id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  console.log(movie, "37");
  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie}/>
      <div className="save-button" onClick={()=>saveMovie()}>Save</div>
    </div>
  );
}

export default Movie;

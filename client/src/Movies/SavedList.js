import React from 'react';
import { NavLink, Link } from "react-router-dom";

const SavedList = props => {
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink key={movie.key} to={`/movies/${movie.id}`} activeClassName="saved-active" className = "saved-movie">{movie.title}</NavLink>
    ))}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
  )
    };


export default SavedList;

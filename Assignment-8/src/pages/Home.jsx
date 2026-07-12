import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Now Showing</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

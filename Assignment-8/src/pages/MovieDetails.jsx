import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{ borderRadius: '10px' }} />
      <h3>Genre: {movie.genre}</h3>
      <p>Great movie to watch with your friends and family.</p>
      
      <Link to={`/book/${movie.id}`}>
        <button style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Book Seat
        </button>
      </Link>
    </div>
  );
};

export default MovieDetails;

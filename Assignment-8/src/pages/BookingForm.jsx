import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate random booking ID
    const bookingId = Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Navigate to confirmation with state
    navigate('/confirmation', { state: { ...formData, bookingId, movieTitle: movie.title } });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Book Seat for {movie.title}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Mobile:</label><br />
          <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

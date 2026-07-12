import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return <h2>No booking data found!</h2>;
  }

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', padding: '30px', maxWidth: '500px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '10px', color: '#155724' }}>
      <h1>🎉 Seat Booked Successfully! 🎉</h1>
      <h2 style={{ color: '#0056b3' }}>Booking ID: {state.bookingId}</h2>
      
      <div style={{ textAlign: 'left', marginTop: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Movie:</strong> {state.movieTitle}</p>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Mobile:</strong> {state.mobile}</p>
      </div>

      <br />
      <Link to="/">
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;

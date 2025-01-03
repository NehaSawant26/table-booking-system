import React, { useState } from 'react';
import BookingForm from './Components/BookingForm';
import Confirmation from './Components/Confirmation';
import axios from 'axios';

const App = () => {
  const [booking, setBooking] = useState(null);

  const handleFormSubmit = (data) => {
    axios.post('http://localhost:5000/api/bookings', data)
      .then(response => setBooking(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mt-10 text-center font-medium text-3xl mr-20">Restaurant Table Booking System</h1>

      {!booking ? (
        <>
          <BookingForm onSubmit={handleFormSubmit} />
        </>
      ) : (
        <Confirmation booking={booking} />
      )}
    </div>
  );
};

export default App;

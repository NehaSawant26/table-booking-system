import React from 'react';

const Confirmation = ({ booking }) => {
  
  return (
    <div className="container place-items-center ml-20">
    <div className="text-center rounded-xl bg-teal-300 w-96 h-60">
      <h2 className=" text-2xl font-medium mt-10 ">Booking has been Confirmed</h2>
      <p className=" text-xl  mt-3"><b> Name : </b>{booking.name}</p>
      <p className=" text-xl mt-2"><b>Contact : </b>{booking.contact}</p>
      <p className=" text-xl  mt-2"><b>Guests :</b> {booking.guests}</p>
      <p className=" text-xl  mt-2"><b>Date : </b>{booking.date}</p>
      <p className=" text-xl  mt-2 mb-5"><b>Time :</b> {booking.time}</p>
    </div>
    </div>
  );
};

export default Confirmation;

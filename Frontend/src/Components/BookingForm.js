import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  contact: yup.string().required('Contact is required'),
  guests: yup.number().min(1, 'At least 1 guest').max(10, 'Maximum 10 guests').required(),
  date: yup.date().required('Date is required'),
  time: yup.string().required('Time is required'),
});

const BookingForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (

  <div className=" max-w-2xl mt-12 ml-96 ">
    <div className="flex justify-center items-center bg-gray-400 rounded-xl">

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className=" mt-3">
      <label className="block text-sm/6 font-semibold text-gray-900 mb-1"> Name  </label> 
      <input name="name" type="text" className="block w-full px-4 py-1 rounded-md outline outline-gray-300 focus:outline focus:outline-indigo-700 " {...register('name')} /> 
      
        <p>{errors.name?.message}</p>
      </div>


      <div className=" mt-3">
        <label className="block text-md font-semibold text-gray-900 mb-1">Phone Number</label>
        <input type="text" className="block w-full px-4 py-1 rounded-md outline outline-gray-300 focus:outline focus:outline-indigo-700" {...register('contact')} />
        <p>{errors.contact?.message}</p>
      </div>

      <div className=" mt-3">
        <label className="block text-md font-semibold text-gray-900 mb-1">Number of Guests</label>
        <input type="number"  className="block w-full px-4 py-1 rounded-md outline outline-gray-300 focus:outline focus:outline-indigo-700"{...register('guests')} />
        <p>{errors.guests?.message}</p>
      </div>

      <div className=" mt-3">
        <label className="block text-md font-semibold text-gray-900 mb-1">Date</label>
        <input type="date" className="block w-full px-4 py-1 rounded-md outline outline-gray-300 focus:outline focus:outline-indigo-700" {...register('date')} />
        <p>{errors.date?.message}</p>
      </div>

      <div className=" mt-3 mb-4">
        <label className="block text-md font-semibold text-gray-900 mb-1">Time</label>
        <input type="time" className=" w-full px-4 py-1 rounded-md outline outline-gray-300 focus:outline focus:outline-indigo-700"{...register('time')} />
        <p>{errors.time?.message}</p>
      </div>

      <button type="submit" className="w-full h-10 rounded bg-blue-500 text-white mr-4 mb-7 " >Book Table</button>
     
    </form>
    </div>
    </div>
  );
};

export default BookingForm;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import g2 from '../Header/img/grainet.png';
import { useNavigate } from 'react-router-dom';

export default function Individual() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    surname: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;                     
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.fathersName || !formData.surname) {
      setErrorMessage('Please fill in all fields.');
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');

    console.log('Form Data:', formData);
    
    // Navigate to the next page
    navigate('/ForminNext');
  };

  return (
    <>
      <div className="flex fixed">
        <div className="bg-[#756c6c] ">
          <img src={p1} className='h-28 w-44 ml-[3rem]' alt="" />
          <img src={g2} className='h-[35rem] w-[22rem]' />
        </div>

        <div className="flex-1 bg-[#faf9f9]">
          <div className="text-white p-2 space-x-32 justify-center bg-[#ce8080] text-2xl">
            <a href="" className='pl-1 hover:text-red-600'>Home</a>
            <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign In</button>
            <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign Up</button>
            <a href="" className='hover:text-red-600'>About Us</a>
            <a href="" className='pr-2 hover:text-red-600'>FAQ</a>
          </div>

          <h1 className="text-4xl font-semibold pt-8 px-64 pb-10">
            Welcome to blood and <br /> tissue supply chain <br /> management system
          </h1>

          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-96"
            >
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Fathers Name</label>
                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}

              <button
                type="submit" // This will trigger handleSubmit on click
                className="w-28 bg-slate-600 mt-4 text-white py-1 rounded-md hover:bg-red-700 transition"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
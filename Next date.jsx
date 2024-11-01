// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import g2 from '../Header/img/grainet.png';
import { useNavigate } from 'react-router-dom';

export default function Nextdate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    dob: '',
    age: '',
    sex: '',
    occupation: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.title || !formData.dob || !formData.age || !formData.sex || !formData.occupation) {
      setErrorMessage('Please fill in all fields.');
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');

    console.log('Form Data:', formData);
    
    // Navigate to the next page
    navigate('/cityF');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
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
<div className='flex-col'>
          <h1 className="text-3xl font-semibold pt-1 px-56 pb-3">
            Welcome to blood and tissue  <br />supply   chain  management system
          </h1>
          </div>
          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6 space-y-2 w-96"
            >
              <div>
                <label className="block text-gray-700">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="" disabled>Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Sex</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="" disabled>Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}

              <div className="flex justify-between -mt-[20rem]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-28 bg-gray-600 text-black py-1 rounded-md hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button onClick={handleChange}
                  type="submit"
                  className="w-28 bg-slate-600 text-black py-1 rounded-md hover:bg-red-700 transition"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

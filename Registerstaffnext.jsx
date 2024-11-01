/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';

function Nextstaff() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dob: '',
    address: '',
    occupation: '',
    phone: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.dob || !formData.address || !formData.occupation || !formData.phone) {
      setErrorMessage('Please fill in all fields.');
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');

    console.log('Form Data:', formData);
    
    // Navigate to the next page
    navigate('/Staffsubmit');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2 z-10">
        <img src={p1} alt="Logo" className="h-16" />
        <nav className="text-black md:text-sm ml-1 md:ml-52 flex flex-wrap font-semibold space-x-5 items-center justify-center mt-2 md:mt-0">
          <Link to='/'> <a className="hover:text-red-600" href="#">Home</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">About</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">Blood</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">Contact Us</a></Link>
        </nav>
        <div className="flex md:space-x-4 flex-row space-x-2">
          <div className="relative">
            <SearchBar />
          </div>
          <button className="p-2 mr-2 w-28 text-base rounded-md bg-white border hover:bg-slate-200 border-gray-300">Sign Up</button>
          <button className="p-2 w-28 text-base rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
        </div>
      </header>

      <div className="flex-row">
        <div className=''>
          <h1 className="text-2xl font-semibold ml-1 mt-[5.5rem] px-36 pb-3">
            Welcome to blood and tissue supply <br /> chain management system
          </h1>
          <ul className='flex space-x-28 -mt-4 ml-[32rem] text-2xl'>
                        <span className='flex-row '><span className=''>step</span><FaCheck  className='  rounded-full w-12 p-3 h-12  bg-red-300 text-center' /></span>
                        <span className='flex-row '><span className=''>step</span><FaCheck  className='  rounded-full w-12 p-3 h-12  bg-red-300 text-center' /></span>
                        <span className='flex-row'><span className=''>step</span><li className="rounded-full w-12 p-2 text-center bg-slate-300">3</li></span>
                    </ul>
        </div>
        
        <div className="flex justify-center">
            <h1 className="text-3xl text-black font-bold -mt-2 pb-2">Register as staff</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg -ml-[7rem] rounded-lg mt-7 p-2 space-y-1 w-96"
          >
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
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
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

            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="type"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500">{errorMessage}</div>
            )}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Nextstaff;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import g2 from '../Header/img/grainet.png';
import { useNavigate } from 'react-router-dom';

function Asindiviual() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    pobox: '',
    bloodType: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { email, password, username, pobox, bloodType, medicalHistory } = formData;

    // Simple validation
    if (!email || !password || !username || !pobox || !bloodType || !medicalHistory) {
      alert('Please fill out all fields.');
      return;
    }

    // Here you can handle the form submission (e.g., send data to an API)
    alert('Form submitted successfully!');

    // Optionally navigate to another page after submission
    // navigate('/nextPage'); // Uncomment this line if you want to navigate after submission
  };

  return (
    <>
      <div className="flex ">
        <div className="bg-[#756c6c]">
          <img src={p1} className='h-28 w-44 ml-[3rem]' alt="Logo" />
          <img src={g2} className='h-[30rem] w-[21rem]' alt="Banner" />
        </div>

        <div className="flex-1 bg-[#faf9f9]">
          <div className="text-white p-1 space-x-32 justify-center bg-[#ce8080] text-2xl">
            <a href="#" className='pl-1 hover:text-red-600'>Home</a>
            <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign In</button>
            <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign Up</button>
            <a href="#" className='hover:text-red-600'>About Us</a>
            <a href="#" className='pr-1 hover:text-red-600'>FAQ</a>
          </div>
<h2 className="text-3xl font-bold p-5 pt-6 ml-14 ">Welcome  to Blood and tissue supply <br /> chain Managment System</h2>
          <h1 className="text-2xl font-bold pt-10  px-64 pb-3">
            Register As Individual
          </h1>

          <div className="mt-1 space-y-1 md:mx-0">
            {[
              { label: 'E-mail', name: 'email', placeholder: 'jocedoc32@gmail.com' },
              { label: 'Password', name: 'password', placeholder: '********' },
              { label: 'User Name', name: 'username', placeholder: 'jdoc' },
              { label: 'P.O.BOX', name: 'pobox', placeholder: 'enter P.O.BOX' },
              { label: 'Blood Type', name: 'bloodType', placeholder: 'enter your blood type' },
              { label: 'Medical History', name: 'medicalHistory', placeholder: 'enter your medical history' }
            ].map((field, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <label className="font-medium text-gray-900 w-60 ml-11">{field.label}:</label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-2/3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-48 -mt-11">
        <button
          type="button"
          onClick={() => navigate(-1)} // Go back to the previous page
          className="w-28 ml-56 bg-slate-600 text-white py-1 rounded-md hover:bg-red-700 transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit} // Handle form submission
          className="w-28 mx-4 mr-24 bg-slate-600 text-white py-1 rounded-md hover:bg-red-700 transition"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Asindiviual;
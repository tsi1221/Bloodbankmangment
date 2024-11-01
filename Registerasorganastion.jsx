// eslint-disable-next-line no-unused-vars
import React from 'react';
import p1 from '../Header/img/image copy.png';
// import g2 from '../Header/img/grainet.png';
// import { useNavigate } from 'react-router-dom';

function Registerasorganastion() {
  return (
    <>
    
      <div className="flex bg-[#756c6c] fixed p-4">
        <img src={p1} alt="Logo" className="h-28 w-44 ml-[3rem]" />
        {/* <img src={g2} className='h-[30rem]  w-[21rem]' alt="Banner" /> */}
      </div>

      <div className="flex justify-center space-x-8 bg-[#ce8080] text-white p-2 text-xl">
        <a href="#" className='hover:text-red-600'>Home</a>
        <button className="bg-slate-600 rounded-md p-2 hover:bg-red-400">Sign Up</button>
        <button className="bg-slate-600 rounded-md p-2 hover:bg-red-400">Sign In</button>
        <a href="#" className='hover:text-red-600'>About Us</a>
        <a href="#" className='hover:text-red-600'>FAQ</a>
      </div>
      
      <div className="text-center mt-10">
        <h3 className='font-bold text-3xl text-slate-900'>
          Welcome to Blood and Tissue Supply <br /> Chain  Management System
        </h3>
      </div>

      <div className="text-center mt-6">
        <h2 className="font-bold text-3xl">Register As Organization</h2>
      </div>

      <div className="flex flex-col items-center mt-6 space-y-4">
        {[
          { label: 'Organization Name', placeholder: 'Enter organization name' },
          { label: 'Organization Address', placeholder: 'Enter organization address' },
          { label: 'E-mail Address', placeholder: 'jocedoc32@gmail.com' },
          { label: 'User Name', placeholder: 'jdoc' },
          { label: 'Password', placeholder: '********' },
        ].map((field, index) => (
          <div key={index} className="flex flex-col w-1/2">
            <label className="font-medium text-gray-900 mb-1">{field.label}</label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
          Submit
        </button>
      </div>
      
    </>
  );
}

export default Registerasorganastion;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import p1 from '../Header/img/image copy.png';

function Healthcondion() {
    const [healthCondition, setHealthCondition] = useState('');

    return (
        <>
            <div className="flex flex-col bg-white min-h-screen">
                <div className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-4 z-10">
                    <img src={p1} alt="Logo" className="h-16" />
                    <div className="text-black text-3xl font-bold md:text-sm ml-2 md:ml-52 flex flex-wrap  space-x-4 items-center justify-center mt-2 md:mt-0">
                        <a className="hover:text-red-600" href="#">Home</a>
                        <a className="hover:text-red-600" href="#">About</a>
                        <a className="hover:text-red-600" href="#">Blood</a>
                        <a className="hover:text-red-600" href="#">Contact Us</a>
                    </div>
                    <div className="flex md:space-x-4 flex-row space-x-2">
                        <div className="relative">
                            <input
                                className="bg-red-100 border border-black rounded-full pl-10 py-2 w-40 md:w-60 focus:outline-none"
                                type="text"
                                placeholder="Search"
                            />
                            <CiSearch
                                size={25}
                                className="absolute right-4 top-2.5 hover:bg-red-200 text-black"
                            />
                        </div>
                        <button className="p-2 mr-2 w-28 text-base rounded-md bg-white border hover:bg-slate-200 border-gray-300">Sign Up</button>
                        <button className="p-2 w-28 text-base rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
                    </div>
                </div>

                <div className="flex flex-col  mt-32 mb-2  top-16 w-full z-10">
                    <p className="text-wrap font-semibold  ml-6 text-center md:text-left text-2xl md:text-3xl max-w-2xl">
                        Welcome to Blood and Tissue <br /> Supply Chain Management <br /> System
                    </p>
                </div>

                <div className="flex  mt-9">
                    <form className="bg-white p-4 w-full max-w-md">
                        <h2 className="text-3xl font-bold mb-1">Donor Qualification Form</h2>
                        <div className="mb-2">
                            <label className="block text-gray-700 mb-2   font-bold ml-3 text-2xl" htmlFor="healthCondition">
                                1. What is your health condition today?
                            </label>
                            <textarea
                                 id="healthCondition" // Unique id for accessibility and autofill
                                 name="healthCondition" 
                                  value={healthCondition}
                                   type="text"
                                onChange={(e) => setHealthCondition(e.target.value)}
                                className="border border-gray-400   rounded-xl w-[55rem]  text-gray-600 h-36" // Adjust height for width
                                placeholder="   Describe your health condition..."
                                required
                            />
                        </div>
                          
                          <div className="bg-red-200 fixed -mt-[5rem] rounded-xl py-1 px-1 hover:bg-red-500 text-black ml-[58rem] "><button className='p-4 px-6 hover:bg-red-500'>submit</button>
                          </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Healthcondion;
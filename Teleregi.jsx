/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import g2 from '../Header/img/grainet.png';
import p1 from '../Header/img/image copy.png';
import { useNavigate } from 'react-router-dom';

function Teleregi() {
    const navigate = useNavigate();
    const [residence, setResidence] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!residence || !cellPhone || !organization) {
            setError('Please fill in all required fields.');
            return;
        }

        // Handle form submission logic here (e.g., save data)

        // Navigate to the next page
        navigate('/citylast'); // Change '/next-page' to your desired route
    };

    return (
        <div className="flex flex-col md:flex-row px-4 fixed md:px-28 -ml-28 w-[100rem] ">
            <div className="bg-[#756c6c] flex flex-col items-center">
                <img src={p1} className="h-24 w-40 mt-3" alt="Logo" />
                <img src={g2} className="h-[30rem] w-[21rem]  " alt="Banner" />
            </div>

            <div className="flex-1 bg-[#faf9f9] flex  flex-col justify-center">
                <div className="text-white p-2 space-x-24  justify-center  bg-[#ce8080] text-xl">
                    <a href="#" className='hover:text-red-600'>Home</a>
                    <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign In</button>
                    <button className="bg-[#756c6c] rounded-md p-1 hover:bg-red-400">Sign Up</button>
                    <a href="#" className='hover:text-red-600'>About Us</a>
                    <a href="#" className='hover:text-red-600'>FAQ</a>
                </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-center mt-6 ">
                    Welcome to Blood and Tissue <br /> Supply Chain Management <br /> System
                </h1>

                <div className="flex items-center justify-center   mt-10">
                    <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="residence">
                                Residence (Telephone)
                            </label>
                            <input
                                type="text"
                                id="residence"
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your residence phone"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="cellPhone">
                                Cell Phone
                            </label>
                            <input
                                type="text"
                                id="cellPhone"
                                value={cellPhone}
                                onChange={(e) => setCellPhone(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your cell phone"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="organization">
                                Organization
                            </label>
                            <input
                                type="text"
                                id="organization"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your organization"
                                required
                            />
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => navigate(-1)} // Go back to the previous page
                                className="bg-red-200 text-black rounded px-4 py-2 hover:bg-red-900 transition"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-red-200 text-black rounded px-4 py-2 hover:bg-red-900 transition"
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

export default Teleregi;
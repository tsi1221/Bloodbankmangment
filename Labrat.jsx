// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import {  BsChevronRight } from "react-icons/bs";

const Labrat = () => {
  return (
    <div className="w-64 h-screen bg-white p-2 pt-4 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center ">
    
        <span className="font-semibold text-2xl text-red-600">Labratorist</span>
      </div>

      {/* Favorites and Recently */}
      <div className="flex gap-3 mb-3">
        <span className="text-gray-500">Favorites</span>
        <span className="text-gray-300">Recently</span>
      </div>

      {/* Manage Account Section */}
      <ul className="mb-8">
        <li className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">•</span> View blood unit list
        </li>
        <li className="mb-6 flex items-center text-gray-700">
          <span className="mr-2">•</span> create new account
        </li>
      </ul>

      {/* Dashboards Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Dashboards
      </div>
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
          <HiOutlineViewGrid className="mr-3" /> Checkout list
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />Poluted
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
          Non poluted
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
         
        </li>
      </ul>

      {/* Pages Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Pages
      </div>
      <ul>
        {/* First Page Link (Expanded) */}
        <li className="mb-2">
          <div className="flex items-center text-gray-700 p-2">
            <BsChevronRight className="mr-2" />{" "}
            <FaEnvelope className="mr-2 text-xl" /> Sund analyzed blood unit
          </div>
          {/* Sub-links */}
          <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
        view notification
        </li>  
        </li>

        {/* Other Page Links (Collapsed) */}
     
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaChevronRight className="mr-2" /> <FaCog className="mr-2" />{" "}
        setting
        </li>
       
       


      </ul>
    </div>
  );
};

export default Labrat;

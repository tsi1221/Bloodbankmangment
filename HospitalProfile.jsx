// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import {  BsChevronRight } from "react-icons/bs";

const HospitalProfile = () => {
  return (
    <div className="w-64 h-screen bg-white p-2 pt-4 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center ">
      <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <span className="font-semibold text-2xl ">Hospital</span>
      </div>

      {/* Favorites and Recently */}
      <div className="flex gap-3 mb-3">
        <span className="text-gray-500">Favorites</span>
        <span className="text-gray-300">Recently</span>
      </div>

      {/* Manage Account Section */}
      <ul className="mb-8">
        <li className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">•</span>Check existed blood unit
        </li>
        <li className="mb-6 flex items-center text-gray-700">
          <span className="mr-2">•</span> Check amount of blood unit
        </li>
      </ul>

      {/* Dashboards Section */}
      
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
          <HiOutlineViewGrid className="mr-3" />Over view
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />View Report
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
         view order
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />send request
        </li>
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
            <FaEnvelope className="mr-2 text-xl" /> View  notification
          </div>
          {/* Sub-links */}
          
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

export default HospitalProfile;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import {  BsChevronRight } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white p-4 pt-24 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <span className="font-semibold text-lg">Kumneger</span>
      </div>

      {/* Favorites and Recently */}
      <div className="flex gap-3 mb-3">
        <span className="text-gray-500">Favorites</span>
        <span className="text-gray-300">Recently</span>
      </div>

      {/* Manage Account Section */}
      <ul className="mb-8">
        <li className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">•</span> Manage Account
        </li>
        <li className="mb-6 flex items-center text-gray-700">
          <span className="mr-2">•</span> Create New Account
        </li>
      </ul>

      {/* Dashboards Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Dashboards
      </div>
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
          <HiOutlineViewGrid className="mr-3" /> Overview
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaCog className="mr-3" /> Manage
          Account
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
          Donation History
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaEnvelope className="mr-3" />{" "}
          Contact
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
            <HiOutlineViewGrid className="mr-2" /> Manage account
          </div>
          {/* Sub-links */}
          <ul className="ml-6">
            <li className="mb-4 text-gray-700">View</li>
            <li className="mb-4 text-gray-700">Update Profile</li>
            <li className="mb-4 text-gray-700">Delete Profile</li>
            <li className="mb-4 text-gray-700">Documents</li>
          </ul>
        </li>

        {/* Other Page Links (Collapsed) */}
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaChevronRight className="mr-2" /> <FaCog className="mr-2" /> Create
          new account
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaChevronRight className="mr-2" /> <FaCog className="mr-2" />{" "}
          Schedule
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaChevronRight className="mr-2" /> <FaCog className="mr-2" />{" "}
          Notification
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaChevronRight className="mr-2" /> <FaCog className="mr-2" /> Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// src/components/WelcomePopup.jsx
import React from 'react';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl text-gray-400 font-bold mb-4">Welcome to My Portfolio Website!</h2>
        <p className="mb-6 text-gray-400">I'm glad to have you here!<br></br> It my 2D Portfolio website. <br></br>
        Kindly go through the 3D Portfolio through my Project Section.😊</p>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;

import React from 'react';

const VisitWebsitePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Check this out!</h2>
        <p className="mb-4 ">Here is the 3D version of my Portfolio Website.</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700 transition duration-200">
              Preview
            </button>
          </a>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitWebsitePopup;

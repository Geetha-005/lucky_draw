import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Lucky Draw Contest. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
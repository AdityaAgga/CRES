import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-5">
      <nav className="flex justify-between items-center container mx-auto px-4">
        <img src="C:/Users/sahaa/OneDrive/Desktop/community/logo community.jpg" alt="TradeX Logo" className="h-12" />
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#how-it-works" className="hover:text-gray-400">How it Works</a></li>
          <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
          <li><a href="#login" className="hover:text-gray-400">Sign In</a></li>
          <li><a href="#register" className="hover:text-gray-400">Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
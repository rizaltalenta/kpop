
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg border-b border-purple-500/20 py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          K-Pop Demon Hunter Creator
        </h1>
        <p className="text-gray-400 mt-1">Design Your Ultimate Supernatural Idol</p>
      </div>
    </header>
  );
};

export default Header;

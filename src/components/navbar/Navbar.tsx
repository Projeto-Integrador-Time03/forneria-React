import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/75 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-66">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-white hover:text-yellow-800 font-bold text-3xl">Fornearia 77</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium">Home</a>
              <a href="#" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium">About</a>
              <a href="#" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium">Services</a>
              <a href="#" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

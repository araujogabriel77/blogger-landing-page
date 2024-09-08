import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/hamburguer-menu.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 max-w-[90%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Blogger Logo" className="h-5 w-20" />  {/* Usa a logo SVG */}
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            <img src={menu} alt="Menu" />
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="dark-text p-2">HOME</a>
          <a href="#about" className="dark-text p-2">SERVICE</a>
          <a href="#about" className="dark-text p-2">PARTNER</a>
          <a href="#contact" className="text-white rounded-full ml-4 p-2 bg-[var(--default-darker-color)]">Contact Us</a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4">
          <a href="#home" className="block py-2 dark-text">HOME</a>
          <a href="#about" className="block py-2 dark-text">SERVICE</a>
          <a href="#about" className="block py-2 dark-text">PARTNER</a>
          <a href="#contact" className="block py-2 dark-text">Contact Us</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar

// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import logo from 'assets/images/logos/logo-text.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Khamgaon Online"
              className="h-8 w-auto rounded"
              fetchpriority="high"
            />
          </Link>

          <button
            className="md:hidden p-1.5 rounded-md hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <List size={20} className="text-gray-600" />
          </button>

          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute top-full left-0 w-full bg-white border-b md:border-0 md:static md:block md:w-auto`}
          >
            <ul className="md:flex md:space-x-6">
              {['Categories', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="block font-light px-4 py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
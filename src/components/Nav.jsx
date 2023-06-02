import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    // <Router> {/* Add the Router component here */}
      <header className=''>
        <div className='z-30 flex w-full bg-green-500 justify-between px-6 py-6 fixed'>
          <NavLink to='/' className='home cursor-pointer'>
            Home
          </NavLink>
          <NavLink to='/about' className='home cursor-pointer'>
            About
          </NavLink>
          <NavLink to='/services' className='home cursor-pointer'>
            Services
          </NavLink>
          <NavLink to='/contact' className='home cursor-pointer'>
            Contact
          </NavLink>
        </div>
      </header>
    // </Router> 
  );
};

export default Nav;

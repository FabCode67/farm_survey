import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    // <Router> {/* Add the Router component here */}
      <header>
        <div className='flex w-full bg-green-500 justify-between px-6 py-6'>
          <NavLink to='/' className='home cursor-pointer'>
            Home
          </NavLink>
          <NavLink to='/login' className='home cursor-pointer'>
            Login
          </NavLink>
        </div>
      </header>
    // </Router> 
  );
};

export default Nav;

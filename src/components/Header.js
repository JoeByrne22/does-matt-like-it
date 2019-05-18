import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <button label="Red"><Link to="/">Home</Link></button>
      <button label="Blue"><Link to="/">Home</Link></button>
      <button label="Green"><Link to="/things">Index</Link></button>
      <button label="Yellow"><Link to="/things/new">Add a new Scenario</Link></button>
      <button label="Orange"><Link to="/login">Login</Link></button>
      <button label="Silver"><Link to="/register">Sign in</Link></button>
    </nav>
  );
}


export default Header;

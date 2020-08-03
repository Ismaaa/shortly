import React from 'react';

const Navbar = () => (
  <nav className="Navbar">
    <img src="/assets/logo.svg" alt="Shortly" />
    <div className="Navbar__burger">
      <span className="Navbar__burger-slice" />
      <span className="Navbar__burger-slice" />
      <span className="Navbar__burger-slice" />
    </div>
  </nav>
);

export default Navbar;

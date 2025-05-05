
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center space-x-2">
        <span className="bg-gradient-to-r from-eclinic-600 to-eclinic-400 bg-clip-text text-transparent text-2xl font-heading font-bold">
          Eclinic
        </span>
      </Link>
    </div>
  );
};

export default NavbarLogo;

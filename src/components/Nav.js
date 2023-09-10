import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <ul className= "nav-links">
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/men">
            Men
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/women">
            Women
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/kids">
            Kids
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/account">
            <MdAccountCircle className='accountIcon' />
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/cart">
            <FiShoppingCart className='cartIcon' />
            <span className='cart-total-item'>0</span>
          </Link>
        </li>
      </ul>

      {/*<div className='mobile-menu-button' onClick={toggleMobileMenu}>
        {mobileMenuOpen ? (
          <CgClose name='close-outline' className='closeIcon' />
        ) : (
          <CgMenu name='menu-outline' className='outlineIcon' />
        )}
        </div>*/}
    </div>
  );
}

export default Navbar;

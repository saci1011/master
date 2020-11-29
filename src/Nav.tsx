import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

    const navStyle ={
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <img src ="/208px-DaimlerLogo.svg.png"/>
        <ul className="nav-links">
            <Link style={navStyle} to='/Home'  >
            <li>Home</li>
            </Link>
            <Link style={navStyle} to='/About' >
            <li>About</li>
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;
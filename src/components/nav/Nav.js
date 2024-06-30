import React from 'react';

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav-container'>
      <ul className='nav'>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}


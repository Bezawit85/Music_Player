import React from 'react';
import './navigation.css';

const Navbar: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  return (
    <div className={`navigation ${transparent ? 'transparent' : ''}`}>
      <ul className='lists'>
        <li><a href="/home">Home</a></li>
        <li><a href="/collection">My Collection</a></li>
      </ul>
    </div>
  );
};

export default Navbar;

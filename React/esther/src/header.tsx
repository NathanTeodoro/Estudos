import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header id='home' className='header'>
      <div className="header-container">
        <img src="your-image.jpg" alt="Your Image" />
        <h1>{title}</h1>
        <p>Professora</p>
      </div>
    </header>
  );
};

export default Header;
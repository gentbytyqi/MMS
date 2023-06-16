import React from 'react';

import logo from '../../logo/logo.png'; // Import the image file

const Header = () => {
  const headerStyle = {
    backgroundColor: 'white',
    color: '#132644',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  };

  const logoStyle = {
    height: '40px',
    width: '250px', // Adjust the width of the logo as needed
    marginRight: '10px', // Add some space between the logo and the title
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    margin: '0',
  };

  const versionStyle = {
    fontSize: '12px',
    marginLeft: '10px',
  };

  return (
    <header style={headerStyle}>
      {/* Insert your header content here */}
      <img src={logo} alt="Logo" style={logoStyle} /> {/* Add the image element */}
    </header>
  );
}

export default Header;

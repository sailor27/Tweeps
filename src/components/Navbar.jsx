import React from 'react';

function Navbar(){
  var navLinkStyles = {
    listStyle: 'none',
    display: 'flex',
    width: '300px',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  var navLinkStyles2 = {
    border: '2px solid black',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '10px',
    paddingLeft: '10px',
    height: '3em',
    fontWeight: 'bold'
  };
  return (
    <ul style={navLinkStyles}>
      <li style={navLinkStyles2}>Home</li>
      <li style={navLinkStyles2}>Notifications</li>
      <li style={navLinkStyles2}>Messages</li>
    </ul>
  );
}

export default Navbar;

// import React from 'react';
// import logo from '../logo.png';
// import './Header.css'; // Assuming you have a CSS file for Header styles

// function Header({ showSmallLogo }) {
//   return (
//     <div className={`header ${showSmallLogo ? 'small-logo' : ''}`}>
//       <img src={logo} alt="Logo" className="logo" />
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <img src="/logo.png" alt="Logo" className="header-logo" />
    </div>
  );
}

export default Header;

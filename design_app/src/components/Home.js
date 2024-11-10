import React from 'react';
import UploadButton from './UploadButton';
import '../styles/Home.css';

function Home({ setShowSmallLogo }) {
  return (
    <div className="home">
      <img src="/logo.png" alt="Logo" className="home-logo" />
      <UploadButton setShowSmallLogo={setShowSmallLogo} />
    </div>
  );
}

export default Home;


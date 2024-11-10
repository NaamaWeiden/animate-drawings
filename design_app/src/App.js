// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import UploadButton from './components/UploadButton';
// import ImageWithDots from './components/ImageWithDots';
// import './styles.css';

// function App() {
//   const [showSmallLogo, setShowSmallLogo] = useState(false);

//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<UploadButton setShowSmallLogo={setShowSmallLogo} />} />
//           <Route path="/image-with-dots" element={<ImageWithDots />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ImageWithDots from './components/ImageWithDots'; // Create this component as needed
import Header from './components/Header';
import './App.css';
import VideoPage from './components/VideoPage';

function App() {
  const [showSmallLogo, setShowSmallLogo] = useState(false);
// useEffect(()=>{console.log('show',showSmallLogo);},[showSmallLogo])
  return (
    <Router>
      <div className="App">
        {showSmallLogo && <Header />}
        <Routes>
          <Route path="/" element={<Home setShowSmallLogo={setShowSmallLogo} />} />
          <Route path="/image-with-dots" element={<ImageWithDots />} />
          <Route path='/video-page' element={<VideoPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



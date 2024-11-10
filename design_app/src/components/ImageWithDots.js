// import React from 'react';
// import Header from './Header';
// import { useNavigate } from 'react-router';

// function ImageWithDots() {
//   const navigate=useNavigate();

//   return (
//     <div className="image-with-dots">
      
//       <h1>Image with Dots</h1>
//       <button onClick={()=>navigate('/video-page')}>Go to video</button>
//       {/* Add more content or functionality here */}
//     </div>
//   );
// }

// export default ImageWithDots;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import Header from './Header'; 
// import '../styles.css'

// function ImageWithDots() {
//     const [imagePath, setImagePath] = useState(null);
//     const [dots, setDots] = useState([]);
//     const navigate=useNavigate();

//     useEffect(() => {
//         // Function to fetch image and dots from server
//         const fetchImageData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/upload'); // Adjust URL as per your server route
//                 const { pic, dots } = response.data;
//                 setImagePath(pic);
//                 setDots(dots);
//             } catch (error) {
//                 console.error('Error fetching image data:', error);
//             }
//         };

//         fetchImageData();
//     }, []); // Empty dependency array ensures this runs only once on component mount

//     return (
//         <div>
//             <h1 style={{position:'relative',left:'41vw'}}>Image with Dots</h1>
//             <button style={{position:'relative' , left:'45vw',top:'47vh'}} className='next-page-button' onClick={()=>navigate('/video-page')}>Go to video</button>
//             {imagePath && <img src={imagePath} alt="upload" />}
//             <ul>
//                 {dots.map((dot, index) => (
//                     <li key={index}>{`Dot ${index + 1}: (${dot.x}, ${dot.y})`}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ImageWithDots;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; 
import '../styles.css';

function ImageWithDots() {
    const [imagePath, setImagePath] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/processed-image',{responseType: "blob"});
                const pic = response.config.url;
                console.log('Image path:', pic);  // Debugging print
                setImagePath(pic);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, []);

    return (
        <div>
            <h1 style={{ position: 'relative', left: '41vw' }}>Image with Dots</h1>
            <button style={{ position: 'relative', left: '45vw', top: '6vh' }} className='next-page-button' onClick={() => navigate('/video-page')}>Go to video</button>
            {imagePath && <img src={imagePath} style={{ left: '30vw', position: 'relative', height: '54vh', top: '-1vh' }} alt="Processed" />}
        </div>
    );
}

export default ImageWithDots;








// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// function UploadButton({ setShowSmallLogo }) {
//     const fileInputRef = useRef(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const navigate = useNavigate();

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setSelectedImage(reader.result);
//                 setShowSmallLogo(true);
//             };
//             reader.readAsDataURL(file);

//             // Create FormData object
//             const formData = new FormData();
//             formData.append('file', file);

//             try {
//                 // Send the file to the backend
//                 const response = await axios.post('http://localhost:5000/upload', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error uploading file:', error);
//             }
//         }
//     };

//     const handleNextPage = () => {
//         navigate('/image-with-dots');
//     };

//     return (
//         <div className="upload-button-container">
//             {<Header showSmallLogo={showSmallLogo} />}
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//             />
//             <button className="upload-button" onClick={handleButtonClick}>
//                 Upload a picture
//             </button>
//             {selectedImage && (
//                 <div className="image-preview">
//                     <img src={selectedImage} alt="Selected" className="preview-img" />
//                     <button className="next-page-button" onClick={handleNextPage}>
//                         Go to the next page
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UploadButton;



// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function UploadButton({ setShowSmallLogo }) {
//     const [selectedFile, setSelectedFile] = useState();
//     const fileInputRef = useRef(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const navigate = useNavigate();

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setSelectedImage(reader.result);
//                 //  setShowSmallLogo(true);
//             };
//             reader.readAsDataURL(file);

//             // Create FormData object
//             // const formData = new FormData();
//             // formData.append('file', file);

//             // try {
//             //     // Send the file to the backend
//             //     const response = await axios.post('http://localhost:5000/upload', formData, {
//             //         headers: {
//             //             'Content-Type': 'multipart/form-data',
//             //         },
//             //     });
//             //     console.log(response.data);
//             // } catch (error) {
//             //     console.error('Error uploading file:', error);
//             // }
//         }
//     };

//     const handleNextPage = async () => {

//         if (selectedFile) {
//             navigate('/image-with-dots');
//             const formData = new FormData();
//             formData.append('file', selectedFile);

//             try {
//                 // Send the file to the backend
//                 const response = await axios.post('http://localhost:5000/upload', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error uploading file:', error);
//             }
//         }
//         else {
//             console.log('no file');
//         }
//     };

//     return (
//         <div className="upload-button-container">
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//             />
//             <button className="upload-button" onClick={handleButtonClick}>
//                 Upload a picture
//             </button>
//             {selectedImage && (
//                 <div className="image-preview">
//                     <img src={selectedImage} alt="Selected" className="preview-img" />
//                     <button className="next-page-button" onClick={() => { handleNextPage(); setShowSmallLogo(true); }}>
//                         Go to the next page
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UploadButton;

import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadButton({ setShowSmallLogo }) {
    const [selectedFile, setSelectedFile] = useState();
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNextPage = async () => {
        if (selectedFile) {
            navigate('/image-with-dots');
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                // Send the file to the backend
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    responseType: 'blob', // Ensure the response is in blob format
                });

                const imageBlob = response.data;
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setProcessedImage(imageObjectURL);
                
                setShowSmallLogo(true);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.log('no file');
        }
    };

    return (
        <div className="upload-button-container">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button className="upload-button" onClick={handleButtonClick}>
                Upload a picture
            </button>
            {selectedImage && (
                <div className="image-preview">
                    <img src={selectedImage} alt="Selected" className="preview-img" />
                    <button className="next-page-button" onClick={handleNextPage}>
                        Go to the next page
                    </button>
                </div>
            )}
            {processedImage && (
                <div className="processed-image-preview">
                    <img src={processedImage} alt="Processed" className="preview-img" />
                </div>
            )}
        </div>
    );
}

export default UploadButton;



import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Button,notification } from "antd"
import "./Upload.css"

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });


  const navigate = useNavigate();


  const handleClick = () => {
    if (selectedFile) {
    navigate('/Results', { state: { selectedFile, dimensions } });
    console.log("Button is Clicked");
    }
    else
    {
      alert("No File Selected");
    }
  }

  


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          setDimensions({
            width: img.width,
            height: img.height,
          });
        };
      };

      reader.readAsDataURL(file);
    }
  };


  return (
    <div className='container-1'>
      <h1 style={{color:'yellow'}}>File Upload Section</h1>
      <div className='container-2'>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <Button primary onClick={handleClick}>
         Go
        </Button>
      </div>
      {selectedFile && (
        <div>
        <div className='container-3'>
          <h3 style={{color:"yellow"}}>Selected File:</h3>
          <p>Name: {selectedFile.name}</p>
          <p>Type: {selectedFile.type}</p>
          <p>Size: {selectedFile.size} bytes</p>
          <h3 style={{color:"yellow"}}>Image Dimensions:</h3>
          <p>Width of Original Image: {dimensions.width} px</p>
          <p>Height of Original Image: {dimensions.height} px</p>
          </div>
          <img src={URL.createObjectURL(selectedFile)} alt="File Not Selected" /></div>
      )}
    </div>
  );

};

export default FileUpload;

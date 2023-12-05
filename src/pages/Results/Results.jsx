import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ApiClient from '../../ApiClient';
import { message,Spin} from 'antd';
import "./Results.css"

const Results = () => {
  const canvasRef = useRef();
  const [rectangles,setRectangles]=useState([]);
  const [imgURL, setImgURL] = useState("");
  const location = useLocation();
  const { selectedFile, dimensions } = location.state || {};
  const [loading,setLoading]=useState(true);
  const apiClient=new ApiClient();

//  const helpMe=[
//   { xMin: 10, yMin: 10, xMax: 60, yMax: 60 },
//   { xMin: 70, yMin: 70, xMax: 100, yMax: 100 },
//   { xMin: 1200, yMin: 0, xMax: 1280, yMax: 720 },
//  ];

  const drawRectangle = () => {
    console.log(rectangles.length);
    const context = canvasRef.current.getContext("2d");
    context.lineWidth = 1;
    rectangles.forEach(function(item){
      context.strokeStyle = getRandomColor();
      const x = (item.xMin / dimensions.width) * canvasRef.current.width;
      const y = (item.yMin / dimensions.height) * canvasRef.current.height;
      const width = ((item.xMax - item.xMin) / dimensions.width) * canvasRef.current.width;
      const height = ((item.yMax - item.yMin) / dimensions.height) * canvasRef.current.height;
      context.strokeRect(x, y, width, height);   
     });
  };

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async function getRectangles(){
    try {
     const getRectangles=await apiClient.getRectangles(dimensions.width,dimensions.height); 
     setRectangles(getRectangles)
    } catch (error) {
     console.log("Error: ",message.error);
    };
    setLoading(false);
  }

   useEffect(() => {
    drawRectangle();
   }, [rectangles]);
   

   useEffect(() => {
     setImgURL(URL.createObjectURL(selectedFile));
     getRectangles();
   }, [selectedFile]);
   
  return (
    <div>
      <h1 style={{color:'yellow'}}>Results Page</h1>
      <div className='about-section'>
      <h2>Image Dimensions:</h2>
      <p>Width: {dimensions.width} px</p>
      <p>Height: {dimensions.height} px</p>
      </div>
      <div class="result-section">
      {loading && <Spin tip="Loading" classname="Spinner"/>}
      <canvas
    ref={canvasRef}
    className={loading ? "blurred" : ""}
    style={{
      width: dimensions.width,
      height: dimensions.height,
      background: `url(${imgURL})`,
    }}
  />
      </div>
    {/* <img src={URL.createObjectURL(selectedFile)}/> */}
    </div>
  );
};

export default Results;

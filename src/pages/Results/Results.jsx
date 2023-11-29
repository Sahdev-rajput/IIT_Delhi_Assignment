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


  const drawRectangle = () => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, dimensions.width, dimensions.height); 
    context.strokeStyle = "red";
    context.lineWidth = 1;
    rectangles.forEach(function(item){
      context.strokeRect(item.xMin,item.yMin,item.xMax-item.xMin, item.yMax-item.yMin);
    });
  };

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
   }, [rectangles])
   

   useEffect(() => {
     setImgURL(URL.createObjectURL(selectedFile));
     getRectangles();
   }, [selectedFile])
   
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

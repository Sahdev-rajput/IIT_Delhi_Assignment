import React from 'react'
import {Routes, Route} from 'react-router-dom';
import FileUpload from "./pages/Upload/Upload.jsx"
import Results from './pages/Results/Results.jsx';


const AllRoutes = () => {
  return (
    <Routes>
    <Route  path="/" element={<FileUpload/>}/>
    <Route  path="/Results" element={<Results/>}/> 
    </Routes>
  )
}

export default AllRoutes
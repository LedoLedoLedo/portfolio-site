import React from 'react';
import './App.css';
import Home from './routes/Home';
import Contact from './routes/Contact'
import Projects from './routes/Projects';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';
 


function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/project' element={<Projects/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
   </>
  ) 
}

export default App;

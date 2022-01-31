import React from 'react';
import './App.css'
import Content from './Component/Content';
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import UpcommingEvents from './Component/UpcommingEvents';
import Content2 from './Component/Content2';
import Footer from './Component/Footer';
import Ourclasses from './Component/Ourclasses';
import bgg from './bgg.jpg'

function App() {
  return (
    
    <div className='lg:px-40 mx-2 bg-cover bg-no-repeat ' style={{backgroundImage:`url(${bgg})`}}>
      <Navbar/>
      <Content/>
      <Content2/>
      <Welcome/>
      <UpcommingEvents/>
      <Ourclasses/>
      <Footer/>
    </div>
      
    
  );
}

export default App;
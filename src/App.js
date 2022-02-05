import React from 'react';
import './App.css'
import Content from './Component/Content';
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import UpcommingEvents from './Component/UpcommingEvents';
import Content2 from './Component/Content2';
import Footer from './Component/Footer';
import Ourclasses from './Component/Ourclasses';
import Home from './Component/Home';
import bgg from './bgg.jpg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homing from './Component/Homing';
import Aboutus from './Component/Aboutus';
import Classesinside from './Component/Classesinside';
import Teacherinside from './Component/Teacherinside';
import Contact from './Component/Contact';
function App() {
  return (
    <BrowserRouter>
      <div className='lg:px-40 mx-2 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${bgg})` }}>
        <Navbar />
        <Content />
        {/* <Homing/> */}
        <Routes>
          <Route path="/" element={<Homing />} />

          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/classes" element={<Classesinside />} />

          <Route path="/teachers" element={<Teacherinside />} />

          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>


  );
}

export default App;
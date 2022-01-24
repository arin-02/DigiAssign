import React from 'react';
import Content from './Component/Content';
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import UpcommingEvents from './Component/UpcommingEvents';
import Content2 from './Component/Content2';
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <div className='mx-40'>
      <Navbar/>
      <Content/>
      <Content2/>
      <Welcome/>
      <UpcommingEvents/>
      <Footer/>
    </div>
      </>
    
  );
}

export default App;

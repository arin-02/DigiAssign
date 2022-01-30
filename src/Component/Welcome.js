import React from 'react';
import { GiTeacher,GiBookshelf } from "react-icons/gi";
import { ImBook } from "react-icons/im";

const Welcome = () => {
  return (<div className='text-center mt-32'>
    <h1 className='text-5xl font-bold'>
      Welcome to <span className='text-orange-500'>Shelly</span>
    </h1>
    <p className='text-xl mt-9'>Ecosystem blended learning off-the-shelf learning storytelling explainer animation completion criteria.</p>
    <div className='welcome-cards block md:flex justify-evenly mt-14 items-center'  >
      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="center-bottom">
        
        <GiTeacher className='w-12 text-yellow-700 mx-auto text-5xl my-auto'  />
        <h3 className='mt-10 text-2xl font-bold'>Experienced Teachers</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
      </div>


      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' data-aos="fade-up" data-aos-duration="1800" data-aos-anchor-placement="center-bottom">
        <GiBookshelf className='w-20 text-yellow-700 mx-auto text-5xl my-auto' />
        <h3 className='mt-10 text-2xl font-bold'>Best Learning Program</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Learn More</button>
      </div>
      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="center-bottom">
        <ImBook className='w-20 text-yellow-700 mx-auto text-5xl my-auto'/>
        <h3 className='mt-10 text-2xl font-bold'>Global Certificate</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
      </div>
    </div>
  </div>);
};

export default Welcome;

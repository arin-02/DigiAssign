import React from 'react';
import Cardour from './Cardour';
import { GrLinkNext,GrLinkPrevious } from "react-icons/gr";

function Ourclasses() {
  return(
      <div className='text-center mt-32'>
          <h1 className='text-5xl font-bold'>
      Our <span className='text-orange-500'>Classes</span>
    </h1>
    <p className='text-xl mt-9'>Application programming interface voice-over (vo) instructor led training curation, user created content</p>

        <div className="block  mt-6 justify-center ">
        <div className="up gap-x-8 block sm:flex  justify-center">

        <div className="ca mt-5 sm:mt-0"><Cardour /></div>
        

        </div>

       
        

        </div>


      </div>
      )
}

export default Ourclasses;

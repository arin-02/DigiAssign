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
        <div className="up gap-x-8 flex justify-center">

        <div className="ca rounded-3xl "><Cardour imgurl="	https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"/></div>
        <div className="ca rounded-3xl"><Cardour imgurl="	https://shelly.merku.love/wp-content/uploads/2020/11/class4-300x200.png"/></div>
        <div className="ca rounded-3xl"><Cardour imgurl="	https://shelly.merku.love/wp-content/uploads/2020/11/class5-300x200.png"/></div>

        </div>

       
        <div className="flex  mt-4 justify-between" style={{color:"#ff5707"}}>
        <div className="btn ">
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full  px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Classes</button>
        </div>
        <div className="flex gap-x-4 ">
            <GrLinkPrevious className='text-2xl mt-2 hover:text-3xl hover:font-semibold' />
            <GrLinkNext className='text-2xl mt-2 hover:text-3xl hover:font-semibold' />
            </div>
        </div>
        

        </div>


      </div>
      )
}

export default Ourclasses;

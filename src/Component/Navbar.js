import React from 'react';
import projectimg from './projectimg.png'
import { IoIosCall } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";


function Navbar() {
  return <div>
  <div className="start flex  pt-3 font-medium gap-x-2 lg:gap-x-10 xl:gap-x-52" >
  <div className="lefty pl-32 sm:pl-80 md:pl-0 text-xl flex  md:hidden lg:flex">
      <div className="imgg w-16 ">
      <img src={projectimg} alt="image" />
      </div>
      <div className="schooltext grid place-content-center " style={{color:"#ff5707"}}>
        SCHOOL
      </div>
      </div>
      <div className="right hidden md:flex gap-x-6 xl:gap-x-16 text-lg" style={{color:"#54595F"}}>
      <div className="callus flex gap-x-4">
      <div className="callicon w-6 mt-2">
      
      <IoIosCall className='text-4xl pr-1' style={{color:"#ff5707"}}/>
      </div>
      <div className="calliconright">
        <div className="calltext">
        CALL US
        </div>
        <div className="callnumber font-normal text-base">
        +91 8822747438
        </div>
      </div>
      </div>


      <div className="business flex gap-x-4">
      <div className="busicon w-8 "  >
      
      <AiFillClockCircle style={{color:"#ff5707"}} className=' text-4xl mt-2 rounded-full mr-4 '/>
      </div>
      <div className="busiconright">
        <div className="bustext">
        Business Hours
        </div>
        <div className="busnum  font-normal text-base">
        MON-FRI  8AM-5PM
        </div>
      </div>
      </div>


      <div className="location flex  gap-x-4">

      <div className="locicon w-8 mt-2">
      <HiLocationMarker style={{color:"#ff5707"}} className='text-4xl'/>
      </div>
      <div className="lociconright">
        <div className="loctext">
        Location
        </div>
        <div className="locnum  font-normal text-base">
        Sec-17,Chandigarh
        </div>
      </div>


      </div>

      </div>

  </div>
  <br/>
  
  <hr style={{color:"blue"}}/>

</div>;
}

export default Navbar;

import React from 'react';
import { IoIosCall } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  return <>
  <div className="insidecontact ">

      <div className="aboutusall  my-6">
          <div className="top">
            <ul className='flex gap-x-8'>
                <li>Home</li>
                <li className='list-disc'>Contacts Us</li>
            </ul>
          </div>
          <div className="heading text-3xl sm:text-5xl font-bold my-16">
          CONTACTS
          </div>
          </div>



            {/*  */}
            <div className="contactdetails sm:flex justify-between my-32 block">
            <div className="Contact Us font-bold w-64">
          <h1 className="text-xl">Contact Us</h1>
          <div className="callus flex gap-x-4 my-5">
            
            
      <div className="callicon w-6 mt-2">
      <IoIosCall className='text-4xl pr-1' style={{color:"#ff5707"}}/>
      </div>
      <div className="calliconright">
        <div className="calltext">
        CALL US
        </div>
        <div style={{color:"#54595F"}} className="callnumber font-normal text-base">
        +91 8822747438
        </div>
      </div>
          </div>



          <div className="business flex gap-x-4 my-5">
      <div className="busicon w-8 mt-2 "  >
      
      <AiFillClockCircle style={{color:"#ff5707"}} className=' text-4xl mt-2 rounded-full mr-4\ '/>
      </div>
      <div className="busiconright">
        <div className="bustext">
        Business Hours
        </div>
        <div style={{color:"#54595F"}} className="busnum  font-normal text-base">
        MON-FRI  8AM-5PM
        </div>
      </div>
      </div>



      <div className="location flex gap-x-4 my-5">

<div className="locicon w-8 mt-2">
<HiLocationMarker style={{color:"#ff5707"}} className='text-4xl'/>
</div>
<div className="lociconright">
  <div className="loctext">
  Location
  </div>
  <div style={{color:"#54595F"}} className="locnum  font-normal text-base">
  Sec-17,Chandigarh
  </div>
</div>


</div>

        </div>
    <div className="rightcontact  w-full sm:pl-20">
        <div className="head text-2xl sm:text-4xl font-semibold ">
            Talk to a Human
        </div>
        <div className="inpp sm:flex block ">
        <input className="sm:mx-2 border-solid border-blue-400 border-2  rounded-xl w-full  mt-3 md:w-full  h-12" placeholder="  Your Name"></input>
        <input className="sm:mx-2 border-solid border-blue-400 border-2  rounded-xl w-full mt-3 md:w-full  h-12" placeholder="  Your Email"></input>
        </div>
        <div className="my-8 grid  place-items-center ml-2">
            <input className=" border-solid border-blue-400 sm:ml-8 border-2 rounded-xl w-full sm:mr-10  w-full  h-24 " placeholder="   Message"></input>
          </div>
          <div>
            <input type="button" style={{backgroundColor:"#135e9e"}} className="bg-blue-700 ml-4 rounded-xl  w-40 h-12 text-white font-medium mb-5 sm:mb-0" value="Send a message" /> 
          </div>
    </div>




        </div>


  </div>
  </>;
}

export default Contact;

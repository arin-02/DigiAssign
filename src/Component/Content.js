import React from "react";
import { TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
export default function Content() {

  return (
  <div className="flex justify-between mt-4"> 
        <div className="first flex text-xl font-semibold">
          <ul className=" decoration-none hidden lg:flex gap-x-4 lg:gap-x-6" style={{color:"#135e9e"}}>
                <li>HOME</li>
                
                <li>
                CLASSES

                </li>
                <li>TEACHERS</li>
                <li>EVENTS</li>
                
                <li>CONTACTS</li>
            </ul>
        </div>
   
        <div className="text-2xl absolute lg:hidden">
                <a href="">
                <i className="fas fa-bars"></i>
                </a>
                

            </div>
        
        <div className="second  flex  text-xl sm:text-4xl sm:gap-x-8">

        <div className="one w-8" >
        
        <TiSocialLinkedinCircular className=" font-base" style={{color:"#F37335"}}/>
        </div>
        <div className="two w-8">
        <RiFacebookCircleLine className=" font-base" style={{color:"#F37335"}} />
        </div>
        <div className="three w-8">
        <TiSocialTwitterCircular className=" font-base" style={{color:"#F37335"}}/>
        </div>
        </div>
  </div>
  )
}

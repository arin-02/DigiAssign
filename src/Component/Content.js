import React from "react";
import lin from './lin.png'
import fac from './fac.png'
import twi from './twi.png'

export default function Content() {

  return (
  <div className="flex justify-between mt-4"> 
        <div className="first flex text-lg">
          <ul className="flex decoration-none gap-x-6" style={{color:"#135e9e"}}>
                <li>HOME</li>
                
                <li>
                CLASSES

                </li>
                <li>TEACHERS</li>
                <li>EVENTS</li>
                
                <li>CONTACTS</li>
            </ul>
        </div>
        <div className="second  flex gap-x-8">

        <div className="one w-8" >
        
        
        <img src={lin} alt="image " />
        </div>
        <div className="two w-8">
        <img src={fac} alt="image" />
        </div>
        <div className="three w-8">
        <img src={twi} alt="image" />
        </div>
        </div>
  </div>
  )
}

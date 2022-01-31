import React from "react";
import { TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import {Link} from 'react-scroll'


export default function Content() {

  return (
  <div className="flex justify-between mt-4"> 
        <div className="first flex text-xl font-semibold">
          <ul className="  decoration-none hidden lg:flex gap-x-4 lg:gap-x-6" style={{color:"#135e9e"}}>
                <li className="cursor-pointer hover:underline hover:decoration-red-700">HOME</li>
                
                <li className="cursor-pointer hover:underline hover:decoration-red-700">
                CLASSES

                </li>
                <li className="cursor-pointer hover:underline hover:decoration-red-700" ><Link className="cursor-pointer" to="allteachers" smooth={true} duration={700}> TEACHERS</Link></li>
                <li className="cursor-pointer hover:underline hover:decoration-red-700">EVENTS</li>
                
                <li className="cursor-pointer hover:underline hover:decoration-red-700">CONTACTS</li>
            </ul>
        </div>
   
        {/* <div className="text-2xl absolute lg:hidden">
                <a href="">
                <i className="fas fa-bars"></i>
                </a>
                

            </div> */}



           
  <div className="absolute ">
  <a className="  text-2xl absolute lg:hidden" data-mdb-toggle="offcanvas" href="#offcanvasExample" role="button"
  aria-controls="offcanvasExample">
  <i className="fas fa-bars"></i>
</a>


<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title text-4xl font-semibold" id="offcanvasExampleLabel">SCHOOL</h5>
    <button type="button" className="btn-close text-reset" data-mdb-dismiss="offcanvas" aria-label="Close"><ImCross style={{color:"red"}}/></button>
  </div>
  <div className="offcanvas-body">
    <div>
    What you want to choose?
    <hr/>
    </div>
    <ul className="font-medium" style={{color:"#ff5707"}}>
      <li className=" mt-3 text-2xl cursor-pointer">Home</li>
      <li className="mt-3">
      <div className="dropdown mt-3">
      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" style={{backgroundColor:"#ff5707"}}
        data-mdb-toggle="dropdown">
        Dropdown button
      </button>
      <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">9th Class</a></li>
        <li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">10th Class</a></li>
        <li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">12th Class</a></li>
      </ul>
    </div>
      </li>
      <li className="mt-3 text-2xl cursor-pointer">Teachers</li>
      <li className="mt-3 text-2xl cursor-pointer">Events</li>
      <li className="mt-3 text-2xl cursor-pointer">Contacts</li>
    </ul>
    
  </div>
</div>
</div>


        
        <div className="second  flex  text-xl sm:text-4xl sm:gap-x-8">

        <div className="one w-8" >
        
        <TiSocialLinkedinCircular className=" font-base hover:scale-125" style={{color:"#F37335"}}/>
        </div>
        <div className="two w-8">
        <RiFacebookCircleLine className=" font-base hover:scale-125" style={{color:"#F37335"}} />
        </div>
        <div className="three w-8">
        <TiSocialTwitterCircular className=" font-base hover:scale-125" style={{color:"#F37335"}}/>
        </div>
        </div>
  </div>
  )
}





import React from "react";
import { TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import {Link} from 'react-scroll'
import {Link as Lnk} from 'react-router-dom';

export default function Content() {

  return (
  <div className="flex justify-between mt-4"> 
        <div className="first flex text-xl font-semibold">
          <ul className=" contenthead decoration-none hidden lg:flex gap-x-4 lg:gap-x-6" style={{color:"#135e9e"}}>
                <Lnk to={'/'}><li className="content1 cursor-pointer hover:underline ">HOME</li>
                </Lnk>
                
                <Lnk to={'/aboutus'}> <li className="content1 cursor-pointer hover:underline ">ABOUT</li>
                </Lnk>

                <Lnk to={'/classes'}><li className="content1 cursor-pointer hover:underline ">
                CLASSES

                </li>
                </Lnk>
                <Lnk to={'/teachers'}><li className="content1 cursor-pointer hover:underline " > TEACHERS</li>
                </Lnk>
                
                
                <Lnk to={'/contacts'}><li className="content1 cursor-pointer hover:underline ">CONTACTS</li>
                </Lnk>
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
      <Lnk to={'/'}><li className=" mt-3 text-2xl cursor-pointer">Home</li></Lnk>
      <Lnk to={'/aboutus'}><li className=" mt-3 text-2xl cursor-pointer">About-Us</li></Lnk>
      <li className="mt-3">
      <div className="dropdown mt-3">
      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" style={{backgroundColor:"white",color:"#ff5707"}} 
        data-mdb-toggle="dropdown">
        CLASSES
      </button>
      <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
        <Lnk to={'/classes'}><li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">9th Class</a></li></Lnk>
        <Lnk to={'/classes'}><li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">10th Class</a></li></Lnk>
        <Lnk to={'/classes'}><li><a className="dropdown-item text-gray-700 text-lg font-semibold" href="#">12th Class</a></li></Lnk>
      </ul>
    </div>
      </li>
      <Lnk to={'/teachers'}><li className="mt-3 text-2xl cursor-pointer">Teachers</li></Lnk>
      
      <Lnk to={'/contacts'}><li className="mt-3 text-2xl cursor-pointer">Contacts</li></Lnk>
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





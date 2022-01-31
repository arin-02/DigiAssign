import React from "react";
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t4 from "./t4.jpg";
import { IoIosCall } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FiCalendar} from 'react-icons/fi'

export default function Footer() {
  return (
    <div id="allteachers" >
    <div className="teacher" data-aos="zoom-in" data-aos-duration="1000">
      <div className="Techers text sans-serif font-bold text-4xl text-center my-5 ">
        <h1>
          Our Awesome <span style={{ color: "#F37335" }}>Teachers</span>
        </h1>
      </div>
      <div className="textbelow text-center m-auto">
        <p>
          Rapid learning rapid authoring tools web based training (wbt) informal
          learning virtual classroom, roi instructional designer big data
        </p>
      </div>
      <div className="teachers block sm:flex my-10">
        <div className="teacherone pt-6 md:pt-0 margin mx-8 ">
          <img className="fimg rounded-lg " src={t1} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Polina Kerston</p>
          <p className="text-center font-semibold" style={{color:"#135e9e"}}>English Teacher</p>
        </div>
        <div className="teachertwo pt-6 md:pt-0 margin mx-8">
          <img className=" fimg  rounded-lg" src={t2} alt="image" />
          <p className="text-center font-bold my-2 text-xl" >Faadi Al Rahman</p>
          <p className="text-center font-semibold" style={{color:"#135e9e"}}>Maths Teacher</p>
        </div>
        <div className="teacherthree pt-6 md:pt-0 margin mx-8">
          <img className="fimg rounded-lg  " src={t2} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Faadi Al Rahman</p>
          <p className="text-center font-semibold" style={{color:"#135e9e"}}>Arts Teacher</p>
        </div>
        <div className="teacherfour pt-6 md:pt-0 margin mx-8">
          <img className="fimg rounded-lg" src={t4} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Chikelu Obasea</p>
          <p className="text-center font-semibold" style={{color:"#135e9e"}}>Instructor</p>
        </div>
      </div>
</div>


      <div className="footerform bg-orange-500 block sm:flex justify-center my-28 rounded-3xl items-center m-auto w-full ">
        <div className="my-10 text-white mx-10">
          <h1 className="text-4xl font-medium md:font-bold pt-5 sm:pt-0">Join Us</h1>
          <h1 className="text-4xl font-medium md:font-bold">and stay tuned!</h1>
          <p className="my-6 md:text-xl text-normal  margin-auto font-medium ">
            Curation active learning ecosystem learning content management
            system lxd lxp rapid learning
          </p>
        </div>
        <div className="info block my-10 mx-8">
          <div className="entry block sm:flex">
          <div className="1 grid place-items-center ">
            <input className="sm:mx-2 sm:w-32 rounded-xl w-full ml-4 mt-3 md:w-full mr-5  h-12" placeholder="  Your Name"></input>
            </div>
            <div className="2  grid  place-items-center  ml-3 sm:mt-0 ">
            <input className="sm:mx-2 sm:w-32 rounded-xl w-full mt-3 md:w-full mr-5  h-12" placeholder="  Your Email"></input>
            </div>
          </div>
          <div className="my-8 grid  place-items-center">
            <input className="rounded-xl h-24 w-full sm:w-64 md:w-96 " placeholder="   Message"></input>
          </div>
          <div>
            <input type="button" className="bg-blue-700 rounded-xl w-40 h-12 text-white font-medium mb-5 sm:mb-0" value="Send a message" /> 
          </div>
        </div>
      </div>





      <div className="footer flex my-28 justify-center">
        <div className="Contact Us font-bold">
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
      <div className="busicon w-8 "  >
      
      <AiFillClockCircle style={{color:"#ff5707"}} className=' text-4xl mt-2 rounded-full mr-4 '/>
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
        <div className="Quicklinks margin mx-10 lg:mx-8 w-52  ">
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="links font-medium mt-10" style={{color:"#135e9e"}}>
              <li className=" ll my-2 mt-6">
              <a href="">- About US</a>
             
              </li>
              <li className="ll my-2"><a href="">- Our Classes</a></li>
              <li className="ll my-2"><a href="">-  Teachers</a></li>
              <li className="ll my-2"><a href="">- Recent Events</a></li>
              <li className="ll my-2"><a href="">- Our News</a></li>
            </ul>
          </div>
        </div>


        <div className="alltags hidden lg:block">
        <div className="tags1 flex gap-x-4">
          <div className="im1 w-28 grid content-center">
            <img className="rounded-lg" src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large2.png" alt="" />
          </div>
          <div className="imright block">
            <div className="top font-semibold ">
            This Long-Awaited Technology May Finally Change the World
            </div>
            <div className="bottom flex mt-2 align-items-center">
            <FiCalendar className='  text-blue-900 p-1 text-3xl rounded-full mr-2' style={{color:"#ff5707"}}/>
                        <p className='text-sm grid content-center font-medium' style={{color:"#54595F"}}>November 28,2022</p>
            </div>
          </div>
        </div>

        <div className="tags2 mt-10  flex gap-x-4">
          <div className="im2 w-28 grid content-center">
            <img className="rounded-lg" src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large2.png" alt="" />
          </div>
          <div className="imright block">
            <div className="top font-semibold">
            The digital revolution in higher education
            </div>
            <div className="bottom flex mt-2 align-items-center">
            <FiCalendar className='  text-blue-900 p-1 text-3xl rounded-full mr-2' style={{color:"#ff5707"}}/>
                        <p className='text-sm grid content-center font-medium' style={{color:"#54595F"}}>November 28,2022</p>
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}

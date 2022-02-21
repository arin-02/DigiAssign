import React from 'react';
import abimg from './abimg.jpg'
import { BsFillPenFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
function Aboutus() {
  return (
      <div className="aboutusall my-6 ml-4">
          <div className="top">
            <ul className='flex gap-x-8'>
                <li>Home</li>
                <li className='list-disc'>About Us</li>
            </ul>
          </div>
          <div className="heading text-5xl font-bold my-16" >
          ABOUT US
          </div>


          <div className="allinside gap-x-20 block lg:flex ">

         
          <div className="divleft">
            <div className="heading">
              <div className="one text-3xl font-semibold">
                WELCOME TO
              </div>
              <div className="two text-3xl font-semibold" style={{color:"#ff5707"}}>
                SHELLY SCHOOL
              </div>
            </div>
            <div className="para my-12 text-lg font-normal  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reiciendis tenetur harum, corporis fuga voluptatem et soluta pariatur repudiandae eligendi atque? Architecto autem esse nostrum quas excepturi expedita, omnis laudantium temporibus, in asperiores accusantium quisquam sit laboriosam rerum quis dolorem. Ea consequuntur quia facilis excepturi ab reprehenderit, repellendus possimus accusamus.
            </div>
            
            
           
          <div className="work my-16">

          <div className="w-full  bg-gray-200 rounded-full">
          <div className="bg-purple-600 h-10 grid place-content-center text-medium font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width:"95%"}}> 95%</div>
        </div>

          </div>

          <div className="w-full my-6 bg-gray-200 rounded-full">
          <div className="bg-green-600 h-10 grid place-content-center text-medium font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width:"75%"}}> 75%</div>
        </div>

          </div>
          <div className="divrighttop  block hidden lg:grid  lg:place-content-center" >

          <img style={{height:"145%"}} className='z-20  rounded-full' src={abimg}  alt="" />
          {/* <div className="img1 z-30  grid place-content-center  ">
            <img style={{marginLeft:"-2%"}} className='absolute bottom-8 rounded-full w-20' src="	https://shelly.merku.love/wp-content/uploads/2021/06/gallery-14.jpg
          " alt="" />
          </div> */}
          
          </div>
          </div>

{/*  */}




          <div className="allinside2 pt-36 gap-x-16 block lg:flex">

          <div className="divleftdown block grid place-content-center   " >

          <img className='z-20  rounded-full' src="https://shelly.merku.love/wp-content/uploads/2020/11/abt2.png"  alt="" />


          </div>

          <div className="divright">
            <div className="heading">
              <div className="one text-3xl font-semibold">
                OUR <span style={{color:"#ff5707"}}> MISSION</span>
              </div>
              
            </div>
            <div className="para my-12 text-lg font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reiciendis tenetur harum, corporis fuga voluptatem et soluta pariatur repudiandae eligendi atque? Architecto autem esse nostrum quas excepturi expedita, omnis laudantium temporibus, in asperiores accusantium quisquam sit laboriosam rerum quis dolorem. Ea consequuntur quia facilis excepturi ab reprehenderit, repellendus possimus accusamus.
            </div>
            
            
           <div className="work text-lg font-normal my-32">
           <div className="1 flex gap-x-2">
           <BsFillPenFill className='w-10 mt-2' style={{color:"#ff5707"}}/> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet?</span> 
           </div>
           <div className="2 flex gap-x-2">
           <BsFillPenFill className='w-10 mt-2'  style={{color:"#ff5707"}}/> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet?</span> 
           </div>
           <div className="3 flex gap-x-2">
           <BsFillPenFill className='w-10 mt-2'  style={{color:"#ff5707"}}/> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet?</span> 
           </div>
             
           </div>
          
          </div>
          
          </div>

{/*  */}

          <div className="allbenefits gap-x-6 block md:flex ">
            <div className="benefitsleft block mt-32 md:w-96" >
            <div className="1stpart text-4xl font-semibold">
              Benefits of
            </div>
            <div className="2ndpart text-4xl font-semibold" style={{color:"#ff5707"}}>
              Shelly School 
            </div>
 
            <div className="para my-12 text-lg font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reiciendis tenetur harum, corporis fuga voluptatem et soluta pariatur repudiandae eligendi atque? Architecto autem esse nostrum quas excepturi expedita, omnis laudantium temporibus, in asperiores accusantium quisquam sit laboriosam rerum quis dolorem. Ea consequuntur quia facilis excepturi ab reprehenderit, repellendus possimus accusamus.
            </div>
              
              <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Contact Us</button>
              
            </div>


            <div className="benefitsright my-16 grid-cols-1 sm:grid-cols-2 grid" data-aos="fade-up" data-aos-duration="800">

            <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' >
        <GiBookshelf className='w-20 text-yellow-700 mx-auto text-5xl my-auto' />
        <h3 className='mt-10 text-2xl font-bold'>Best Learning Program</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Read More</button>
      </div>

      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl'  >
        <GiBookshelf className='w-20 text-yellow-700 mx-auto text-5xl my-auto' />
        <h3 className='mt-10 text-2xl font-bold'>Best Learning Program</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Read More</button>
      </div>
      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' >
        <GiBookshelf className='w-20 text-yellow-700 mx-auto text-5xl my-auto' />
        <h3 className='mt-10 text-2xl font-bold'>Best Learning Program</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Read More</button>
      </div>
      <div className='welcome-card welcome-card-center text-center mx-6 my-6 p-6 rounded-3xl' >
        <GiBookshelf className='w-20 text-yellow-700 mx-auto text-5xl my-auto' />
        <h3 className='mt-10 text-2xl font-bold'>Best Learning Program</h3>
        <p className='text-md mt-8'>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
        <button type='button' className='text-xl font-semibold border-2 text-orange-500 border-orange-500 rounded-full mt-9 px-2 py-2 pt-1 pb-1 hover:border-2 hover:border-transparent hover:text-white bg-gradient-to-b transition-all duration-500 hover:from-orange-500 hover:to-orange-400'>Read More</button>
      </div>

            </div>
          </div>

{/*  */}
      </div>
  )
}

export default Aboutus;

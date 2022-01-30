import React from 'react';
import {FiClock, FiCalendar} from 'react-icons/fi'

function Cardour(props) {
  return(
    <div className="  rounded-3xl pb-6 cardd block " style={{width:"382px"}}>
        <div className="img ">
        <img className='w-full rounded-t-3xl' src={props.imgurl} alt="" />
        </div>
        <div className="belowimg flex mt-4 pb-2">
            <div className='evt-info flex '>
                    <div className='time-date flex text-blue-900 font-bold mt-2 ml-2 '>
                        <FiCalendar className='  text-blue-900 p-1 text-3xl rounded-full mr-2' style={{color:"#ff5707"}}/>
                        <p className='text-sm'>Mon-Fri</p>

                        <FiClock className='   text-blue-900 p-1 text-3xl rounded-full mr-2 ml-16 ' style={{color:"#ff5707"}}/>
                        <p className='text-sm'>10:00 AM 12:00 AM </p>
            
        
                    </div>
            </div>
        </div>
        
                    <hr />
        <div className="topic text-left  ml-2 text-2xl mt-6 font-semibold hover:text-orange-500 cursor-pointer ">
            BASIC ENGLISH SPEAKING AND GRAMMAR
        </div>
        <div className="belowtopic flex gap-x-48 mt-4 ml-2">
            <div className="leftpr text-xl font-semibold ">
                Polina  Kerston
            </div>
            <div className="righpr text-orange-500 font-bold text-2xl">
                $45
            </div>
        </div>
    </div>  
    )
}

export default Cardour;

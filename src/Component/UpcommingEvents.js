import React from 'react';
import {FiClock, FiCalendar} from 'react-icons/fi'
import {ImLocation} from 'react-icons/im'
import photo1 from './photo1.jfif';
import photo2 from  './photo2.jfif';

const UpcommingEvents = () => {
  return (
    <div className='flex justify-between mb-3 mt-28'>
        <div className='l-side w-3/5'>
            <div className='pr-20'>
                <h1 className='text-5xl font-bold'>
                    Upcomming <span className='text-orange-500'>Events</span>
                </h1>
                <p className='text-xl mt-9'>
                Learning record store (lrs) bite-sized learning avatar elearning, multimedia scenario serious games
                </p>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 pr-10 py-10'>
                <div className='col-span-2 row-span-2'>
                    <img className='w-10/12 rounded-2xl' src={photo1} alt='...' />
                </div>
                <div className='pt-10'>
                    <img className='w-10/12 rounded-2xl' src={photo2} alt='...' />
                </div>
                <div className='pt-9 px-6'>
                    <img className='w-10/12 rounded-2xl' src={photo2} alt='...' />
                </div>
            </div>
        </div>
        <div className='r-side w-2/5'>
            <div className='evt-card welcome-card mt-5 mr-10 py-6 px-9 rounded-3xl'>
                <div className='evt-info flex justify-between'>
                    <div className='time-date flex text-blue-900 font-bold'>
                        <FiCalendar className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2'/>
                        <p>2022-12-30</p>

                        <FiClock className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2 ml-6'/>
                        <p>12:00</p>
                    </div>
                    <p className='text-orange-500 font-bold text-2xl'>$8</p>
                </div>
                <h1 className='text-2xl font-bold cursor-pointer hover:text-orange-500 mt-5'>Explore Watercolor Illustration</h1>
                <p className='text-lg mt-2 font-semibold'><ImLocation className='inline text-orange-500'/> 25 Grafton St, Worcester</p>
            </div>

            <div className='evt-card welcome-card mt-10 ml-10 py-6 px-9 rounded-3xl'>
                <div className='evt-info flex justify-between'>
                    <div className='time-date flex text-blue-900 font-bold'>
                        <FiCalendar className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2'/>
                        <p>2022-12-30</p>

                        <FiClock className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2 ml-6'/>
                        <p>12:00</p>
                    </div>
                    <p className='text-orange-500 font-bold text-2xl'>$8</p>
                </div>
                <h1 className='text-2xl font-bold cursor-pointer hover:text-orange-500 mt-5'>Explore Watercolor Illustration</h1>
                <p className='text-lg mt-2 font-semibold'><ImLocation className='inline text-orange-500'/> 25 Grafton St, Worcester</p>
            </div>

            <div className='evt-card welcome-card mt-10 mr-10 py-6 px-9 rounded-3xl'>
                <div className='evt-info flex justify-between'>
                    <div className='time-date flex text-blue-900 font-bold'>
                        <FiCalendar className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2'/>
                        <p>2022-12-30</p>

                        <FiClock className='inline bg-slate-400 text-blue-900 p-1 text-3xl rounded-full mr-2 ml-6'/>
                        <p>12:00</p>
                    </div>
                    <p className='text-orange-500 font-bold text-2xl'>$8</p>
                </div>
                <h1 className='text-2xl font-bold cursor-pointer hover:text-orange-500 mt-5'>Explore Watercolor Illustration</h1>
                <p className='text-lg mt-2 font-semibold'><ImLocation className='inline text-orange-500'/> 25 Grafton St, Worcester</p>
            </div>
        </div>
    </div>
  );
};

export default UpcommingEvents;

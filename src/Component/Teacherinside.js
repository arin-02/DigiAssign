import React from 'react';
import Teachersingle from './Teachersingle';

function Teacherinside() {
  return <>

<div className="aboutusall my-6">
          <div className="top">
            <ul className='flex gap-x-8'>
                <li>Home</li>
                <li className='list-disc'>Teachers Us</li>
            </ul>
          </div>
          <div className="heading text-5xl font-bold my-8">
          TEACHERS
          </div>
          </div>
          <div className="allteach grid place-content-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <Teachersingle number="img5"/>
            <Teachersingle number="img6"/>
            <Teachersingle number="img7"/>
            <Teachersingle number="img8"/>
            <Teachersingle number="teacher5"/>
            <Teachersingle number="teacher6"/>
            <Teachersingle number="teacher7"/>
            <Teachersingle number="teacher8"/>
            
          </div>
        

  </>;
}

export default Teacherinside;

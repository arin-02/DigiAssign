import React from 'react';
import Cardsingle from './Cardsingle';

function Classesinside() {
  return (<>
       <div className="aboutusall my-6">
    <div className="top">
      <ul className='flex gap-x-8'>
          <li>Home</li>
          <li className='list-disc'>Classes</li>
      </ul>
    </div>
    <div className="heading text-5xl font-bold my-20">
    CLASSES
    </div>
    </div>

    <div className="cardsmany grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 py-28">
    
   <Cardsingle num="1"/>
   <Cardsingle num="2"/>
   <Cardsingle num="3"/>
   <Cardsingle num="4"/>
   <Cardsingle num="5"/>
   <Cardsingle num="6"/>
   <Cardsingle num="6"/>
   <Cardsingle num="8"/>

    </div>
    </>

  )
}

export default Classesinside;

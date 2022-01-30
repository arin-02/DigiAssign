import React from 'react';

function Content2() {
  return( 
  <div className='all grid grid-cols-2'>
        <div className="lefty block ">
        <div className="text-7xl animate__animated animate__zoomInDown font-semibold mt-8">
        <span className='z-30  '>THE SMARTER WAY TO LEARN </span> 
        <span style={{color:"#F37335"}}> ANYTHING</span>
        </div>
        <div className="texts animate__animated animate__flash text-lg mt-8 border-l-4" style={{borderColor:"#F37335"}}>
            <p className='mx-6'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore harum numquam sed cum sapiente consequatur provident? Dolor veritatis doloribus aperiam!
            </p>
        </div>
        <div className="searchbar pl-44 md:pl-0">
       
    <div class="container mt-10 flex justify-center items-center sm:px-2 lg:px-2">
        <div class="relative "> <input type="text" class="h-14 w-72 sm:w-96 pr-4 pl-5 border border-sky-500 rounded-full  z-0 focus:shadow focus:outline-none" placeholder="Search Classes..."/>
            <div class="absolute top-4 right-3"> <i class="fas fa-search text-sky-700 z-20 hover:text-gray-500"></i> </div>
        </div>
    </div>

        </div>
        </div>
        {/*  */}
        <div className="righty  grid grid rows-3">

        <div className="img1  grid content-center place-content-center">
            <img className=' rounded-full border-2 w-60 ' src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-1.jpg" alt="" />
        </div>
        <div className="img1 block grid sm:flex grid-cols-1 gap-10 md:gap-40 place-content-center">
        <div className="1 justify-self-end grid ">
        
        <img className=' rounded-full border-2 w-32 ' src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-2.jpg" alt="" />
        </div>
        <div className="2 justify-self-start grid">
        <img className=' rounded-full border-2 w-48 ' src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-3.jpg" alt="" />
        </div>
            
        </div>
        

        </div>
        {/*  */}
  </div>
  )
}

export default Content2;

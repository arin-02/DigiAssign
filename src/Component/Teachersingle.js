import React from 'react';

function Teachersingle(props) {
  return <div>
      <div className="teacherone pt-6  md:pt-0  mx-8 my-5">
      <div className="img  ">
      <img className="fimg rounded-lg w-full sm:w-auto " src={`	https://shelly.merku.love/wp-content/uploads/2020/11/${props.number}-270x405.png`} />
      </div>
      <div className="paradown ">
      <p className=" font-bold my-2 text-xl">Polina Kerston</p>
      <p className=" font-semibold" style={{color:"#135e9e"}}>English Teacher</p>
      </div>
     
    </div>
  </div>;
}

export default Teachersingle;

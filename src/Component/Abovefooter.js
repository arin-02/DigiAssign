import React from 'react';
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t4 from "./t4.jpg";

function Abovefooter() {
  return (<div className="teacher" data-aos="zoom-in" data-aos-duration="1000">
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
</div>)
}

export default Abovefooter;

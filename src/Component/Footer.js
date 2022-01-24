import React from "react";
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t3 from "./t3.jpg";
import t4 from "./t4.jpg";
import clock from "./clock.png";
import loc from "./loc.png";
import call from "./call.png";
export default function Footer() {
  return (
    <div>
      <div className="Techers text sans-serif font-bold text-4xl text-center my-10">
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
      <div className="teachers flex my-10">
        <div className="teacherone margin mx-8">
          <img className="rounded-lg " src={t1} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Polina Kerston</p>
          <p className="text-center">English Teacher</p>
        </div>
        <div className="teachertwo margin mx-8">
          <img className="rounded-lg h-45 w-45" src={t2} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Faadi Al Rahman</p>
          <p className="text-center">Maths Teacher</p>
        </div>
        <div className="teacherthree margin mx-8">
          <img className="rounded-lg" src={t3} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Katayama Fumiki</p>
          <p className="text-center">Arts Teacher</p>
        </div>
        <div className="teacherfour margin mx-8">
          <img className="rounded-lg" src={t4} alt="image" />
          <p className="text-center font-bold my-2 text-xl">Chikelu Obasea</p>
          <p className="text-center">Instructor</p>
        </div>
      </div>
      <div className="form bg-orange-500 flex my-15 rounded-3xl items-center m-auto w-2/3">
        <div className="my-10 text-white mx-10">
          <h1 className="text-3xl font-bold">Join Us</h1>
          <h1 className="text-3xl font-bold">and stay tuned!</h1>
          <p className="my-6 margin-auto font-medium">
            Curation active learning ecosystem learning content management
            system lxd lxp rapid learning
          </p>
        </div>
        <div className="info block my-10">
          <div className="entry flex">
            <input className="rounded-lg h-12"></input>

            <input className="mx-5 rounded-lg"></input>
          </div>
          <div className="my-8">
            <input className="rounded-lg h-24 w-96"></input>
          </div>
          <div>
            <button className="bg-blue-700 rounded-lg w-40 h-12 text-white font-medium">Send a message</button>
          </div>
        </div>
      </div>
      <div className="footer flex my-28">
        <div className="Contact Us font-bold">
          <h1 className="text-xl">Contact Us</h1>
          <div className="callus flex gap-x-4 my-5">
            <div className="callicon w-6 mt-2">
              <img className="mx-1"src={call} alt="image" />
            </div>
            <div className="calliconright mx-2">
              <div className="calltext">CALL US</div>
              <div className="callnumber font-light text-base">
                +91 8822747438
              </div>
            </div>
          </div>
          <div className="business flex gap-x-4">
            <div className="busicon w-8 ">
              <img src={clock} alt="image" />
            </div>
            <div className="busiconright">
              <div className="bustext">Business Hours</div>
              <div className="busnum  font-light text-lg">MON-FRI 8AM-5PM</div>
            </div>
          </div>
          <div className="location flex  gap-x-4 my-4">
            <div className="locicon w-8 mt-2">
              <img src={loc} alt="image" />
            </div>
            <div className="lociconright">
              <div className="loctext">Location</div>
              <div className="locnum  font-light text-base">
                Sec-17 , Chandigarh
              </div>
            </div>
          </div>
        </div>
        <div className="Quicklinks margin mx-10 ">
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="text-blue-500">
              <li className="my-2 mt-6">About US</li>
              <li className="my-2">Our Classes</li>
              <li className="my-2">School Teachers</li>
              <li className="my-2">Recent Events</li>
              <li className="my-2">Our News</li>
            </ul>
          </div>
        </div>
        <div className="twotags">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

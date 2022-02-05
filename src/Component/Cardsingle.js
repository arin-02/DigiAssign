import React from 'react';

function Cardsingle(props) {
  return  <div className="col-lg-4 w-full sm:w-72 my-4">
  <div className="card">
    <img
      src={`	https://shelly.merku.love/wp-content/uploads/2020/11/class${props.num}-270x180.png`}
      className="card-img-top"
      alt="Waterfall"
    />
    <div className="card-body">
      <h5 className="card-title text-xl font-semibold">Environmental Studies & Earth Sciences</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}}  >Buy Course</a>
    </div>
  </div>
</div>;
}

export default Cardsingle;

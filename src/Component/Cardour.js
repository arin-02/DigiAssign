import React from 'react';



function Cardour(props) {
  return(
    // <!-- Carousel wrapper -->
<div
  id="carouselMultiItemExample"
  className="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  {/* <!-- Controls --> */}
  <div className="d-flex justify-content-center mb-4">
    <button
      className="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* <!-- Inner --> */}
  <div className="carousel-inner py-4">
    {/* <!-- Single item --> */}
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class1-270x180.png"
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
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class8-300x200.png"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Hospitality, Leisure & Sports Courses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class3-300x200.png"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Basic English Speaking and Grammar</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
         

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class4-300x200.png"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Hospitality, Leisure & Sports Courses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class5-270x180.png"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Environmental Studies & Earth Sciences</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class6-300x200.png"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Basic English Speaking and Grammar</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2 "  style={{backgroundColor:"#ff5707"}}>Buy Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
         

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class7-300x200.png"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Hospitality, Leisure & Sports Courses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class8-270x180.png"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Environmental Studies & Earth Sciences</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2"  style={{backgroundColor:"#ff5707"}} >Buy Course</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="	https://shelly.merku.love/wp-content/uploads/2020/11/class1-300x200.png"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold">Basic English Speaking and Grammar</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary mt-2 "  style={{backgroundColor:"#ff5707"}}>Buy Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
  </div>
  {/* <!-- Inner --> */}
</div>
// <!-- Carousel wrapper -->
    )
}

export default Cardour;

import React, { useState } from 'react';

const Carousel = ({images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img className="w-100" src={image[0]} alt="bruh"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h3 className="display-3 text-white mb-4 pb-3 animated slideInDown">Trusted furniture retailers and interior designers</h3>
                                    <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src={image[1]} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                onClick={handlePrevClick}
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
             onClick={handleNextClick}
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> 
    </div>
  );
};

export default Carousel;

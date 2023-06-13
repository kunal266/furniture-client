import React,{useState,useRef,useEffect} from 'react';

import { scroller } from 'react-scroll';

import carouselbg1 from "./img/background1.jpeg";
import carouselbg2 from "./img/background2.jpeg";
import carousel1 from "./img/foreground2.png";
import carousel2 from "./img/foreground1.png";

const HomePage = () => {
    const [inputName, setinputName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const explanationRef = useRef(null)

    const images = [[carouselbg1,carousel1],[carouselbg2,carousel2]]

    
      const Carousel = ({images }) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const scrollToExplanation = () => {
            scroller.scrollTo('explanation', {
                smooth: true,
                offset: -50, // Adjust the offset value as needed
              });
          };
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
                                          <a className="btn btn-primary py-3 px-5 animated slideInDown" onClick={scrollToExplanation}>Learn More<i className="fa fa-arrow-right ms-3"></i></a>
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

    
    return (
        <div>
    <div className="container-fluid p-0 mb-5">
       <Carousel images={images}/>
    </div>

    <div className="container-xxl py-5" id="explanation" ref={explanationRef}>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4"  style={{ textAlign: 'justify' }}>
                            <h5 className="mb-3">Quality Servicing</h5>
                            <p style={{ textJustify: 'inter-word' }}>Panache Furniture Showroom offers exceptional quality servicing, ensuring meticulous attention to detail. With expert craftsmanship and a keen eye for design, we provide an extensive range of furniture solutions that epitomize elegance, comfort, and style.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4" style={{ textAlign: 'justify' }}>
                            <h5 className="mb-3">Expert Workers</h5>
                            <p style={{ textJustify: 'inter-word' }}>Panache's expert furniture showroom workers possess impeccable craftsmanship, extensive product knowledge, and a keen eye for design. With their expertise in assisting customers, they create stunning spaces, combining elegance and functionality to transform houses into extraordinary homes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4" style={{ textAlign: 'justify' }}>
                            <h5 className="mb-3">Modern Equipment</h5>
                            <p style={{ textJustify: 'inter-word' }}>Panache, a furniture showroom that values craftsmanship, employs modern manual equipment. From precision hand tools and ergonomic workbenches to versatile clamp systems and specialized joinery jigs, Panache ensures meticulous attention to detail in every piece they create.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" 
                // style="min-height: 400px;"
                >
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" 
                        // style="object-fit: cover;" 
                        alt="asd"/>
                        <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" 
                        // style="background: rgba(0, 0, 0, .08);"
                        >
                            <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                            <h4 className="text-white">Experience</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">{'// About Us //'}</h6>
                    <h1 className="mb-4"><span className="text-primary">Panache</span> interiors is the best place for home care</h1>
                    <p className="mb-4">Where style meets sophistication. Our furniture showroom showcases exquisite designs, quality craftsmanship, and a curated collection of modern and timeless pieces that elevate your living spaces.</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div className=" d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                //  style="width: 45px; height: 45px;"
                                 >
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Panache</h6>
                                    <span>Exquisite furniture showroom with contemporary and timeless designs, offering high-quality pieces for stylish homes.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div className=" d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                 >
                                    <span className="fw-bold text-secondary" >02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Sustainability-driven</h6>
                                    <span>We prioritize eco-friendly materials and processes, partnering with artisans and manufacturers known for exceptional craftsmanship.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div className=" d-flex flex-shrink-0 align-items-center justify-content-center mt-1" 
                                // style="width: 45px; height: 45px;"
                                >
                                    <span className="fw-bold text-secondary" >03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Exceptional service</h6>
                                    <span>Our staff provides personalized guidance, ensuring a warm and inviting experience as customers discover furniture that matches their unique style.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="/" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a> */}
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid my-5 py-5">
        <div className="container ">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-check fa-2x text-dark mb-3"></i>
                    <h2 className="text-dark mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-dark mb-0">Years Experience</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users-cog fa-2x text-dark mb-3"></i>
                    <h2 className="text-dark mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-dark mb-0">Expert Technicians</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users fa-2x text-dark mb-3"></i>
                    <h2 className="text-dark mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-dark mb-0">Satisfied Clients</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-car fa-2x text-dark mb-3"></i>
                    <h2 className="text-dark mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-dark mb-0">Compleate Projects</p>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="container-xxl service py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">{'// Our Services //'}</h6>
                <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-lg-4">
                    <div className="nav w-100 nav-pills me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <i className="fa fa-car-side fa-2x me-3"></i>
                            <h4 className="m-0">Diagnostic Test</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <i className="fa fa-car fa-2x me-3"></i>
                            <h4 className="m-0">Engine Servicing</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <i className="fa fa-cog fa-2x me-3"></i>
                            <h4 className="m-0">Tires Replacement</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <i className="fa fa-oil-can fa-2x me-3"></i>
                            <h4 className="m-0">Oil Changing</h4>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" 
                                // style="min-height: 350px;"
                                >
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-1.jpg"
                                            // style="object-fit: cover;" 
                                            alt="asd"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" 
                                // style="min-height: 350px;"
                                >
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-2.jpg"
                                            // style="object-fit: cover;" 
                                            alt="asd"
                                           />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" 
                                // style="min-height: 350px;"
                                >
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-3.jpg"
                                            // style="object-fit: cover;"
                                             alt="asd"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" 
                                // style="min-height: 350px;"
                                >
                                    <div className="position-relative h-100">
                                         <img className="position-absolute img-fludid w-100 h-100" src="img/service-4.jpg" 
                                            // style="object-fit: cover;"
                                             alt="asd"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="/" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    {/* <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                        <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Book For A Service</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" value={inputName} onChange={e => setinputName(e.target.value)} placeholder='Name'/>

                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" value={inputEmail} onChange={e => setinputEmail(e.target.value)} placeholder='Email' />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" 
                                    // style="height: 55px;"
                                    >
                                        <option defaultValue>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date1" data-target-input="nearest">
                                      
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Request"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    {/* <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">{'// Our Technicians //'}</h6>
                <h1 className="mb-5">Our Expert Technicians</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt="asd"/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt="asdsdsc"/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt="asdsdcx"/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt="asd"/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Opening Hours</h4>
                    <h6 className="text-light">Monday - Friday:</h6>
                    <p className="mb-4">09.00 AM - 09.00 PM</p>
                    <h6 className="text-light">Saturday - Sunday:</h6>
                    <p className="mb-0">09.00 AM - 12.00 PM</p>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <a className="btn btn-link" href="/">Diagnostic Test</a>
                    <a className="btn btn-link" href="/">Engine Servicing</a>
                    <a className="btn btn-link" href="/">Tires Replacement</a>
                    <a className="btn btn-link" href="/">Oil Changing</a>
                    <a className="btn btn-link" href="/">Vacuam Cleaning</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" 
                    // style="max-width: 400px;"
                    >
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="/#">Panache Interiors</a>, All Right Reserved.

                        
                        Designed By <a className="border-bottom" href="https://www.linkedin.com/in/kunalmakwanadatascience" >Kunal Makwana</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="/">Home</a>
                            <a href="/">Cookies</a>
                            <a href="/">Help</a>
                            <a href="/">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}
export default HomePage;
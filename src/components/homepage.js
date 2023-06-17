import React,{useState,useRef,useEffect} from 'react';

import { scroller } from 'react-scroll';

import carouselbg1 from "./img/background1.jpeg";
import carouselbg2 from "./img/background2.jpeg";
import carousel1 from "./img/foreground2.png";
import carousel2 from "./img/foreground1.png";
import AboutUs from './img/aboutus.jpg'

const HomePage = () => {
    const [inputName, setinputName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const explanationRef = useRef(null)
    const [width, setWidth] = useState(window.innerWidth);
    
    const images = [[carouselbg1,carousel1,'Trusted Interior Designers'],[carouselbg2,carousel2,'In Quality we Trust']]
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    const breakpoint = 550;
    
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
                                          <h3 className="display-3 text-white mb-4 pb-3 animated slideInDown">{image[2]}</h3>
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

      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
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
            <div className={(width<breakpoint)?"col g-5":"row g-5"}>
                <div className={(width<breakpoint)?"row-10":"col-sm-2 col-md-6 pt-4"} 
                >
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 " src={AboutUs}
                        alt="asd"/>
                    </div>
                </div>
                <div className={"col-md-6"}>
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

    <div className={(width<breakpoint)?"container-fluid my-2 py-2":"container-fluid my-5 py-5"}>
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

    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kalher, Bhiwandi, Maharashtra 401201</p>
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

            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="/#">Panache Interiors</a>, All Right Reserved.

                        
                        Designed By <a className="border-bottom" href="https://www.linkedin.com/in/kunalmakwanadatascience" >Kunal Makwana</a>
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
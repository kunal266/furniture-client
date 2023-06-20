import React from 'react';

const AboutNav = () => {
  return (
    <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Kalher, Bhiwandi, Maharashtra 401201</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 10.00 AM - 08.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small><a href="tel:9967497465" style={{color:"black"}}>+91-9967497465</a></small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                
                    <a href='https://g.co/kgs/jBgAXa' target='_blank' className="btn btn-sm-square bg-white text-primary me-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                    {/* <a href='/admin' target='_blank' className="btn btn-sm-square bg-white text-primary me-1"><i className="fa fa-user-circle" aria-hidden="true"></i></a> */}
                    <a href='https://instagram.com/1.panacheinteriors' target='_blank' className="btn btn-sm-square bg-white text-primary me-1"><i className="fab fa-instagram"></i></a>
                    <a href="mailto:panacheinterios32@gmail.com" target='_blank' className="btn btn-sm-square bg-white text-primary me-1"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutNav;

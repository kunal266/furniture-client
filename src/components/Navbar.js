import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [site,setSite] = useState(null)
  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Panache Interior</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" className="nav-item nav-link active" style={{ color: 'black',cursor: 'pointer' }}>Home</a>
                <a href="/" className="nav-item nav-link" style={{ color: 'black',cursor: 'pointer' }}>Shop</a>
                <a href="/" className="nav-item nav-link" style={{ color: 'black',cursor: 'pointer' }}>Interior</a>
                <a href="/" className="nav-item nav-link" style={{ color: 'black',cursor: 'pointer' }}>
                Cart</a>
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
  );
};

export default Navbar;

import React,{useState,
  // useEffect
} from 'react';
// import Admin from './admin';
// import FurnitureDisplay from './products';
// import Navbar from './components/Navbar';
import ShopPage from './ShopPage';
import HomePage from './homepage';
import AboutNav from '../AboutNav';
import Interior from './Interior';
import Cart from './Cart';
import Icon from './img/testing.png'
// import {Link} from 'react-router-dom';

const Mainpage = ()=>{
  const [site,setSite] = useState(<HomePage/>)
  const handleNavLink = () =>{
    setSite(<HomePage/>)
  }
  return (
    // <a href='/'dmin/>
    <div className="App">
      <AboutNav/>
    {/* <FurnitureDisplay/> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{zIndex:99}}>
        <a href='/' className="navbar-brand d-flex align-items-center px-4 px-lg-5">

            <h2 className="m-0 text-primary"> 
        <img src={Icon} alt="Icon" style={{alignSelf:'center', width: '26px', height: '24px',marginRight: '5px',marginBottom: '7px'}} />
      Panache Interior</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a  onClick={()=>setSite(<HomePage/>)} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Home</a>
                <a  onClick={()=>setSite(<ShopPage/>)} className="nav-item nav-link"style={{ cursor: 'pointer' }}>Shop</a>
                <a  onClick={()=>setSite(<Interior/>)} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Interior</a>
                <a  onClick={()=>setSite(<Cart/>)} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Cart</a>
            </div>
            <a className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* <a href='/'dmin/> */} 
      {site}
    </div>
  )
}

export default Mainpage;
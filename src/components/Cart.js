import React, { useState,useContext ,useEffect} from 'react';
import { CartContext } from '../App';
import QrCode from './img/qrcode.jpeg'

const Cart = () => {

  const [totalCost,settotalCost] = useState(0);
  const { cart  } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 500;

  const Checkout = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [page1,setpage1] = useState(true);
    const closeModal = () => {
      setModalVisible(false);
    };
    function handleSubmit(e) {
      e.preventDefault();
      // Do something with the form data
      console.log({ name, email, address, contact });
    }
  
    // Handle input changes
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handleAddressChange(e) {
      setAddress(e.target.value);
    }
  
    function handleContactChange(e) {
      setContact(e.target.value);
    }
    const modalOverlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: modalVisible ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const modalContentStyle = {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      height:(width<breakpoint)?'600px':'500px',
      width:(width<breakpoint)?'350px':'500px'
    };
  
    const textStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft:'20px'
    };
    const closeSymbolStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      cursor: 'pointer',
    };
    const labelStyle = {

      display: (width<breakpoint)?'inline-block':'block',
      width: (width<breakpoint)?'60px':'100px',
      fontSize: '14px'
    };
  
    const inputStyle = {
      width: (width<breakpoint)?'220px':'200px',
      height: (width<breakpoint)?'30px':'40px',
      padding: '10px',
      margin: '5px',
      display: (width<breakpoint)?'inline-block':'',

    };
  
    return(

      <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>
        <div className='row' >
          <div className='col-10'>
          <h2 style={textStyle}>Please pay</h2>

          </div>
          <div className='col-2' style={closeSymbolStyle} onClick={closeModal}>
            <svg
            style={{margin:'10px auto auto auto'}}
            // onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"

              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            </div>
          </div>
          <div style={{display: 'flex',
      justifyContent: 'flex-center'}}>
        <p style={{margin:(width<breakpoint)?'10px auto auto auto ':'30px auto auto auto ',color:'black'}}>
        Total Cost: ₹ {totalCost}

        </p> </div>
        <div className={(width<breakpoint)?'col':'row'}> 
        <form onSubmit={handleSubmit} className={(width<breakpoint)?'row-6':'col-6'}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="address" style={labelStyle}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleAddressChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="contact" style={labelStyle}>
          Contact:
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={contact}
          onChange={handleContactChange}
          style={inputStyle}
        />
      </div>
      <div style={{fontSize:'12px',color:'red'}}>*please use your real info</div>
    </form>
      <div className={(width<breakpoint)?'row-6':'col-6'}>
      <div >
        <div style={{fontSize:'14px',color:'black',marginBottom:'5px', textAlign: 'center'}}>
          Pay <span style={{fontSize:'15px', color:'red'}}>₹ {parseInt(0.25*totalCost)}</span> as advance
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={QrCode} alt='qrcode' style={{height:'200px',width:'200px'}} >
        </img></div>
          {/* <div style={{fontSize:'10px'}}>25% in advance</div>
        
        <div style={{fontSize:'10px'}}>50% During the process</div>
          <div style={{fontSize:'10px'}}>25% Before the Delivery</div> */}
          <div style={{fontSize:'11px',color:'red'}}>*After Payment kindly click submit button to receive confirmation and do not close the page until then</div>
      </div>
      <button onClick={handleSubmit} style={{border:'0px',marginTop:'5px'}}>Submit</button>
      
      </div>
    </div>
        </div>
      </div>
    )
  }
  function totalcostt (){
    const products = Object.values(cart)
    let temp =0
    products.map((value)=>{

      temp = temp + parseInt(value[1].price)
      return 0
    })
    console.log(temp)
    return temp
    
  }
  useEffect( ()=>{
    settotalCost(totalcostt())
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);
  return (
    <div className="container">
    <div className="row">
      
      <div className="col-8">
        <h2 style={
          { padding: '15px 45px',margin:'15px' }}>{(width<breakpoint) ?'Cart':'Furniture Cart'}</h2>
        
    </div>
    <div className="col-4 d-flex justify-content-end align-items-center">
    <h6 style={{ padding: '30px 35px 20px 45px',margin:'15px' }}>Price</h6>
    <div>
      <div  className="col-2 d-flex justify-content-end align-items-center" style={{
      position: 'fixed',
      bottom: 10,
      right:20,
      // borderRadius:'10%',
      // width: '100%',
      fontWeight:'bold',
      fontSize:'22px',
      // backgroundColor: '',
      padding: width<breakpoint?'5px':'30px 35px 20px 45px',
      margin:'15px',
      zIndex: 9998 
    }}>
      <button className="bg-primary text-white" onClick={()=>setModalVisible(true)}  style={{border:'0px',padding:'0px 7px'}}>Checkout
      </button >{' '}
      {/* {(modalVisible)?<Checkout/>:null} */}
      {(modalVisible && totalCost>0)?<Checkout/>:null}
      </div></div>
</div>
</div>
      {/* <div className='scrollable-div' style={{ maxHeight: '65vh', overflowY: 'auto', scrollbarWidth: '2px', msOverflowStyle: 'none' , borderBottom: '1px solid lightgray'}}> */}
          {Object.entries(cart).map(([key, value],index) => (
            value[0]>0?
              <div className='row' style={{borderTop: '1px solid gray'}} key={key}>
              <div className="col-8">
                <div className='row'>
                {(width<breakpoint) ?null:<div className='col-1' style={{widht:'2em',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {index + 1}
          </div>}
                  <div className='col-2' style={{padding:'15px 0',width:'240px'}}>
                  <img
                        src={value[1].urll}
                        alt={value[1].name}
                        // className="card-img-top"
                        style={{ objectFit: "cover", width: "200px", height: "200px",border: '1px solid gray'
                      }}
                      />

                    </div>

                    <div className='col-5'>
                      <div className='col'>
                      <div className='row-1' style={(width<breakpoint) ?
                      {margin:'5px 0',fontSize:'18px',fontWeight:'bold',color:'black'}:
                      {margin:'15px 0',fontSize:'22px',fontWeight:'bold',color:'black'} }>
                      {value[1].name}
                      </div>
                      {(width<breakpoint) ?null:<div className='row-1 ' style={{fontSize:'13px'}}>
                      #{value[1].id}
                      </div>}
                      {(width<breakpoint) ?null:<div className='row-2' style={{margin:'15px 0',color:'black'}}>
                     Category: {value[1].selectedCategory}
                      </div>}
                      <div className='row-2' style={(width<breakpoint) ?
                        {margin:'5px 0',color:'black'}:
                        {margin:'15px 0',color:'black'} }>
                      {(width<breakpoint) ?null:'Sub-Category:'} {value[1].selectedSubCategory}
                      </div>
                      <div className='row-1' style={(width<breakpoint) ?
                      {margin:'5px 0',color:'black',fontSize:'13px'}:
                      {margin:'15px 0',color:'black',fontSize:'15px'}
                    }>
                      {(width<breakpoint) ?null:'Quantity:'} x{value[0]}
                      </div>
                      </div>
                    </div>
                </div>
                </div>

                <div className='col-4 d-flex justify-content-end align-items-center'
                >
                  <div style={{ padding:(width<breakpoint) ? '5px':'30px 35px 20px 45px',margin:'15px',fontWeight:'bold' ,color:'black',fontSize:(width<breakpoint) ?'16px':'18px'}}>₹ {value[0]*parseInt(value[1].price)}</div>
                  </div>

        </div>
        :null
          ))}
      {/* </div> */}
  </div>
  );
};

export default Cart;

import React, { useState,useContext ,useEffect} from 'react';
import { CartContext } from '../App';


const Cart = () => {

  const [totalCost,settotalCost] = useState(0);
  const { cart  } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const Checkout = () =>{
    const closeModal = () => {
      setModalVisible(false);
    };
    const modalOverlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: modalVisible ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const modalContentStyle = {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      height:'500px',
      width:'500px'
    };
  
    const textStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
    };
    const closeSymbolStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      cursor: 'pointer',
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

          {/* <button onClick={closeModal}>Close Modal</button> */}
        </div>
      </div>
    )
  }
  function totalcostt (){
    const products = Object.values(cart)
    let temp =0
    products.map((value)=>{
      // console.log(value[1].price)
      // console.log(value[0]*1000)
      // await totalcostt(value[0])
      // // await settotalCost(value[0]*1000)
      // console.log(totalCost)
      temp = temp + (value[0]*1000)
    })
    console.log(temp)
    return temp
    
  }
  useEffect( ()=>{
    settotalCost(totalcostt())
    // totalcostt()
    // const temp = await totalcostt
    // console.log(await totalcostt())
    // settotalCost(totalCost + (value*1000))
  },[]);
  return (
    <div className="container">
    <div className="row">
      
      <div className="col-8">
        <h2 style={{ padding: '15px 45px',margin:'15px' }}>Furniture Cart</h2>
        
    </div>
    <div className="col-4 d-flex justify-content-end align-items-center">
    <h6 style={{ padding: '30px 35px 20px 45px',margin:'15px' }}>Price</h6>
    <div  className="col-4 d-flex justify-content-end align-items-center" style={{
      position: 'absolute',
      bottom: 0,
      // width: '100%',
      fontWeight:'bold',
      fontSize:'22px',
      // backgroundColor: 'yellow',
      borderTop: '1px solid gray',
      padding: '30px 35px 20px 45px',margin:'15px',
      color:'black',
      zIndex: 9999  /* Set a high z-index value to ensure it appears above other elements */
    }}>
        {/* <div className='col-8' style={{borderTop: '1px solid gray'}}></div> */}
        ₹ {totalCost}
      </div>
      <div  className="col-2 d-flex justify-content-end align-items-center" style={{
      position: 'absolute',
      bottom: 0,
      right:70,
      // borderRadius:'10%',
      // width: '100%',
      fontWeight:'bold',
      fontSize:'22px',
      // backgroundColor: 'yellow',
      padding: '30px 35px 20px 45px',margin:'15px',
      color:'black',
      zIndex: 9999  /* Set a high z-index value to ensure it appears above other elements */
    }}>
      <button className="bg-warning" onClick={()=>setModalVisible(true)}  style={{borderRadius:'8px'}}>Checkout
      </button>{' '}
      {(modalVisible && totalCost>0)?<Checkout/>:null}
      </div>
</div>
</div>
        {Object.entries(cart).map(([key, value],index) => (
          value[0]>0?
            <div className='row' style={{borderTop: '1px solid gray'}} key={key}>
            <div className="col-8">
              <div className='row'>
              <div className='col-1' style={{widht:'2em',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {index + 1}
        </div>
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
                    <div className='row-1' style={{margin:'15px 0',fontSize:'22px',fontWeight:'bold',color:'black'}}>
                    {value[1].name}
                     </div>
                     <div className='row-1 ' style={{fontSize:'13px'}}>
                    #{value[1].prodId}
                     </div>
                     <div className='row-2' style={{margin:'15px 0',color:'black'}}>
                    Category: {value[1].selectedSubCategory}
                     </div>
                     <div className='row-1' style={{margin:'15px 0',color:'black',fontSize:'15px'}}>
                    Quantity: x{value[0]}
                     </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className='col-4 d-flex justify-content-end align-items-center'
              >
                <div style={{ padding: '30px 35px 20px 45px',margin:'15px',fontWeight:'bold' ,color:'black',fontSize:'18px'}}>₹ {value[0]*(1000)}</div>
                </div>

      </div>
      :null
        ))}

  </div>
  );
};

export default Cart;

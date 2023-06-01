

import React ,{useContext}from 'react';
import { CartContext } from '../App';

const Modal = ({ isOpen, product, closeModal }) => {
  const { cart, addToCart,handleDataTransfer  } = useContext(CartContext);
  
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }
  
  const modalOverlayStyle = {
    position: 'fixed',
    // top: '-1',
    // left: '-1',
    right: 0,
    bottom: 0,
    width: '85%',
    height: '87%',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 9999,
    overflow: 'hidden'
  };

  const modalContentStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };


  const modalHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    fontSize: '24px',
  };

  const modalBodyStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const productImageStyle = {
    maxWidth: '600px' ,
    height: 'auto',
    objectFit: 'cover',
    marginRight: '20px',
  };

  const modalFooterStyle = {
    marginTop: 'auto',
  };
  const handleCloseModal = () => {
    closeModal(); // Invoke the closeModal function to close the modal
  };
  const handleAddToCart = () => {
    // console.log(cart)
    // if (cart[product.prodId]) {
    //   // If the product is already in the cart, increase the count by 1
    //   const count = cart[product.prodId];
    //   console.log(count)
    //   addToCart({
    //     ...cart,
    //     [product.prodId]: count + 1
    //   });
    // } else {
    //   // If the product is not in the cart, add it with count 1
    //   addToCart({
    //     ...cart,
    //     [product.prodId]: 1
    //   });
    // }
    addToCart(product)
  };
  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle} >
        <div style={modalHeaderStyle}>
          <h3 className='mx-4'>{product.name}</h3>
          <span style={closeButtonStyle} onClick={handleCloseModal}> {/* Invoke handleCloseModal */}
            &times;
          </span>
        </div>
        <div style={modalBodyStyle} className='row'>
          <div className='mx-4 col-lg-5'>
          <img src={product.urll} alt={product.name} style={productImageStyle} /></div>
          <div className='col-lg-6'>
          <h4 >{product.name}</h4>
          <span>#{product.prodId}</span>
          {/* {console.log(product)} */}
            <p>Price: {product.price}</p>
            <p>Id: {product.id}</p>
            <p>Price: {product.price}</p>
            <p>Traits: {product.customization}</p>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
          <p>Count: {cart[product.prodId]}</p>

          </div>
        </div>
        <div style={modalFooterStyle}>
          {/* <button onClick={handleCloseModal}>Close</button> Invoke handleCloseModal */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
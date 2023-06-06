import React from 'react';

const Modal = () => {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 style={textStyle}>Please pay</h2>
      </div>
    </div>
  );
};

export default Modal;

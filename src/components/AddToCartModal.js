import React from 'react';

const AddToCartModal = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={closeModal}>Confirm</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default AddToCartModal;

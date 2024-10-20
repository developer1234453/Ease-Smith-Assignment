import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  const productName = location.state?.productName;

  return (
    <div>
      <h1>Thank You for Your Interest!</h1>
      <p>We appreciate your interest in {productName}.</p>
    </div>
  );
};

export default ThankYouPage;

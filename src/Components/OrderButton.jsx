// OrderButton.js
import React, { useState } from 'react';


const OrderButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOrder = () => {
    setIsDisabled(true);
    alert('Order placed successfully!');
    
    // Simulate an API call or delay before re-enabling button
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000); // 3 seconds delay
  };

  return (
    <button
      className="order-button"
      onClick={handleOrder}
      disabled={isDisabled}
    >
      {isDisabled ? 'Processing...' : 'Place Order'}
    </button>
  );
};

export default OrderButton;

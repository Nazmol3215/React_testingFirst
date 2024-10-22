import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [quantity, setQuantity] = useState(3);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert(`Order placed for ${name} with phone ${phone} and address ${address}`);
  };

  const subtotal = 1000;
  const total = quantity * subtotal;
  const shippingCost = 0; // Free shipping

  return (
    <div className="checkout-container">
      <div className="cart-section">
        <div className="cart-item">
          <h4>Lumbar Support Pillow × {quantity}</h4>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <p>৳ {total}.00</p>
        </div>
      </div>

      <form className="billing-section" onSubmit={handleSubmit}>
        <h3>Billing details</h3>
        <label>
          আপনার নাম লিখুন
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          মোবাইল নাম্বার লিখুন
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          আপনার ঠিকানা লিখুন
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="বাসা নং, রোড নং, থানা, জেলা"
          />
        </label>

        <div className="order-summary">
          <h3>Your order</h3>
          <div className="order-details">
            <p>Product</p>
            <p>Subtotal</p>
            <p>Lumbar Support Pillow × {quantity}</p>
            <p>৳ {total}.00</p>
            <p>Shipping</p>
            <p>ডেলিভারি চার্জ ফ্রি</p>
            <p>Total</p>
            <p>৳ {total}.00</p>
          </div>

          <div className="payment-method">
            <h4>Cash on delivery</h4>
            <p>Pay with cash upon delivery.</p>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order ৳ {total}.00
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

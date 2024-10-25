import React from 'react';


export default function Electronics(props) {
  return (
      <div className="App">
  <div class="product-grid">
  <div class="product-card">
    <div class="discount-badge">-9%</div>
    <div class="product-info">
    <img src={props.img} alt="Mini Bonsai Zade Plant PL-001" class="product-image" />
      <p class="product-title">{props.titleText}</p>
      <div class="product-pricing">
        <span class="original-price">৳ 5,500</span>
        <span class="discounted-price">৳ 5,000</span>
      </div>
        <button class="add-to-cart">Add to cart</button>
    </div>
  </div>
  <div class="product-card">
    <div class="discount-badge">-9%</div>
    <div class="product-info">
    <img src={props.img} alt="Mini Bonsai Zade Plant PL-001" class="product-image" />
      <p class="product-title">{props.titleText}</p>
      <div class="product-pricing">
        <span class="original-price">৳ 5,500</span>
        <span class="discounted-price">৳ 5,000</span>
      </div>
      <button class="add-to-cart">Add to cart</button>
    </div>
  </div>


</div>






    </div>
  )
}

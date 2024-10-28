import React from "react";
import OrderButton from "../ReactRouter/OrderButton";

export default function ImgContainertwo(props) {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-4">
          <div className="App">
            <div class="product-grid">
              <div class="product-card">
                <div class="discount-badge">-9%</div>
                <div class="product-info">
                  <img
                    src={props.img}
                    alt="Mini Bonsai Zade Plant PL-001"
                    class="product-image"
                  />
                  <p class="product-title">{props.titleText}</p>
                  <div class="product-pricing">
                    <span class="original-price">৳ 5,500</span>
                    <span class="discounted-price">৳ 5,000</span>
                  </div>
                  <OrderButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5">
          <div className="App">
            <div class="product-grid">
              <div class="product-card">
                <div class="discount-badge">-9%</div>
                <div class="product-info">
                  <img
                    src={props.img}
                    alt="Mini Bonsai Zade Plant PL-001"
                    class="product-image"
                  />
                  <p class="product-title">{props.titleText}</p>
                  <div class="product-pricing">
                    <span class="original-price">৳ 5,500</span>
                    <span class="discounted-price">৳ 5,000</span>
                  </div>
                  <OrderButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button class="add-to-cart" onClick={() => navigate("/Checkout")}>
         Order Now
      </button>
    </div>
  );
}

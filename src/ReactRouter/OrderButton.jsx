import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderButton() {
  const navigate = useNavigate();

  return (
    <div>
      this is order button
      <button onClick={() => navigate("/Conteact")}>Go to order</button>
    </div>
  );
}

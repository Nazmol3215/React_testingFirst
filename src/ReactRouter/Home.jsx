import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function About() {
const navigate = useNavigate();

  return (
    <div>
      
<button onClick={()=>navigate("/Checkout")}>Order Now</button>



    </div>
  )
}






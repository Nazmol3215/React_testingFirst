import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function About() {
const navigate = useNavigate();

  return (
    <div>
      
<h1>This is About peagse</h1>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perspiciatis et officiis eum magni quia repudiandae ipsa architecto corporis, obcaecati nulla quam, nost
rum error porro aliquam ullam atque rerum reprehenderit. Suscipit, delectus atque.

<button onClick={()=>navigate("/Conteact")}>Go to</button>



    </div>
  )
}






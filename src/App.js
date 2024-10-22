import React from 'react';
import './App.css';
import ImgContainertwo from './Components/ImgeContainertwo';
import OffcanvasExample from '../src/Components/NavbarReact';
import ImageSlider from '../src/Components/Sliderfe';
import Footer from '../src/Components/WebFooter';
import Checkout from '../src/Components/OrderForm';


function App() {
  return (
    <div className="App">

<OffcanvasExample/>
<ImgContainertwo titleText="Executive  With White Body one" img="Zade.jpg.webp"/>
<ImgContainertwo titleText="Office Executive Chair With" img="-Black-2-copy-600x600.webp"/>
<ImgContainertwo titleText="Coffee Mug Hot & Cold Beverage" img="0.jpg"/>
<ImgContainertwo titleText="Coffee Mug Hot & Cold Beverage" img="Zade.jpg.webp"/>
<ImgContainertwo titleText="Coffee Mug Hot & Cold Beverage" img="0x600.jpg"/>
<ImgContainertwo titleText="Executive  Chair With White Body" img="Zade.jpg.webp"/>
<ImgContainertwo titleText="Executive Office  ChairBody seven" img="download-00.jpg"/>
<ImageSlider/>
<Checkout/>
<Footer/>

    </div>
  );
}

export default App;

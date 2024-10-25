import React from 'react';
import Checkout from '../Components/OrderForm';
import ImageSlider from '../Components/Sliderfe';
import Footer from '../Components/WebFooter';
import ScrollToTop from '../ScrolliButtom/scrollToTop';
import ImgContainertwo from '../Components/ImgeContainertwo';




        export default function MainPage() {
        return (
            <div>
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
                    <ScrollToTop/>

            </div>
        )
        }

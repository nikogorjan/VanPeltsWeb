import React, {  useRef } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Bullets from "./Components/Bullets/Bullets";
import ValueProp from './Components/ValueProp/ValueProp';
import Praise from './Components/Praise/Praise';
import FAQ from './Components/FAQ/FAQ';
import ContactLandingPage from './Components/ContactForm/ContactLandingPage';
import FooterImg from './Components/Footer/FooterImg';


const Pages = () => {
    
    const bulletsRef = useRef(null);

    return (
        <div>
            <Navbar/>
            <Header bulletsRef={bulletsRef}/>
            <Bullets bulletsRef={bulletsRef}/>
            <ValueProp/>
            <Praise/>
            <FAQ/>
            <ContactLandingPage/>
            <FooterImg/>
        </div>
    );
};

export default Pages;
import React, {  useRef } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Bullets from "./Components/Bullets/Bullets";
import ValueProp from './Components/ValueProp/ValueProp';


const Pages = () => {
    
    const bulletsRef = useRef(null);

    return (
        <div>
            <Navbar/>
            <Header bulletsRef={bulletsRef}/>
            <Bullets bulletsRef={bulletsRef}/>
            <ValueProp/>
        </div>
    );
};

export default Pages;
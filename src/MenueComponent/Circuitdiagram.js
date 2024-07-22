// import React from 'react'
import React, { useState } from "react";

import { GiPowerButton } from "react-icons/gi";

import { HiOutlineSwitchHorizontal } from "react-icons/hi";
function Circuitdiagram() {
    const [isBulbOn, setIsBulbOn] = useState(true);

    const turnOnBulb = () => {
      setIsBulbOn(true);
    };
  
    const turnOffBulb = () => {
      setIsBulbOn(false);
    };
  return (
   
<div >
      <div >
     
      <img
        className="bulbImage"
        src={
          isBulbOn
          ? "/images/bulb_off-remove.png"
            : "/images/bulb_onn-remove.png"
            
        }
        alt="Light Bulb"
      />
      <div>
 <img className="circuit-pic" src='./images/circuit.png' alt=""/> 
 </div>
      <div className="both_button">
      <button className="button_1" onClick={turnOnBulb}>
      <GiPowerButton />
      <HiOutlineSwitchHorizontal />
      </button>
      

     
      <button className="button_2" onClick={turnOffBulb}>
      <GiPowerButton />
      <HiOutlineSwitchHorizontal />
      </button>
      </div>
      </div>
      
     
     
    </div>

        
   
  )
}

export default Circuitdiagram
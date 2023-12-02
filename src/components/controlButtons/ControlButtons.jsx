import { useState } from 'react';
import './controlButtons.css'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";

export const ControlButtons = () => {
    const [pressBtn, setPressBtn] = useState(false);

    const pressBtnFunc = () => {
        setPressBtn(!pressBtn)
    }

    console.log(pressBtn)

  return (
    <div className='control-buttons'> 
        {pressBtn ?
            <div 
                className='play-btn'
                onClick={() => pressBtnFunc()}
            >
                    <FaCirclePlay/>
            </div>
        :
            <div 
                className='pause-btn'
                onClick={()=>pressBtnFunc()}
            >
                    <FaCirclePause/>
            </div>
        }
    
  
  </div>
  )
}

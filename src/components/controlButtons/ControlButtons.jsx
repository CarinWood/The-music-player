import { useState } from 'react';
import './controlButtons.css'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { IoMdSkipForward, IoMdSkipRewind } from "react-icons/io";


export const ControlButtons = ({setPlaySong, playSong}) => {
    const [pressBtn, setPressBtn] = useState(false);

    const pressBtnFunc = () => {
        setPressBtn(!pressBtn)
    }

    const jumpForward = () => {
        if(playSong + 1 === 8) {
            setPlaySong(1)
        } else {
            setPlaySong(playSong + 1)
        }
     
    }
 
    const jumpBack = () => {
        if(playSong - 1 === 0) {
            setPlaySong(7)
        } else {
            setPlaySong(playSong - 1)
        }
     
    }

 

  return (
    <div className='control-buttons'> 
        <div 
            onClick={() => jumpBack()}
            className='rewind'
        >
                <IoMdSkipForward/>
        </div>
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
        <div 
            className='forward'
            onClick={() => jumpForward()}
        >
            <IoMdSkipForward/>
        </div>
    
  
  </div>
  )
}

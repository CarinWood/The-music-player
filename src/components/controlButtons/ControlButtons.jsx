import { useState } from 'react';
import './controlButtons.css'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { IoMdSkipForward } from "react-icons/io";


export const ControlButtons = ({setPlaySong, playSong, songs, currentSong, setCurrentSong, setIsPlaying, isPlaying}) => {
    const [pressBtn, setPressBtn] = useState(false);

    const pressPlayFunc = () => {
        setPressBtn(!pressBtn)
        setIsPlaying(true)
    }

    const pressPauseFunc = () => {
        setPressBtn(!pressBtn)
        setIsPlaying(false)
    }

    const jumpForward = () => {
        const index = songs.findIndex(x => x.title === currentSong.title)


        if(playSong + 1 === 8) {
            setPlaySong(1)
            setCurrentSong(songs[0]) 
        
        } else {
            setPlaySong(playSong + 1)
            setCurrentSong(songs[index +1])
          
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
                onClick={() => pressPlayFunc()}
            >
                    <FaCirclePlay/>
            </div>
        :
            <div 
                className='pause-btn'
                onClick={()=>pressPauseFunc()}
            >
                    <FaCirclePause/>
            </div>
        }
        <div 
            className='forward'
            onClick={()=>jumpForward()}
        >
            <IoMdSkipForward/>
        </div>
    
  
  </div>
  )
}

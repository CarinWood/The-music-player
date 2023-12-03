import { useRef, useState } from 'react';
import './card.css'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

export const Card = ({id, img, title, artist, sound, setPlaySong, playSong}) => {
    const [playBtn, setPlayBtn] = useState(true)
    const musicRef = useRef(new Audio(sound));

    const clickOnPlay = (id) => {
        setPlayBtn(false)
        setPlaySong(id);
        musicRef.current.play();
    }

    const clickOnPause = () => {
        setPlayBtn(true)
        musicRef.current.pause();
    }

 


  return (
    <div className={playSong === id ? 'card bg-active': 'card'}>
        <img 
            className='cover-image'
            src={img} 
            alt={title}
        />
        <div>
            <p className='artist'>{artist}</p>
            <p className='title'>{title}</p>
        </div>
        {playBtn ?
        <div 
            onClick={()=>clickOnPlay(id)}
            className='play'
        >
        <FaCirclePlay/>
        </div>
        :
        <div 
            onClick={()=>clickOnPause()}
            className='play'
        >
        <FaCirclePause/>
        </div>
        }
    
    </div>
  )
}

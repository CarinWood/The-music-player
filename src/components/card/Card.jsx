import { useState } from 'react';
import './card.css'
import { FaCirclePlay } from "react-icons/fa6";

export const Card = ({id, img, title, artist, setPlaySong}) => {
  const [songActive, setSongActive] = useState(false)

  const clickOnPlay = (id) => {
      setPlaySong(id)
      
  }

  return (
    <div className='card'>
        <img 
            className='cover-image'
            src={img} 
            alt={title}
        />
        <div>
            <p className='artist'>{artist}</p>
            <p className='title'>{title}</p>
        </div>
        <div 
            onClick={()=>clickOnPlay(id)}
            className='play'
        >
        <FaCirclePlay/>
        </div>
    
    </div>
  )
}

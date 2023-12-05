import './card.css'
import { FaCirclePlay } from "react-icons/fa6";

export const Card = ({
    id, 
    img, 
    title, 
    artist, 
    setPlaySong, 
    playSong, 
    audioElem, 
    isPlaying, 
    setIsPlaying, 
    currentSong,
    setShowPlayBtn,
    showPlayBtn
    }) => {

    const play = () => {
        setIsPlaying(true)
        setPlaySong(id)
    }



 


  return (
    <div 
        onClick={()=>play(id)}
        className={playSong === id ? 'card bg-active': 'card'}
    >
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
            className='play'
        >
        <FaCirclePlay/>
        </div>
    </div>
  )
}

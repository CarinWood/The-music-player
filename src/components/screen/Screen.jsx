import './screen.css'
import { songs } from '../../data/songs'

export const Screen = ({playSong}) => {

    const filterSongFunc = () => {
        let song = songs.filter(song => {
            return song.id === playSong
        })
        return song[0]
    }

    const setImage = () => {
      return filterSongFunc().img;
    }

    const setTitle = () => {
        return filterSongFunc().title;
    }

    const setArtist = () => {
        return filterSongFunc().artist
    }
  return (
    <>
        <div className='outer-border'>
            <div className='screen'>
                <img 
                    className='screen-image'
                        src={setImage()} 
                    alt="display screen" 
                />
            </div>
        </div>
        <div className='screen-text'>
            <p className='artist'>{setArtist()}</p>
            <p className='title'>{setTitle()}</p>
        </div>
    </>
  )
}

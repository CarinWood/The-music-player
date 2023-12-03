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
      if(playSong !== null) {
        return filterSongFunc().img;
      }else {
        return 'https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg'
      }
   
    }

    const setTitle = () => {
        if(playSong !== null) {
            return filterSongFunc().title;
        } else {
            return 'No current title'
        }
     
    }

    const setArtist = () => {
        if(playSong !== null) {
            return filterSongFunc().artist
        } else {
            return 'no artist'
        }
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

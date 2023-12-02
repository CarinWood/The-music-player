import './screen.css'
import { songs } from '../../data/songs'

export const Screen = ({playSong}) => {

    const setImage = () => {
        let song = songs.filter(song => {
            return song.id === playSong
        })
        return song[0].img
    }
  return (
    <div className='outer-border'>
        <div className='screen'>
            <img 
                className='screen-image'
                    src={setImage()} 
                alt="display screen" 
            />
        </div>
    </div>
  )
}

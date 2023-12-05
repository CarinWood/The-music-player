import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { songs } from './data/songs';
import { Screen } from './components/screen/Screen';
import { ControlButtons } from './components/controlButtons/ControlButtons';


function App() {
  const [playSong, setPlaySong] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const audioElem = useRef()

  useEffect(() => {
    if(isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isPlaying])


  return (
    <div className="app">
      <audio src={currentSong.audio} ref={audioElem}/>
    <div className='play-list'>
      {songs.map(song => {
        return <Card 
                  key={song.id} 
                  id={song.id}
                  img={song.img} 
                  title={song.title} 
                  artist={song.artist}
                  setPlaySong={setPlaySong}
                  playSong={playSong}
                  audioElem={audioElem}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  currentSong={currentSong}
                />
      })}
    </div>
    <div className='display'>
        <Screen playSong={playSong}/>
        <ControlButtons 
          setPlaySong={setPlaySong} 
          playSong={playSong}
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        /> 
    </div>
    </div>
  );
}

export default App;

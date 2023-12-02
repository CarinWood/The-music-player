import { useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { songs } from './data/songs';
import { Screen } from './components/screen/Screen';
import { ControlButtons } from './components/controlButtons/ControlButtons';




function App() {
  const [playSong, setPlaySong] = useState(1)


  return (
    <div className="app">
    <div className='play-list'>
      {songs.map(song => {
        return <Card 
                  key={song.id} 
                  id={song.id}
                  img={song.img} 
                  title={song.title} 
                  artist={song.artist}
                  setPlaySong={setPlaySong}
                />
      })}
    </div>
    <div className='display'>
        <Screen playSong={playSong}/>
        <ControlButtons/> 
    </div>
    </div>
  );
}

export default App;

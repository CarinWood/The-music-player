import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { songs } from './data/songs';

function App() {
  const [playSong, setPlaySong] = useState(0)

  useEffect(() => {
    console.log(playSong)
  }, [playSong])
 

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

    </div>
    </div>
  );
}

export default App;

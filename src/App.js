import './App.css';
import { Card } from './components/card/Card';
import { songs } from './data/songs';

function App() {
  return (
    <div className="app">
    <div className='play-list'>
      {songs.map(song => {
        return <Card key={song.id} img={song.img} title={song.title} artist={song.artist}/>
      })}
    </div>
    <div className='display'>

    </div>
    </div>
  );
}

export default App;

import './App.css'
import * as trackServices from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import { useState, useEffect } from 'react';

const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

  const fetchTracks = async () => {
    try {
    const fetchedTracks = await trackServices.index();
    setTracks(fetchedTracks);
    
    if (fetchedTracks.err) {
      throw new Error(fetchedTracks.err);
    }
    setTracks(fetchedTracks);
  } catch(err) {
    console.log(err);
  }

  };

  fetchTracks();

}, []);

return (
<>
  <h1>Jukebox</h1>
  <TrackList tracks={tracks} />
</>
)

};



export default App;
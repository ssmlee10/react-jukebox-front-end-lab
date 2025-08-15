import './App.css'
import * as trackServices from './services/trackService.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

  const fetchTracks = async () => {
    try {
    const fetchedTracks = await trackServices.index();
    if (fetchedPets.err) {
      throw new Error(fetchedPets.err);
    }
    setTracks(fetchedTracks);
  } catch(err) {
    console.log(err);
  }

  };

  fetchTracks();

}, []);

return <h1>Hello World!</h1>

};



export default App;
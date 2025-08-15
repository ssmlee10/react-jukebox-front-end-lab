import './App.css'
import * as trackServices from './services/trackService.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

  const fetchTracks = async () => {
    const fetchedTracks = await trackServices.index();
    setTracks(fetchedTracks);

  };

  fetchTracks();

}, []);

return <h1>Hello World!</h1>

};



export default App;
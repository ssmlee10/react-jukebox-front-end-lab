import "./App.css";
import * as trackServices from "./services/trackService.js";
import TrackList from "./components/TrackList/TrackList.jsx";
import TrackDetail from "./components/TrackDetail/TrackDetail.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackServices.index();
        setTracks(fetchedTracks);

        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }
        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTracks();
  }, []);

  const handleSelect = (track) => {
    setSelected(track);
  };

  return (
    <>
      <h1>Jukebox</h1>
      <TrackList tracks={tracks} handleSelect={handleSelect} />
      <TrackDetail selected={selected}/>
    </>
  );
};

export default App;

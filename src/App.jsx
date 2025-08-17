import "./App.css";
import * as trackServices from "./services/trackService.js";
import TrackList from "./components/TrackList/TrackList.jsx";
import TrackDetail from "./components/TrackDetail/TrackDetail.jsx";
import TrackForm from './components/TrackForm/TrackForm.jsx';
import { useState, useEffect } from "react";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    // selects a track that is clicked
    setSelected(track);
    // form should not show when a track is selected
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    // flips to opposite
    setIsFormOpen(!isFormOpen);
  }

  return (
    <>
      <h1>Jukebox</h1>
      <TrackList 
      tracks={tracks} 
      handleSelect={handleSelect}
      handleFormView={handleFormView}
      isFormOpen={isFormOpen} />
      {isFormOpen ? (
        <TrackForm />
      ) : (
        <TrackDetail selected={selected}/>
      )}
    </>
  );
};

export default App;

import "./App.css";
import * as trackServices from "./services/trackService.js";
import TrackList from "./components/TrackList/TrackList.jsx";
import TrackDetail from "./components/TrackDetail/TrackDetail.jsx";
import TrackForm from "./components/TrackForm/TrackForm.jsx";
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

  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    // flips to opposite, this shows the form
    setIsFormOpen(!isFormOpen);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackServices.create(formData);
      if (newTrack.err) {
        throw new Error(newTrack.err);
      }
    
      // updating state of tracks, adding newTrack to tracks array
      // tracks array is the whole array of all tracks
      setTracks([newTrack, ...tracks]);
      // reset state of isFormOpen after a new track is added
      // this closes the form
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTrack = async (formData, id) => {
    try {
      const updatedTrack = await trackServices.update(formData, id);
      if (updatedTrack.err) {
        throw new Error (updatedTrack.err);
      }

      const updatedTrackList = tracks.map((track) => {
        track._id !== updatedTrack._id ? track : updatedTrack
      });

      setSelected(updatedTrackList);
      setIsFormOpen(false);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Jukebox</h1>
      <TrackList
        tracks={tracks}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          selected={selected}
          handleUpdateTrack={handleUpdateTrack}
        />
      ) : (
        <TrackDetail selected={selected} handleFormView={handleFormView} />
      )}
    </>
  );
};

export default App;

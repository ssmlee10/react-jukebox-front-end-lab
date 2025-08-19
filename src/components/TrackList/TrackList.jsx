const TrackList = (props) => {
  return (
    <>
      <div>
        <h2>Track List</h2>
        <div>
          {!props.tracks.length ? (
            <h2>No tracks yet!</h2>
          ) : (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {props.tracks.map((track) => (
                <div key={track._id} style={{ cursor: "pointer" }}>
                  <li>
                    {track.title} - {track.artist}
                  </li>
                  <button onClick={() => {props.handlePlayButton(track)}}>
                    Play
                  </button>
                  <button onClick={() => {props.handleSelect(track); props.handleFormView(track)}}>
                    Edit
                  </button>
                  <button onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>
                </div>
              ))}
            </ul>
          )}
        </div>
        <button onClick={props.handleFormView}>
          {props.isFormOpen ? "Close Form" : "New Track"}
        </button>
      </div>
    </>
  );
};

export default TrackList;

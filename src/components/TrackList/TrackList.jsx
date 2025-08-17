const TrackList = (props) => {

  return (
    <div>
      <h2>Track List</h2>
      <div>
        {!props.tracks.length ? (
          <h2>No tracks yet!</h2> 
        ) : (
        <ul>
          {props.tracks.map((track) => (
            <li
              key={track._id}
              style={{ cursor: "pointer" }}
              onClick={() => props.handleSelect(track)}
            >
              {track.title} - {track.artist}
            </li>
          ))}
        </ul>
        )}
      </div>
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'New Track' }
      </button>
    </div>
  );
};

export default TrackList;

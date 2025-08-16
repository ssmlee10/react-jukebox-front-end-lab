const TrackList = (props) => {
  return (
    <div>
      <h2>Track List</h2>
      <div>
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
      </div>
    </div>
  );
};

export default TrackList;

const TrackList = (props) => {
  console.log(props);
  console.log(props.tracks);

  return (
    <div>
      <h2>Track List</h2>
      <div>
        <ul>
          {props.tracks.map((track) => (
            <li key={track._id}>Track: {track.title} Artist: {track.artist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;

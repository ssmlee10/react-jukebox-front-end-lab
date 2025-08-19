const NowPlaying = ({track}) => {

    return (
        <div>
        <h2>Now Playing</h2>
        <h3>Title: {track.title}</h3>
        <h3>Artist: {track.artist}</h3>
        </div>
    )
}

export default NowPlaying;
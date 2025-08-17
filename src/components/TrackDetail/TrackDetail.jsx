const TrackDetail = (props) => {
    
    // if no track is selected
    if (!props.selected) {
        return (
            <div>
                <h2>No Details.</h2>
            </div>
        )
    }

    // if track is selected
    return (
        <div>
            <h2>Title: {props.selected.title}</h2>
            <h2>Artist: {props.selected.artist}</h2>
            <div>
                <button onClick={() => props.handleFormView(props.selected)}>
                Edit Track
                </button>
                <button onClick={() => props.handleDeleteTrack(props.selected._id)}>Delete Track</button>
            </div>
        </div>
    )

};

export default TrackDetail;
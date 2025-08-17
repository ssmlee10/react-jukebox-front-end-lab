import { useState } from 'react';

const TrackForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        // stops page refresh
        event.preventDefault();
        // adds track, formData is the state value
        props.handleAddTrack(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required />
                <label htmlFor="artist">Artist</label>
                <input
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required />
                <button type="submit">Add New Track</button>
            </form>
        </div>
    )
}

export default TrackForm;
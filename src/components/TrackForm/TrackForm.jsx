import { useState } from "react";

const TrackForm = (props) => {
  const initialState = {
    title: "",
    artist: "",
  };

  // turnary: if there is a truthy value for props.selected, that will be what is in our form data
  // selected will be what's edited
  // otherwise it will be the initial state
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // stops page refresh
    event.preventDefault();
 
    if (props.selected) {
      props.handleUpdateTrack(formData, props.selected._id);
    } else {
      props.handleAddTrack(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {props.selected ? "Update Track" : "Add Track"}
        </button>
      </form>
    </div>
  );
};

export default TrackForm;

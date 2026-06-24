import { createRoot } from 'react-dom/client'
import Tracklist from './Tracklist.jsx'

function Playlist(){
    const Playlist = (props) => {
        const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );


        return (
            <div className="Playlist">
                <input value={playlistName} onChange={handleNameChange} />
                <Tracklist tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
                />
                <button className="Playlist-save" onClick={props.onSave}>Save to Spotify</button>
            </div>
        );
    }
}
export default Playlist;
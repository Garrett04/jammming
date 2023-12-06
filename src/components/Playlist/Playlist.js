import React, { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const handleNameChange = useCallback(({target}) => {
        props.onNameChange(target.value);
    }, [props.onNameChange])

    return (
        <div className='Playlist'>
            <input defaultValue={"New Playlist"} onChange={handleNameChange} />
            <Tracklist 
                tracks={props.playlistTracks} 
                onRemove={props.onRemove} 
                isRemoval={true} 
            />
            <button className='Playlist-save' onClick={props.onSave}>
                Save to Spotify
            </button>
        </div>
    );
}

export default Playlist;
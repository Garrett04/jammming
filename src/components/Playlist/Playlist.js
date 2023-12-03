import React, { useCallback, useState } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const handleNameChange = useCallback(({target}) => {
        props.onNameChange(target.value);
    }, [props.onNameChange])

    return (
        <div className={styles.div}>
            <div className={styles.inputContainer}>
                <input className={styles.input} defaultValue={"New Playlist"} onChange={handleNameChange} />
                <Tracklist 
                    tracks={props.playlistTracks} 
                    onRemove={props.onRemove} 
                    isRemoval={true} 
                />
            </div>
            <button className={styles.button} onClick={props.onSave}>
                Save to Spotify
            </button>
        </div>
    )
}

export default Playlist;
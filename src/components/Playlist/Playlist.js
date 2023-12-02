import React, { useState } from 'react';
import styles from './Playlist.module.css';

function Playlist() {
    const [ playlistName, setPlaylistName ] = useState('');

    const handleChange = ({target}) => {
        setPlaylistName(target.value)
    }

    return (
        <div className={styles.div}>
            <div className={styles.inputContainer}>
                <input className={styles.input} type='text' value={playlistName} onChange={handleChange} />
            </div>
            <button className={styles.button}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;
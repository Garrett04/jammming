import React, { useState } from 'react';
import styles from './Playlist.module.css';

function Playlist() {
    const [ playlistName, setPlaylistName ] = useState('');

    const handleChange = ({target}) => {
        setPlaylistName(target.value)
    }

    return (
        <div className={styles.div}>
            <input className={styles.input} type='text' value={playlistName} onChange={handleChange} />
            <div className={styles.line}></div>
        </div>
    )
}

export default Playlist;
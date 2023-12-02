import React, { useState } from 'react';
import styles from './App.module.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import Track from './components/Track/Track';

function App() {
    return (
        <>
            <header className={styles.header}>Jammming</header>
            <SearchBar />
            <div className={styles.div}>
                <SearchResults />
                <Playlist />
            </div>
            <Tracklist />
            <Track />
        </>
    );
}

export default App;
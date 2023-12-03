import React, { useCallback, useState } from 'react';
import styles from './App.module.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';

function App() {
    const [ searchResults, setSearchResults ] = useState([]);
    const [ playlistName, setPlaylistName ] = useState("New Playlist");
    const [ playlistTracks, setPlaylistTracks ] = useState([]);

    const search = useCallback((term) => {
        // console.log(term);
        Spotify.search(term).then(setSearchResults);
    }, []);
 
    const addTrack = useCallback((track) => {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) 
        return;

        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]);

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
    }, []);

    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
        const trackURIs = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackURIs).then(() => {
            setPlaylistName('New Playlist');
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

    return (
        <>
            <header className={styles.header}>Jammming</header>
            <SearchBar onSearch={search} />
            <div className={styles.div}>
                <SearchResults 
                    searchResults={searchResults}
                    onAdd={addTrack}
                />
                <Playlist 
                    playlistName={playlistName} 
                    playlistTracks={playlistTracks} 
                    onRemove={removeTrack}
                    onNameChange={updatePlaylistName}
                    onSave={savePlaylist}
                />
            </div>
        </>
    );
}

export default App;
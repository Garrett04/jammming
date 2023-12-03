import React, { useCallback, useState } from 'react';
import styles from './App.module.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
    const [ searchResults, setSearchResults ] = useState([
        {
            name: "Example Track Name",
            artist: "Example Track Artist",
            album: "Example Track Album",
            id: 1,
        },
        {
            name: "Example Track Name 2",
            artist: "Example Track Artist 2",
            album: "Example Track Album 2",
            id: 2,
        },
    ]);

    const [ playlistName, setPlaylistName ] = useState("New Playlist");
    const [ playlistTracks, setPlaylistTracks ] = useState([
        {
            name: "Example PlaylistTrack Name",
            artist: "Example PlaylistTrack Artist",
            album: "Example PlaylistTrack Album",
            id: 3,
        },
        {
            name: "Example PlaylistTrack Name 4",
            artist: "Example PlaylistTrack Artist 4",
            album: "Example PlaylistTrack Album 4",
            id: 4,
        },
    ]);
 
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
    });

    const search = useCallback((term) => {
        console.log(term);
    }, [])

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
import React, { useCallback, useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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

        setSearchResults((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]);

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
        setSearchResults((prevTracks) => [track, ...prevTracks]);
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
        <div>
            <h1>Ja<span className='highlight'>mmm</span>ing</h1>
            <div className='App'>
                <SearchBar onSearch={search} />
                <div className='Main'>
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
            </div>
        </div>
    );
}

export default App;
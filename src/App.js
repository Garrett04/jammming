import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import Track from './components/Track/Track';

function App() {
    return (
        <>
            <h1>Hello</h1>
            <SearchBar />
            <SearchResults />
            <Playlist />
            <Tracklist />
            <Track />
        </>
    );
}

export default App;
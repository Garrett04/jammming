import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist(props) {
    return (
        <div className='TrackList'>
            {props.tracks.map((track) => (
                <Track 
                    key={track.id}
                    track={track}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    isRemoval={props.isRemoval}
                />
            ))}
        </div>
    );
}

export default Tracklist;
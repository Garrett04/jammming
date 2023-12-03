import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <>
            <div>
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
        </>
    );
}

export default Tracklist;
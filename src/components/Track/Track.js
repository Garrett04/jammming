import React, { useCallback } from 'react';
import styles from './Track.module.css';

function Track(props) {
    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    function renderAction() {
        if (props.isRemoval) {
            return <button className={styles.TrackAction} onClick={removeTrack}>-</button>;
        } else {
            return <button className={styles.TrackAction} onClick={addTrack}>+</button>;
        }
    }

    return (
        <>
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </>
    );
}

export default Track;
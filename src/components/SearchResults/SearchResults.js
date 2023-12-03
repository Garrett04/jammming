import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <div className={styles.div}>
            <h2 className={styles.h2}>Results</h2>
            <Tracklist 
                tracks={props.searchResults}
                onAdd={props.onAdd}
                isRemoval={false}
            />
        </div>
    );
}

export default SearchResults;
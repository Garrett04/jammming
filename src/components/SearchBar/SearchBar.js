import React, { useCallback, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [ userInput, setUserInput ] = useState('');
    
    const search = useCallback(() => {
        props.onSearch(userInput);
    }, [props.onSearch, userInput]);

    const handleUserInput = useCallback(({target}) => {
        setUserInput(target.value);
    }, []);

    return (
        <div className={styles.div}>
            <input className={styles.input} placeholder='Enter a Song Title' onChange={handleUserInput}/>
            <button className={styles.searchBtn} onClick={search}>
                <img className={styles.img} src='./images/search-icon.svg'/>
                <h2 className={styles.h2}>Search</h2>
            </button>
        </div>
    );
}

export default SearchBar;
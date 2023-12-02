import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = ({target}) => {
        setUserInput(target.value);
    }

    return (
        <div className={styles.div}>
            <input className={styles.input} type='text' value={userInput} onChange={handleChange}/>
            <button className={styles.searchBtn}>
                <img className={styles.img} src='./images/search-icon.svg'/>
                <h2 className={styles.h2}>Search</h2>
            </button>
        </div>
    );
}

export default SearchBar;
import React, { useCallback, useState } from 'react';
import './SearchBar.css';
import searchIcon from '../../images/search-icon.svg';

function SearchBar(props) {
    const [ userInput, setUserInput ] = useState('');
    
    const search = useCallback(() => {
        props.onSearch(userInput);
    }, [props.onSearch, userInput]);

    const handleUserInput = useCallback(({target}) => {
        setUserInput(target.value);
    }, []);

    return (
        <div className='SearchBar'>
            <input placeholder='Enter a Song Title' onChange={handleUserInput}/>
            <button className='SearchButton' onClick={search}>
                <img src={searchIcon}/>
                <h2>Search</h2>
            </button>
        </div>
    );
}

export default SearchBar;
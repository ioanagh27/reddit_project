/*import  React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './searchBarSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const sidebar = document.getElementById('sidebar');

    const handleTextChange = ({target}) => {
        setSearchTerm(target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchTerm));
        setSearchTerm('');
        if (sidebar.style.display === 'block'){
            sidebar.style.display = 'none'
        }
    };

    return (
        <form id="search-bar">
            <input type="text"  placeholder="Search for something?" value={searchTerm} id="search-input" onChange={handleTextChange} />
            <button id="search-button" onClick={submit}>Search!</button>
        </form>
    )
}
*/
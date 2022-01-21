import React, {useState, useEffect}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import '../header/Header.css';
import { Link } from "react-router-dom";
import { selectSearchTerm, setSearchTerm } from "../redditComponent/redditSlice";



const Header = () => {
   const dispatch = useDispatch();
   const searchTerm = useSelector(selectSearchTerm);
   const [localTerm, setLocalTerm] = useState('');

   useEffect(() => {
       setLocalTerm(searchTerm);
   }, [searchTerm]);

   const onSearchSubmit = (e) => {
       e.preventDefault();
       dispatch(setSearchTerm(localTerm));
   }

    return (
        <div className="header">
            <div className="App-logo">               
                <h1>{<FontAwesomeIcon icon={faRedditAlien}/>}Reddit<span>Minimal</span></h1>
            </div>
            <div className="searchBarContainer">
                <form onSubmit={onSearchSubmit}>
                    <input
                    value={localTerm}
                    onChange={e => setLocalTerm(e.target.value)} 
                    type='text'
                    placeholder="Search for..." />
                    <button
                    type="submit"
                    onSubmit={onSearchSubmit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
                
            </div>
        </div>
    )
};

export default Header;
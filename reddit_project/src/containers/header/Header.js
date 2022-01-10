import React, {useState, useEffect}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import '../header/Header.css';
import { SearchBar } from "../searchBar/SearchBar";
import { changeSubreddit } from "../subredditComponent/subredditSlice";
import { Link } from "react-router-dom";



const Header = () => {
   const dispatch = useDispatch();
   const onTitleClick = () => {
       dispatch(changeSubreddit('/r/Home/'));
    }
    return (
        <div className="header">
            <div className="App-logo">               
                <Link to='/' className="link"><h1 onClick={onTitleClick}>{<FontAwesomeIcon icon={faRedditAlien}/>}Reddit<span>Minimal</span></h1></Link>
            </div>
            <div className="searchBarContainer">
                <SearchBar />
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
};

export default Header;
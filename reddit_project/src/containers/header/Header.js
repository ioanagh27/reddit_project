import React, {useState, useEffect}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import '../header/Header.css';


const Header = () => {
    const [term, setTerm] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(term);
    }
    return (
        <div className="header">
            <div className="App-logo">                
                <h1>{<FontAwesomeIcon icon={faRedditAlien} />}Reddit<span>Minimal</span></h1>
            </div>
            <div className="searchBarContainer">
                <form onSubmit={submitHandler}>
                    <input type='text' value={term} placeholder="Search reddit..." onChange={(e) => setTerm(e.target.value)}/>
                    <button type="submit"><i className="fa fa-search">{<FontAwesomeIcon icon={faSearchengin}/> }</i></button>
                </form>
            </div>
        </div>
    )
};

export default Header;
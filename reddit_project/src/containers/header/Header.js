import React, {useState, useEffect}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions/redditActions";
import '../header/Header.css';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.searchTerm);
    const dispatch = useDispatch();
  
    const onSearchTermChange = (e) => {
      setSearchTermLocal(e.target.value);
    };
  
    useEffect(() => {
      setSearchTermLocal(searchTerm);
    }, [searchTerm]);
  
    const onSearchTermSubmit = (e) => {
      e.preventDefault();
      dispatch(setSearchTerm(searchTermLocal));
    };
    return (
        <div className="fixed_header">
            <div className="App-logo">                
                <h1>{<FontAwesomeIcon icon={faRedditAlien} />}Reddit<span>Minimal</span></h1>
            </div>
            <div className="searchBarContainer">
                <form className="searchBar" onSubmit={onSearchTermSubmit}>
                    <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                    />
                    <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                        Search Reddit
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Header;
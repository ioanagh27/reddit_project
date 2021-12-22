import { useDispatch, useSelector } from "react-redux";
import { changeActiveReddit } from "./searchBarSlice";

export const SearchBar = () => {
    const searchValue = useSelector(state => state.search);
    const dispatch = useDispatch();

    const onTextChange = (e) => {
        dispatch(changeActiveReddit(e.target.value))
    }

    return (
        <input 
        className="searchBar"
        value={searchValue}
        placeholder="Search..."
        onChange={onTextChange} />
    )
}
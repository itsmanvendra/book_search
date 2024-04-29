import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { searchBook } from "../features/searchBookSlice";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    
    const handleSearch = () => {
        dispatch(searchBook(search));
    };
    
  return (
    <div className="header">
      <div>Search for books</div>
      <div className="searchContainer">
        <input
          className="searchBookInput"
          value={search}
          type="text"
          placeholder="Search Books"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchBookButton" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

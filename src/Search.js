import { useState, useRef } from "react";

const Search = function ({ handleSubmit, location }) {
  const [term, setTerm] = useState("");
  const inputRef = useRef();

  const handleOnSubmit = function (e) {
    e.preventDefault();
    handleSubmit(term);
    setTerm("");
    inputRef.current.blur();
  };

  const handleOnChange = function (e) {
    setTerm(e.target.value);
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleOnSubmit}>
        <input
          ref={inputRef}
          onChange={handleOnChange}
          className="searchBar"
          placeholder={
            location ? `We're looking at weather in ${location}` : "Search City"
          }
          value={term}
        ></input>
      </form>
    </div>
  );
};

export default Search;

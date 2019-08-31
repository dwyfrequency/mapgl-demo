import React, { useState } from "react";

const SearchBar = ({ setSearchVal }) => {
  const [inputVal, setInputVal] = useState("");
  const handleChange = e => {
    setInputVal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchVal(inputVal);
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" value={inputVal} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;

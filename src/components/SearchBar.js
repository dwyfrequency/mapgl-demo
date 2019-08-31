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
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="inputAddress"
        name="search"
        value={inputVal}
        onChange={handleChange}
        placeholder="Venue Name"
      />
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Primary
      </button>
    </div>
  );

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input name="search" value={inputVal} onChange={handleChange} />
  //     </form>
  //   </div>
  // );
};

export default SearchBar;

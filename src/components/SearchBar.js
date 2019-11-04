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
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          name="search"
          value={inputVal}
          onChange={handleChange}
          placeholder="Venue Name"
        />
      </div>
      <div className="col-sm-3 my-1">
        <input
          className="form-control"
          value={inputVal}
          onChange={handleChange}
          placeholder="City Name or Lat/Long"
        />
      </div>
      <div className="col-sm-3 my-1">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

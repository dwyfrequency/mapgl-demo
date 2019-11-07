import React, { useState } from "react";

const SearchBarPoly = ({ setSearchVal, setPolyCoords }) => {
  const [queryVal, setQueryVal] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "queryVal") setQueryVal(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchVal(queryVal);
    setPolyCoords();
    setQueryVal("");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          name="queryVal"
          value={queryVal}
          onChange={handleChange}
          placeholder="Query Value"
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

export default SearchBarPoly;

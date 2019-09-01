import React, { useState } from "react";

const SelectLocation = ({ setSearchVal }) => {
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
    <form
      className="form-inline justify-content-center mb-2"
      onSubmit={handleSubmit}
    >
      <div className="form-group mx-sm-3 mt-2">
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
      <button type="submit" className="btn btn-primary mt-2">
        Primary
      </button>
    </form>
  );
};

export default SelectLocation;

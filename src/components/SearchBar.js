import React, { useState } from "react";

const SearchBar = ({ setSearchVal, setLatLon: setLatLonParent }) => {
  const [venueName, setVenueName] = useState("");
  const [latlon, setLatLon] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "venueName") setVenueName(value);
    if (name === "near") setLatLon(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (venueName.length) {
      setSearchVal(venueName);
    }
    if (latlon.indexOf(",") > -1) {
      setLatLonParent(latlon.split(","));
    }
    setVenueName("");
    setLatLon("");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          name="venueName"
          value={venueName}
          onChange={handleChange}
          placeholder="Venue Name"
        />
      </div>
      <div className="col-sm-3 my-1">
        <input
          className="form-control"
          name="near"
          value={latlon}
          onChange={handleChange}
          placeholder="Lat,Long"
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

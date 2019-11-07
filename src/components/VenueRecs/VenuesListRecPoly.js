import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";
import MapGLDrawPoly from "./MapGLDrawPoly";

const VenuesListRecPoly = ({ foursquare }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [latlon, setLatLon] = useState("40.73061,-73.935242");
  const inputEl = useRef(null);

  useEffect(() => {
    const getVenues = async (query, latlon) => {
      const data = await foursquare.venues.recommendations({
        query,
        ll: latlon,
        limit: 5
      });
      setVenues(data.response.group.results || []);
    };
    if (query) getVenues(query, latlon);
  }, [query, foursquare, latlon]);

  const getDrawData = () => {
    // `current` points to the mounted text input element
    console.log(inputEl.draw.getAll());
  };

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} setLatLon={setLatLon} />
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      <MapGLDrawPoly latlon={latlon.split(",")} ref={inputEl} />
      {venues.length ? <VenueRecItems venues={venues} /> : null}
    </div>
  );
};

export default VenuesListRecPoly;

import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";
import MapGL from "./MapGL";

const VenuesListRecom = ({ foursquare }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [latlon, setLatLon] = useState("40.73061,-73.935242");

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

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} setLatLon={setLatLon} />
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      <MapGL latlon={latlon.split(",")} venues={venues}></MapGL>
      {venues.length ? <VenueRecItems venues={venues} /> : null}
    </div>
  );
};

export default VenuesListRecom;

import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";
import MapGL from "./MapGL";

const VenuesListRecom = ({ foursquare, latlon = [40.73061, -73.935242] }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async (query, ll) => {
      const data = await foursquare.venues.recommendations({
        query,
        ll: ll.join(","),
        limit: 5
      });
      setVenues(data.response.group.results || []);
    };
    if (query) getVenues(query, latlon);
  }, [query, foursquare, latlon]);

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} />
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      <MapGL latlon={latlon} venues={venues}></MapGL>
      {venues.length ? <VenueRecItems venues={venues} /> : null}
    </div>
  );
};

export default VenuesListRecom;

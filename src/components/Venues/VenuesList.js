import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueItems from "./VenueItems";

const VenuesList = ({ foursquare, latlon = [40.73061, -73.935242] }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async (query, ll) => {
      const data = await foursquare.venues.getVenues({
        query,
        ll: ll.join(","),
        limit: 5
      });
      setVenues(data.response.venues);
    };
    if (query) getVenues(query, latlon);
  }, [query, foursquare, latlon]);

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} />
      {venues.length ? <VenueItems venues={venues} /> : null}
      {/* <MapGL></MapGL> */}
    </div>
  );
};

export default VenuesList;

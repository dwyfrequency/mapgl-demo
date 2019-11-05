import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueItems from "./VenueItems";

const VenuesList = ({ foursquare, latlon = [40.73061, -73.935242] }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [lat, lon] = latlon;

  useEffect(() => {
    const getVenues = async (query, lat, lon) => {
      const data = await foursquare.venues.getVenues({
        query,
        ll: `${lat},${lon}`,
        limit: 5
      });
      setVenues(data.response.venues);
    };
    if (query) getVenues(query, lat, lon);
  }, [query, foursquare, lat, lon]);

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} />
      {venues.length ? <VenueItems venues={venues} /> : null}
      {/* <MapGL></MapGL> */}
    </div>
  );
};

export default VenuesList;

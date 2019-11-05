import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";
import MapGL from "./MapGL";

const VenuesListRecom = ({ foursquare, latlon = [40.73061, -73.935242] }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [lat, lon] = latlon;

  useEffect(() => {
    const getVenues = async (query, lat, lon) => {
      const data = await foursquare.venues.recommendations({
        query,
        ll: `${lat},${lon}`,
        limit: 5
      });
      setVenues(data.response.group.results || []);
    };
    if (query) getVenues(query, lat, lon);
  }, [query, foursquare, lat, lon]);

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

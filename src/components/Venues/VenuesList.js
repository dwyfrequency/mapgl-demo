import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueItems from "./VenueItems";

const VenuesList = ({ foursquare }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [latlon, setLatLon] = useState("40.73061,-73.935242");

  useEffect(() => {
    console.log("VenuesList useEffect");
    const getVenues = async (query, latlon) => {
      const data = await foursquare.venues.getVenues({
        query,
        ll: latlon,
        limit: 5
      });
      setVenues(data.response.venues || []);
    };
    if (query) getVenues(query, latlon);
  }, [query, foursquare, latlon]);

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} setLatLon={setLatLon} />
      {venues.length ? <VenueItems venues={venues} /> : null}
      {/* <MapGL></MapGL> */}
    </div>
  );
};

export default VenuesList;

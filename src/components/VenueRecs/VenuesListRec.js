import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";

const VenuesListRecom = ({ foursquare, latlon }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async (query, ll) => {
      const data = await foursquare.venues.recommendations({
        query,
        ll: ll.join(","),
        limit: 5
      });
      console.log({ data });
      setVenues(data.response.group.results || []);
    };
    if (query) getVenues(query, latlon);
  }, [query, foursquare, latlon]);

  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} />
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      {venues.length ? <VenueRecItems venues={venues} /> : null}
      {/* <MapGL></MapGL> */}
    </div>
  );
};

export default VenuesListRecom;

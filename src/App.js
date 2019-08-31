import React, { useState, useEffect } from "react";
// import MapGL from "./components/MapGL";
import SearchBar from "./components/SearchBar";
import fsqSetup from "react-foursquare";
import VenueItems from "./components/VenueItems";
import "bootstrap/dist/css/bootstrap.min.css";

console.log(process.env);

// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const foursquare = fsqSetup({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

const App = () => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const getVenues = async (query, ll) => {
    const data = await foursquare.venues.getVenues({
      query,
      ll: ll.join(","),
      limit: 5
    });
    setVenues(data.response.venues);
  };

  useEffect(() => {
    if (query) getVenues(query, [40.73061, -73.935242]);
  }, [query]);

  console.log({ venues });
  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} />
      {venues.length && <VenueItems venues={venues} />}
      {/* <MapGL></MapGL> */}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import MapGL from "./components/MapGL";
import SearchBar from "./components/SearchBar";
import fsqSetup from "react-foursquare";
import VenueItems from "./components/VenueItems";
import VenuesList from "./components/VenuesList";

console.log(process.env);

// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const foursquare = fsqSetup({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

const App = () => {
  // return <VenuesList foursquare={foursquare} />;
  return (
    <Router>
      <Route
        path={"/"}
        render={() => (
          <ul>
            <Link to={"/venueslist"}>List Venues via Search</Link>
          </ul>
        )}
      />
      <Route path={"/venueslist"} component={VenuesList} />
    </Router>
  );
};

export default App;

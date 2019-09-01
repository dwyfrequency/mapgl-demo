import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import MapGL from "./components/MapGL";
import fsqSetup from "react-foursquare";
import VenuesList from "./components/VenuesList";
import NavBar from "./components/NavBar";
import VenuesListRecom from "./components/VenuesListRecom";

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
      <Route path={"/"} component={NavBar}></Route>
      <Route
        path={"/venues/list"}
        render={() => <VenuesList foursquare={foursquare} />}
      />
      <Route
        path={"/venues/recommendations"}
        render={() => <VenuesListRecom foursquare={foursquare} />}
      />
    </Router>
  );
};

export default App;

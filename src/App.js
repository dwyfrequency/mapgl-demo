import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import MapGL from "./components/MapGL";
import fsqSetup from "react-foursquare";
import VenuesList from "./components/Venues/VenuesList";
import NavBar from "./components/NavBar";
import VenuesListRec from "./components/VenueRecs/VenuesListRec";

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

  const [latlon, setlatlon] = useState([40.73061, -73.935242]);
  return (
    <Router>
      <Route path={"/"} component={NavBar}></Route>
      <Route
        path={"/venues/list"}
        render={() => <VenuesList foursquare={foursquare} latlon={latlon} />}
      />
      <Route
        path={"/venues/recommendations"}
        render={() => <VenuesListRec foursquare={foursquare} latlon={latlon} />}
      />
    </Router>
  );
};

export default App;

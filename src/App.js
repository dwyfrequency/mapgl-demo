import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import MapGL from "./components/MapGL";
import Foursquare from "@foursquare/foursquare-places";
import VenuesList from "./components/Venues/VenuesList";
import NavBar from "./components/NavBar";
import VenuesListRec from "./components/VenueRecs/VenuesListRec";
// import MapGL from "./components/VenueRecs/MapGL";

// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

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
      />{" "}
    </Router>
  );
};

export default App;

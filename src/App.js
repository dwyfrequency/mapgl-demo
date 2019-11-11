import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Foursquare from "@foursquare/foursquare-places";
import VenuesList from "./components/Venues/VenuesList";
import NavBar from "./components/NavBar";
import VenuesListRec from "./components/VenueRecs/VenuesListRec";
import VenuesListRecPoly from "./components/VenueRecs/VenuesListRecPoly";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Adding toast
toast.configure();

// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

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
        exact
        path={"/venues/recommendations"}
        render={() => <VenuesListRec foursquare={foursquare} />}
      />{" "}
      <Route
        path={"/venues/recommendations/poly"}
        render={() => (
          <VenuesListRecPoly foursquare={foursquare}></VenuesListRecPoly>
        )}
      />{" "}
    </Router>
  );
};

export default App;

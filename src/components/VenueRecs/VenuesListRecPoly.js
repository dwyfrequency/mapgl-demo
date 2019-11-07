import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../SearchBar";
import VenueRecItems from "./VenueRecItems";
import MapGLDrawPoly from "./MapGLDrawPoly";

const VenuesListRecPoly = ({ foursquare }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [latlon, setLatLon] = useState("40.73061,-73.935242");
  const [polygonCoords, setPolygonCoords] = useState([]);

  useEffect(() => {
    console.log("useEffect VenuesListRecPoly");
    const getVenues = async (query, latlon) => {
      console.log("getVenues");
      const transformPolyCords = polygonCoords.reduce((accum, innerArr) => {
        return accum + innerArr.join(",") + ";";
      }, "");
      console.log({ transformPolyCords });
      const data = await foursquare.venues.recommendations({
        query,
        polygon: transformPolyCords,
        limit: 5
      });
      console.log({ data });
      setVenues(data.response.group.results || []);
    };
    if (polygonCoords.length) getVenues(query, latlon);
  }, [query, foursquare, latlon, polygonCoords]);

  console.log({ venues });
  return (
    <div className="App">
      <SearchBar setSearchVal={setQueryVal} setLatLon={setLatLon} />
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      <MapGLDrawPoly
        latlon={latlon.split(",")}
        setPolygonCoords={setPolygonCoords}
        venues={venues}
      />
      {venues.length ? <VenueRecItems venues={venues} /> : null}
    </div>
  );
};

export default VenuesListRecPoly;

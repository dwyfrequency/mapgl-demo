import React, { useState, useEffect } from "react";
import VenueRecItems from "./VenueRecItems";
import MapGLDrawPoly from "./MapGLDrawPoly";

const INIT_MAP_ZOOM = "40.73061,-73.935242";

const VenuesListRecPoly = ({ foursquare }) => {
  const [query, setQueryVal] = useState("");
  const [venues, setVenues] = useState([]);
  const [polygonCoords, setPolygonCoords] = useState([]);

  useEffect(() => {
    const getVenues = async query => {
      const transformPolyCords = polygonCoords.reduce((accum, innerArr) => {
        return accum + innerArr.join(",") + ";";
      }, "");
      const data = await foursquare.venues.recommendations({
        query,
        polygon: transformPolyCords,
        limit: 5
      });
      setVenues(data.response.group.results || []);
    };
    if (polygonCoords.length) getVenues(query);
  }, [query, foursquare, polygonCoords, polygonCoords.length]);

  console.log({ venues });
  return (
    <div className="App">
      {/* {venues.length ? JSON.stringify(venues) : null} */}
      <MapGLDrawPoly
        latlon={INIT_MAP_ZOOM.split(",")}
        setPolygonCoords={setPolygonCoords}
        venues={venues}
        setQueryVal={setQueryVal}
      />
      {venues.length ? <VenueRecItems venues={venues} /> : null}
    </div>
  );
};

export default VenuesListRecPoly;

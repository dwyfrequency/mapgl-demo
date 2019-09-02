import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPGL_ACCESS_CODE
});

const MapGL = ({ venues = [], latlon }) => {
  latlon = latlon.reverse();
  const features = [],
    popups = [];
  venues.forEach(({ id, venue }) => {
    const {
      name,
      url,
      location: { lat, lng }
    } = venue;
    features.push(<Feature key={id} coordinates={[lng, lat]} />);
    popups.push(
      <Popup
        key={id}
        coordinates={[lng, lat]}
        anchor="bottom"
        className="popup"
        onClick={() => window.open(url)}
      >
        <p>{name}</p>
      </Popup>
    );
  });
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "50vh",
          width: "100vw"
        }}
        center={latlon || [-73.935242, 40.73061]}
      >
        {/* markers are the black location signs */}
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          {features}
        </Layer>
        {/* popups are the white areas coming out of the map */}
        {popups}
      </Map>
    </div>
  );
};

export default MapGL;

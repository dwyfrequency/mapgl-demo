import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPGL_ACCESS_CODE
});

const MapGL = ({ latlon }) => {
  latlon = latlon.reverse();
  console.log(latlon);
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
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={latlon || [-73.935242, 40.73061]} />
        </Layer>
      </Map>
    </div>
  );
};

export default MapGL;

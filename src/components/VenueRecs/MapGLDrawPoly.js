import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import SearchBarPoly from "./SearchBarPoly";
import { toast } from "react-toastify";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPGL_ACCESS_CODE
});

const notifyMissingPolyCoords = () => {
  toast.error("Please use tool on side of the map to draw polygon", {
    position: toast.POSITION.TOP_CENTER
  });
};

class MapGLDrawPoly extends Component {
  handleButtonClick = () => {
    const data = this.drawControl.draw.getAll(); // Or any other API method
    if (data.features.length) {
      const poly = data.features[0].geometry.coordinates.map(arr =>
        arr.reverse()
      );
      this.props.setPolygonCoords(poly);
    } else {
      notifyMissingPolyCoords();
    }
  };

  render() {
    let { latlon, venues = [] } = this.props;
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
            height: "70vh",
            width: "100vw"
          }}
          center={latlon.reverse() || [-73.935242, 40.73061]}
          zoom={[12]}
        >
          <DrawControl
            ref={drawControl => {
              this.drawControl = drawControl;
            }}
          />
          {/* markers are the black location signs */}
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            {features}
          </Layer>
          {/* popups are the white areas coming out of the map */}
          {popups}
        </Map>
        <SearchBarPoly
          setSearchVal={this.props.setQueryVal}
          setPolyCoords={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default MapGLDrawPoly;

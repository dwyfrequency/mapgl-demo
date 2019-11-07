import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPGL_ACCESS_CODE
});

class MapGLDrawPoly extends Component {
  handleButtonClick = () => {
    console.log(this.drawControl.draw.getAll()); // Or any other API method
  };

  render() {
    let { latlon } = this.props;

    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "80vh",
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
        </Map>
        <button onClick={this.handleButtonClick}>Get Polygon Data</button>
      </div>
    );
  }
}

export default MapGLDrawPoly;

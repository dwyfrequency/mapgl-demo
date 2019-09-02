import React from "react";
import { FaStar } from "react-icons/fa";

const VenueRecCard = props => {
  const { photo, venue } = props;
  const photoUrl = photo
    ? `${photo.prefix}200x200${photo.suffix}`
    : "https://source.unsplash.com/random/200x200";
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <li onClick={() => "clicked"} className="list-group-item">
            <div className="venue-list media">
              <div className="media-left">
                <img className="media-object" src={photoUrl} alt="venue" />
              </div>
              <div className="media-body pl-4">
                <div className="media-heading">
                  <a
                    href={`https://foursquare.com/v/${venue.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {venue.name}
                  </a>
                </div>
                <div>{venue.location.formattedAddress.join(" ")}</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaStar />
                  <span className="pl-2">{venue.rating}</span>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default VenueRecCard;

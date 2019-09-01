import React from "react";

const VenueCard = ({ name, url, location, categories }) => {
  const { formattedAddress } = location;
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <div className="card border-dark mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{formattedAddress.join(" ")} </p>
              <a href={url} className="btn btn-primary">
                site
              </a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default VenueCard;

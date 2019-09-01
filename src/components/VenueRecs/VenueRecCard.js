import React from "react";

const VenueRecCard = props => {
  const { photo, venue } = props;
  const photoUrl = photo
    ? `${photo.prefix}200x200${photo.suffix}`
    : "https://source.unsplash.com/random/200x200";
  return <div>blem</div>;
};

export default VenueRecCard;

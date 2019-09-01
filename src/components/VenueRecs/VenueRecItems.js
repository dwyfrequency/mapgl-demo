import React from "react";
import VenueRecCard from "./VenueRecCard";

const VenueItems = ({ venues }) => {
  return venues.map(venue => <VenueRecCard {...venue} key={venue.id} />);
};

export default VenueItems;

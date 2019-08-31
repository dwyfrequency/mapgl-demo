import React from "react";
import VenueCard from "./VenueCard";

const VenueItems = ({ venues }) => {
  return venues.map(venue => <VenueCard {...venue} key={venue.id} />);
};

export default VenueItems;

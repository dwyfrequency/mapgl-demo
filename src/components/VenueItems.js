import React from "react";
import VenueCard from "./VenueCard";

const VenueItems = ({ venues }) => {
  return venues.map(venue => <VenueCard {...venue} />);
};

export default VenueItems;

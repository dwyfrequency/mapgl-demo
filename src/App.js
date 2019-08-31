import React, { useState } from "react";
import MapGL from "./components/MapGL";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="App">
      <SearchBar setSearchVal={setSearchVal} />
      {searchVal}
      <MapGL></MapGL>
    </div>
  );
};

export default App;

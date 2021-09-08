import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearchQuery(query) {
    setSearchQuery(query)
  }

  return (
    <div className="app">
      <Header onSubmit={handleSearchQuery} />
      <ListingsContainer searchQuery={searchQuery} />
    </div>
  );
}

export default App;

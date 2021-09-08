import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
  const [listings, setListings] = useState([])
  console.log(searchQuery)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(response => response.json())
      .then(listingsArray => {
        setListings(listingsArray)
      })
  }, [])

  function handleListingDelete(id) {
    const updatedListingsArr = listings.filter(listing => listing.id !== id)
    setListings(updatedListingsArr)
  }


  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const listingCards = filteredListings.map((listingObject) => {
    return <ListingCard key={listingObject.id} listing={listingObject} onDelete={handleListingDelete} />;
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

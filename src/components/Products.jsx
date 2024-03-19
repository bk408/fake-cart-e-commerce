import { useState } from "react";

/* eslint-disable react/prop-types */
const Products = ({ productsData }) => {
  const [showFiltered, setShowFiltered] = useState(false);
  const [jewelFiltered, setJewelFiltered] = useState(false);
  const [menClothingFilter, setMenClothingFilter] = useState(false);

  const toggleFilter = () => {
    setShowFiltered(!showFiltered);
  };

  const toggleJewel = () => {
    setJewelFiltered(!jewelFiltered);
  };

  const toggleMen = () => {
    setMenClothingFilter(!menClothingFilter);
  };

  const filteredProducts = showFiltered
    ? productsData.filter((product) => product.rating.rate > 4)
    : productsData && jewelFiltered
    ? productsData.filter((product) => product.category == "jewelery")
    : productsData && menClothingFilter
    ? productsData.filter((product) => product.category == "men's clothing")
    : productsData;

  return (
    <div className="filter-container">
      <div className="filter-section">
        <button onClick={toggleFilter}>Rating</button>
      </div>

      <div className="filter-section">
        <button onClick={toggleJewel}>Jewelery</button>
      </div>

      <div className="filter-section">
        <button onClick={toggleMen}>Men clothing</button>
      </div>

      <div className="products">
        {filteredProducts.map((product, id) => (
          <div className="products-card" key={id}>
            <img
              src={product.image}
              alt="product-img"
              className="product-image"
            />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>{shortDescription(product.description)}</p>
            <p> {product.category} </p>
            <p> {product.rating.rate} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to truncate description to a maximum of 10 words

const shortDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 10) {
    return words.splice(0, 10).join(" ") + "...";
  }
  return description;
};

export default Products;

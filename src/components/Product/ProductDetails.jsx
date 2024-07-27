import React, { useState } from "react";
import axios from "axios";

function ProductDetails() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the product details!",
          error
        );
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Product ID"
          required
        />
        <button type="submit">Get Product Details</button>
      </form>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

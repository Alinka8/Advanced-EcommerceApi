import React, { useState } from "react";
import axios from "axios";

function DeleteProduct() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:5000/api/products/${id}`)
      .then((response) => {
        alert("Product deleted successfully!");
      })
      .catch((error) => {
        console.error("There was an error deleting the product!", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Product ID"
        required
      />
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
}

export default DeleteProduct;

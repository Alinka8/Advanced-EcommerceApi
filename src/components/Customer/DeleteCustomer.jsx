import React, { useState } from "react";
import axios from "axios";

function DeleteCustomer() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:5000/api/customers/${id}`)
      .then((response) => {
        alert("Customer deleted successfully!");
      })
      .catch((error) => {
        console.error("There was an error deleting the customer!", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Customer ID"
        required
      />
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
}

export default DeleteCustomer;

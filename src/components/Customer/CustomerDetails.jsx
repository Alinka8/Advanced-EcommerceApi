import React, { useState } from "react";
import axios from "axios";

function CustomerDetails() {
  const [id, setId] = useState("");
  const [customer, setCustomer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/customers/${id}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the customer details!",
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
          placeholder="Customer ID"
          required
        />
        <button type="submit">Get Customer Details</button>
      </form>
      {customer && (
        <div>
          <h2>{customer.name}</h2>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      )}
    </div>
  );
}

export default CustomerDetails;

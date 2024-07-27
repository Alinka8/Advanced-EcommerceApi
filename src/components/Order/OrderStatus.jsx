import React, { useState } from "react";
import axios from "axios";

function OrderStatus() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/orders/${id}/status`)
      .then((response) => {
        setStatus(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the order status!", error);
      });
  };

  return (
    <div className="component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Order ID"
          required
        />
        <button type="submit">Track Order Status</button>
      </form>
      {status && (
        <div>
          <h2>Order Date: {status.order_date}</h2>
          <h3>Status: {status.status}</h3>
          <h3>Expected Delivery Date: {status.expected_delivery_date}</h3>
        </div>
      )}
    </div>
  );
}

export default OrderStatus;

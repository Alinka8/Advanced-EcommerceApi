import React, { useState } from "react";
import axios from "axios";


function OrderDetails() {
  const [id, setId] = useState("");
  const [order, setOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/orders/${id}`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the order details!", error);
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
        <button type="submit">Get Order Details</button>
      </form>
      {order && (
        <div>
          <h2>Order Date: {order.order_date}</h2>
          <h3>Products:</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.product.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;

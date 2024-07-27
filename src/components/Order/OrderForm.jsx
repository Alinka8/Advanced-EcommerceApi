import React, { useState } from "react";
import axios from "axios";


function OrderForm() {
  const [customerId, setCustomerId] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [products, setProducts] = useState([{ productId: "", quantity: 1 }]);

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { productId: "", quantity: 1 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/orders", {
        customer_id: customerId,
        order_date: orderDate,
        products: products.map((p) => ({
          product_id: p.productId,
          quantity: p.quantity,
        })),
      })
      .then((response) => {
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.error("There was an error placing the order!", error);
      });
  };

  return (
    <div className="component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          placeholder="Customer ID"
          required
        />
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          placeholder="Order Date"
          required
        />
        {products.map((product, index) => (
          <div key={index}>
            <input
              type="text"
              value={product.productId}
              onChange={(e) =>
                handleProductChange(index, "productId", e.target.value)
              }
              placeholder="Product ID"
              required
            />
            <input
              type="number"
              value={product.quantity}
              onChange={(e) =>
                handleProductChange(index, "quantity", e.target.value)
              }
              placeholder="Quantity"
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>
          Add Another Product
        </button>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;

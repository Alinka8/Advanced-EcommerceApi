import { Link, NavLink } from "react-router-dom";
import React from "react";

function NavigationBar() {
  return (
    <nav className="nav">
      <Link to="/add-customer">Add Customer</Link>
      <Link to="add-customer-list/">Customer</Link>
      <Link to="add-update-customer/">Update Customer</Link>
      <Link to="delete-customer/">Delete Customer</Link>
      <Link to="/add-product">Add Product</Link>
      <Link to="/product-list">Product Details</Link>
      <Link to="/update-product">Update Product</Link>
      <Link to="/delete-product">Delete Product</Link>
      <Link to="/order-list">Add Order </Link>
      <Link to="/order-details">Order Details</Link>
      <Link to="/order-status">Order Status</Link>
    </nav>
  );
}

export default NavigationBar;

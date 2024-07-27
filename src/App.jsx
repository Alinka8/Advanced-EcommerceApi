import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CustomerForm from "./components/Customer/CustomerForm";
import CustomerDetails from "./components/Customer/CustomerDetails";
import UpdateCustomerForm from "./components/Customer/UpdateCustomerForm";
import ProductForm from "./components/Product/ProductForm";
import ProductList from "./components/Product/ProductDetails";
import "./App.css";
import React from "react";
import DeleteCustomer from "./components/Customer/DeleteCustomer";
import ProductDetails from "./components/Product/ProductDetails";
import DeleteProduct from "./components/Product/DeleteProduct";
import UpdateProductForm from "./components/Product/UpdateProduct";
import OrderForm from "./components/Order/OrderForm";
import OrderDetails from "./components/Order/OrderDetails";
import OrderStatus from "./components/Order/OrderStatus";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/add-customer" element={<CustomerForm />} />
        <Route path="add-customer-list" element={<CustomerDetails />} />
        <Route path="add-update-customer" element={<UpdateCustomerForm />} />
        <Route path="delete-customer" element={<DeleteCustomer />} />
        <Route path="add-product" element={<ProductForm />} />
        <Route path="/product-list" element={<ProductDetails />} />
        <Route path="/update-product" element={<UpdateProductForm />} />
        <Route path="/delete-product" element={<DeleteProduct />} />
        <Route path="/order-list" element={<OrderForm />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-status" element={<OrderStatus />} />
      </Routes>
    </div>
  );
}

export default App;

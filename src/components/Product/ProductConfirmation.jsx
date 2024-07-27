import React from "react";

function ProductConfirmation({ action, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <p>Are you sure you want to {action} this product?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default ProductConfirmation;

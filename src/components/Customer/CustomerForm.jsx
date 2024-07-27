// import React, { useState } from "react";
// import axios from "axios";

// function CustomerForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://127.0.0.1:5000/api/customers", { name, email, phone })
//       .then((response) => {
//         alert("Customer created successfully!");
//       })
//       .catch((error) => {
//         console.error("There was an error creating the customer!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="tel"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         placeholder="Phone"
//         required
//       />
//       <button type="submit">Create Customer</button>
//     </form>
//   );
// }

// export default CustomerForm;

// import React, { useState } from "react";
// import axios from "axios";

// function CustomerForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://127.0.0.1:5000/api/customer", { name, email, phone }) // Make sure the URL matches the Flask endpoint
//       .then((response) => {
//         alert("Customer created successfully!");
//       })
//       .catch((error) => {
//         console.error("There was an error creating the customer!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="tel"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         placeholder="Phone"
//         required
//       />
//       <button type="submit">Create Customer</button>
//     </form>
//   );
// }

// export default CustomerForm;

import React, { useState } from "react";
import axios from "axios";

function CreateCustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/customers", { name, email, phone })
      .then((response) => {
        alert("Customer created successfully!");
      })
      .catch((error) => {
        console.error("There was an error creating the customer!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">Create Customer</button>
    </form>
  );
}

export default CreateCustomerForm;

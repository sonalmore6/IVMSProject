// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import axios from "axios";

// const Login = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const data = {
//     email,
//     password
//   };

//   const handlesubmit = async() => {
//     // await axios
//       // .post("http://localhost:8000/register", data)
//       // .then(alert("login Sucessful"))
//       // .catch((err) => alert("Login Unsucessfull"));
//       try {
//         await axios.post('http://localhost:8000/login', data)
//         alert('Login Successful') 
//       } catch(err) {
//         // console.log(err)
//         alert(err)
//       }
//   };

//   return (
//     <>
//       <div
//         style={{
//           maxWidth: "600px",
//           margin: "20px auto",
//           padding: "20px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         <h3
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#333",
//             fontWeight: "bold",
//           }}
//         >
//           Login Form
//         </h3>

//         <Form onSubmit={handlesubmit}>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label style={{ fontWeight: "bold" }}>
//               Email address
//             </Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               placeholder="name@example.com"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPlaintextPassword">
//             <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>

//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               placeholder="Password"
//             />
//           </Form.Group>
//           <button
//             className="btn btn-primary w-100"
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               fontWeight: "bold",
//               borderRadius: "5px",
//             }}
//           >
//             Submit Here
//           </button>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const data = { email, password };
    axios
      .post("http://localhost:8000/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response?.data?.msg || "Login Unsuccessful");
      });
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Login Form
      </h3>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{
            marginTop: "10px",
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          Submit Here
        </button>
      </Form>
    </div>
  );
};

export default Login;


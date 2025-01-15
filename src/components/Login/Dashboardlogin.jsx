import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import backimage from '../Assets/abstract-digital-grid-black-background.jpg';



const Dashboardlogin = () => {
     const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
    
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/head");
        // // Validate login details (optional)
        // if (username === "Admin" && password === "password") {
        //   // Redirect to the Head component
        //   navigate("/head");
        // } else {
        //   alert("Invalid credentials. Please try again.");
        // }
      };
  return (
    <div>
       <Container fluid className="vh-100 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${backimage})`, backgroundSize: 'cover'}}>
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }} className="bg-light p-4 rounded bg-transparent " >
          <h2 className="text-center mb-4 ">Login</h2>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="Show Password"
                className="mt-2"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Dashboardlogin

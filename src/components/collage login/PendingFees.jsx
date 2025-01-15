import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import fees from '../Assets/fees.png'
const  PendingFees= () => {
  const [formData, setFormData] = useState({
    collegeName: "PREC",
    dateOfVisit: "",
    fees: "",
    transactionId: "",
    feeStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api-endpoint.com/fees", formData);
      alert("Fees submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting fees", error);
      alert("An error occurred while submitting fees.");
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="text-center">
          <img
            src={fees}
            alt="Fee Payment Illustration"
            className="img-fluid"
            style={{ width: "80%" ,height:"80%"}}
          />
        </Col>
        <Col md={6}>
          <h3 className="text-center text-black">Pay Fees</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className=" text-black">College Name</Form.Label>
              <Form.Control
                type="text"
                name="collegeName"
                value={formData.collegeName}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className=" text-black">Date of Visit</Form.Label>
              <Form.Control
                type="date"
                name="dateOfVisit"
                value={formData.dateOfVisit}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className=" text-black">Fees</Form.Label>
              <Form.Control
                type="number"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className=" text-black">Transaction ID</Form.Label>
              <Form.Control
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className=" text-black">Fees Paid Status</Form.Label>
              <Form.Select
                name="feeStatus"
                value={formData.feeStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="text-center text-white bg-warning fs-6">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PendingFees;

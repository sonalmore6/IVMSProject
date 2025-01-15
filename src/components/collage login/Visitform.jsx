import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Visitform = () => {
  const [formData, setFormData] = useState({
    numberOfStudents: '',
    numberOfFaculty: '',
    dateOfVisit: '',
    startTime: '',
    endTime: '',
    city: '',
    location: '',
    purpose: '',
    studentDetails: '',
    feedbackFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, feedbackFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
  
    console.log('Form Data:', [...data.entries()]);
  
    try {
      const response = await axios.post('http://localhost:3002/post', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Response:', response);
      alert('Form submitted successfully!');
    } catch (error) {
      if (error.response) {
        // Log the backend response error
        console.error('Error Response:', error.response.data);
        console.error('Status:', error.response.status);
      } else if (error.request) {
        // Log the request if no response is received
        console.error('Error Request:', error.request);
      } else {
        // Log other errors
        console.error('Error Message:', error.message);
      }
      alert('Error submitting form!');
    }
  };
  
  return (
    <Container className="mt-5 text-black">
      <h2 className="text-center mb-4 text-black">Add Visit</h2>
      <button onClick={()=>{window.location.href="/schedule"}} className=''>Back</button>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>Number of Students</Form.Label>
              <Form.Control
                type="number"
                name="numberOfStudents"
                value={formData.numberOfStudents}
                onChange={handleChange}
                placeholder="Enter number of students"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>Number of Faculty</Form.Label>
              <Form.Control
                type="number"
                name="numberOfFaculty"
                value={formData.numberOfFaculty}
                onChange={handleChange}
                placeholder="Enter number of faculty"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>Date of Visit</Form.Label>
              <Form.Control
                type="date"
                name="dateOfVisit"
                value={formData.dateOfVisit}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>End Time</Form.Label>
              <Form.Control
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className='text-black'>Visiting Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className='text-black'>Purpose of Visit</Form.Label>
          <Form.Control
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Enter purpose"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-black'>Student Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="studentDetails"
            value={formData.studentDetails}
            onChange={handleChange}
            placeholder="Enter student details"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-black'>Upload File</Form.Label>
          <Form.Control
            type="file"
            name="feedbackFile"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='text-white bg-warning fs-6'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Visitform;

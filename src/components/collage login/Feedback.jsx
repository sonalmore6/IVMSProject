// Import necessary dependencies
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import feedbackimg from '../Assets/feedback.png'
const Feedback = () => {
  const [formData, setFormData] = useState({
    visitDate: '',
    message: ''
  });

  const [feedbackStatus, setFeedbackStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-api-endpoint.com/feedback', formData);
      setFeedbackStatus('Feedback submitted successfully!');
      setFormData({ visitDate: '', message: '' });
    } catch (error) {
      setFeedbackStatus('Error submitting feedback. Please try again later.');
    }
  };

  const handleClear = () => {
    setFormData({ visitDate: '', message: '' });
    setFeedbackStatus(null);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={6}>
        <img src={feedbackimg} alt="feedback" className="profile-img" style={{height:"100%",width:"100%"}}/>
        </Col>
        <Col  lg={6}>
          <h3 className="text-center mb-4 text-black fs-2">Give Feedback</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="visitDate">
              <Form.Label className='text-black '>Visit Date</Form.Label>
              <Form.Control
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label className='text-black '>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" type="submit" className='text-white fs-6  bg-warning'>
                Submit
              </Button>
              <Button variant="secondary" type="button" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </Form>
          {feedbackStatus && (
            <p className="text-center mt-3 text-info">{feedbackStatus}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;

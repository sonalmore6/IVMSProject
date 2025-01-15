import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import axios from 'axios';
import video from '../Assets/sumago.mp4.mp4'
const Home = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const [pendingVisits, setPendingVisits] = useState(0);
  const [rejectedVisits, setRejectedVisits] = useState(0);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/reports'); // Replace with your API endpoint
        const data = response.data;

        setTotalVisits(data.totalVisits);
        setPendingVisits(data.pendingVisits);
        setRejectedVisits(data.rejectedVisits);
        setBookedDates(data.bookedDates);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="video-container">
        {/* Background Video */}
        <video autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'blur(2zpx)' }}>
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div className="overlay">
          <Container className="text-center text-light">
            <h1>Welcome to Sumago</h1>
            <p>Industrial visits help students learn about a company's policies and how instruments work</p>
           
          </Container>
        </div>
      </div>
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <Card className="mb-3 text-center h-75 p-2 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                <Card.Title>Total Visit Count</Card.Title>
                <Card.Text>{totalVisits}</Card.Text>
                <button className="btn btn-primary">View Details</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="mb-3 text-center h-75 p-2 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                <Card.Title>Pending Visit Count</Card.Title>
                <Card.Text>{pendingVisits}</Card.Text>
                <button className="btn btn-primary">View Details</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="mb-3 text-center h-75 p-2 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                <Card.Title>Rejected Visit Count</Card.Title>
                <Card.Text>{rejectedVisits}</Card.Text>
                <button className="btn btn-primary">View Details</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Calendar
              value={new Date()}
              tileClassName={({ date }) => {
                return bookedDates.includes(date.toISOString().slice(0, 10))
                  ? 'booked-date'
                  : '';
              }}
            />
          </Col>
        </Row>

      </Container>

    </div>
  );
};

export default Home;

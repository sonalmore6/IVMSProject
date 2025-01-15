import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FaRocket, FaEye } from 'react-icons/fa';
import image1 from '../Assets/WhatsApp Image 2025-01-15 at 12.39.14_28c5984c.jpg';
import image2 from '../Assets/WhatsApp Image 2025-01-13 at 18.07.02_2b3ecedc.jpg';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={12}>
          <Card className="border-0 shadow rounded" style={{ backgroundColor: '#f7f6f4' }}>
            <Card.Body>
              {/* About Us Section */}
              <h2 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#d73438' }}>
                About Us
              </h2>

              {/* Interactive Carousel */}
              <Carousel
                className="mb-5"
                controls={false} // Buttons removed by setting controls to false
                indicators={true}
                interval={3000} // Change images every 30 seconds (30000 ms)
                fade
              >
                <Carousel.Item>
                  <div
                    style={{
                      position: 'relative',
                      height: '450px',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={image1}
                      alt="Slide 1"
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                      }}
                    ></div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{
                      position: 'relative',
                      height: '450px',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={image2}
                      alt="Slide 2"
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                      }}
                    ></div>
                  </div>
                </Carousel.Item>
              </Carousel>

              {/* Tagline */}
              <div className="text-center my-5">
                <h5
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  "Empowering Growth Through Transformative Industrial Visits at Sumago Infotech Pvt. Ltd."
                </h5>
              </div>

              {/* Mission and Vision Section */}
              <Row className="my-5 text-center">
                {/* Mission Card */}
                <Col md={6} className="mb-4">
                  <Card
                    className="border-0 shadow rounded h-100"
                    style={{
                      background: 'linear-gradient(to right, #ffefe6, #ffffff)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Card.Body>
                      <FaRocket size={40} color="#d73438" className="mb-3" />
                      <h3
                        className="mb-4"
                        style={{ color: '#d73438', fontWeight: 'bold' }}
                      >
                        Our Mission
                      </h3>
                      <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem' }}>
                        "At Sumago Infotech, we strive with technology to provide the most
                        effective and affordable services that fulfill our customers' needs
                        and budgets."
                      </p>
                      <Button variant="outline-danger" className="mt-3">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Vision Card */}
                <Col md={6} className="mb-4">
                  <Card
                    className="border-0 shadow rounded h-100"
                    style={{
                      background: 'linear-gradient(to right, #ffefe6, #ffffff)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Card.Body>
                      <FaEye size={40} color="#d73438" className="mb-3" />
                      <h3
                        className="mb-4"
                        style={{ color: '#d73438', fontWeight: 'bold' }}
                      >
                        Our Vision
                      </h3>
                      <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem' }}>
                        "We aspire to be the global sourcing choice of the global market and
                        revolutionize the way service processes function."
                      </p>
                      <Button variant="outline-danger" className="mt-3">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

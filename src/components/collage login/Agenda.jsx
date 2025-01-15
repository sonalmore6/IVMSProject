import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import agendaimg from '../Assets/agenda.png';

const Agenda = () => {
  const [activeAgenda, setActiveAgenda] = useState(1);

  const handleAgendaClick = (index) => {
    setActiveAgenda(index);
  };

  return (
    <div>
      <Container className="mt-5">
        <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#f54c4c' }}>
          Agenda
        </h1>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <img
              src={agendaimg}
              alt="Agenda"
              className="profile-img"
              style={{
                width: '100%',
                
              }}
            />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6} className="mb-4">
                <Card
                  className={`agenda-card shadow-lg border-0 ${
                    activeAgenda === 1 ? 'active-card' : ''
                  }`}
                  onClick={() => handleAgendaClick(1)}
                  style={{
                    backgroundColor: '#faf8f8',
                    cursor: 'pointer',
                  }}
                >
                  <Card.Body
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      transform: activeAgenda === 1 ? 'scale(1.05)' : 'scale(1)',
                      boxShadow:
                        activeAgenda === 1
                          ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                          : '0 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Card.Title style={{ fontWeight: 'bold', color: '#d73438' }}>
                      Introduction
                    </Card.Title>
                    <Card.Text>
                      <strong>Sumago Intro Presentation/Video</strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Duration:</strong> 1 hour
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card
                  className={`agenda-card shadow-lg border-0 ${
                    activeAgenda === 2 ? 'active-card' : ''
                  }`}
                  onClick={() => handleAgendaClick(2)}
                  style={{
                    backgroundColor: '#faf8f8',
                    cursor: 'pointer',
                  }}
                >
                  <Card.Body
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      transform: activeAgenda === 2 ? 'scale(1.05)' : 'scale(1)',
                      boxShadow:
                        activeAgenda === 2
                          ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                          : '0 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Card.Title style={{ fontWeight: 'bold', color: '#d73438' }}>
                      Company Visit
                    </Card.Title>
                    <Card.Text>
                      <strong>Visit Each Department</strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Duration:</strong> Half Hour
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Agenda;

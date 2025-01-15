import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import agendaimg from '../Assets/agenda.png';
import axios from 'axios';

const AgendaList = () => {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    const fetchAgendas = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/agendas/get');
        setAgendas(response.data);
      } catch (error) {
        console.error('Error fetching agendas:', error);
      }
    };

    fetchAgendas();
  }, []);

  return (
    <div>
   
      <Container className="mt-5">
        <h1 className="text-center mb-4 text-black">Agenda</h1>

        <Row>
          <Col md={6}>
            <img src={agendaimg} alt="profile" className="profile-img" style={{ width: "100%" }} />
          </Col>
          <Col md={6}>
            <Row>
              {agendas.map((agenda) => (
                <Col md={6} key={agenda._id}>
                  <Card
                    className="mb-4"
                    style={{ width: '18rem' }}
                  >
                    <Card.Body>
                      <Card.Title>{agenda.agendaTitle}</Card.Title>
                      <Card.Text>
                        <strong>Agenda Description:</strong> {agenda.agendaDescription}
                      </Card.Text>
                      <Card.Text>
                        <strong>Agenda Duration:</strong> {agenda.agendaTime}
                      </Card.Text>
                      <Card.Text>
                        <strong>AgendaStatus:</strong> {agenda.agendaStatus}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AgendaList;
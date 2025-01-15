import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import image1 from '../Assets/iv.png';
const Visit = () => {
  const [visits, setVisits] = useState([]);
 const navigate=useNavigate()

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get'); // Replace with your actual API endpoint
        setVisits(response.data);
      } catch (error) {
        console.error('Error fetching visits:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };

    fetchVisits();
  }, []);

  const handleExport = (format) => {
    // Implement logic to export data to the specified format (PDF, Excel, CSV)
    console.log(`Exporting to ${format}`);
  };


  const handleAddClick = () => {
    navigate('/addvisit')
  };

  const closeImageForm = () => {
    
  };

  return (
    <div>
       <Container   className='mt-5 mb-5 '>
      <Row>
        <Col>
          <h2 className='text-black text-center'>Scheduled Visits</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-between mb-3">
          <Button variant="primary" onClick={() => handleExport('PDF')} className='text-white bg-warning fs-6'>
              Export PDF
            </Button>
           
            <Button variant="primary" onClick={handleAddClick} className='text-white bg-warning fs-6'>Add</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='text-black '>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Number of Students</th>
                <th>Number of Faculty</th>
                <th>Date of Visit</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Visiting Location</th>
                <th>Visit Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{visit.numberOfStudents}</td>
                  <td>{visit.numberOfFaculty}</td>
                  <td>{visit.dateOfVisit}</td>
                  <td>{visit.startTime}</td>
                  <td>{visit.endTime}</td>
                  <td>{visit.visitingLocation}</td>
                  <td>{visit.visitStatus}</td>
                  <td>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Visit;
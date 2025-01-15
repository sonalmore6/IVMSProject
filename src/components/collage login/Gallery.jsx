import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/gallery/images');
        setImages(response.data);
        console.log('Fetched images:', response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-black">Image Gallery</h2>
      <Row>
        {images.length === 0 ? (
          <Col>
            <p className="text-center">No images available.</p>
          </Col>
        ) : (
          images.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-5">
              <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:3000/gallery/images/${img.image}`}
                  alt={`image ${index + 1}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Gallery;

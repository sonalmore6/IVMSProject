import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [sortOption, setSortOption] = useState('date_desc'); // Default sort by date descending

  useEffect(() => {
    // Fetch images from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/images'); // Replace with your actual API endpoint
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);

    // Sort images based on the selected option
    const sortedImages = [...images].sort((a, b) => {
      if (selectedOption === 'date_asc') {
        return new Date(a.date) - new Date(b.date);
      } else if (selectedOption === 'date_desc') {
        return new Date(b.date) - new Date(a.date);
      } else if (selectedOption === 'name_asc') {
        return a.name.localeCompare(b.name);
      } else if (selectedOption === 'name_desc') {
        return b.name.localeCompare(a.name);
      }
      return 0; // Default to no sorting
    });

    setImages(sortedImages);
  };
  return (
    <div>
      <Container>
      <Row>
        <Col md={3}>
          <DropdownButton id="dropdown-sort" title="Sort By Date" variant="secondary">
            <Dropdown.Item onClick={() => handleSortChange('date_asc')}>Date (Ascending)</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('date_desc')}>Date (Descending)</Dropdown.Item>
            {/* Add other sort options if needed: */}
            {/* <Dropdown.Item onClick={() => handleSortChange('name_asc')}>Name (Ascending)</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('name_desc')}>Name (Descending)</Dropdown.Item> */}
          </DropdownButton>
        </Col>
      </Row>

      <Row>
        <Col>
          {images.length === 0 ? (
            <p>No images available to display.</p>
          ) : (
            <ImageGallery items={images.map((image) => ({ original: image.url }))} />
          )}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Gallery

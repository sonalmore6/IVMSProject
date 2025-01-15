import React from 'react';
import '../Login/Footer.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Footers = () => {
  return (
    <MDBFooter className="mt-5" color="white" style={{ backgroundColor: '#504646' }}>
      <MDBContainer className="p-4">
        {/* Social Media Section */}
        <section className="text-center mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 icons_follow"
            href="https://www.facebook.com/sumagoinfotech/"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 icons_follow"
            href="https://www.sumagoinfotech.com/"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 icons_follow"
            href="https://www.instagram.com/sumago_infotech"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 icons_follow"
            href="https://www.linkedin.com/company/sumago-infotech-pvt-ltd/posts/?feedView=all"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 icons_follow"
            href="https://www.youtube.com/@SumagoInfotechPvtLtd"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
        </section>

        {/* Description Section */}
        <section className="mb-4">
          <p style={{ color: '#fff', textAlign: 'center', fontSize:'15px',fontWeight:'100' }}>
            Our mission is to develop a skilled IT workforce in India, empowering individuals with accessible and affordable IT training to drive innovation & economic growth, and bridge the digital divide in the ever-evolving tech landscape.
          </p>
        </section>

        {/* Offices Section */}
        <Container>
          <h2 className="text-center mb-3" style={{ fontWeight: 'bold', color: '#fff' }}>
            Our Offices
          </h2>
          <Row className="g-4 ">
            {/* Corporate Office */}
            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-light" style={{ backgroundColor: '#4a3a3a', borderRadius: '10px' }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                      alt="India Flag"
                      style={{ width: '24px', height: '18px', marginRight: '8px' }}
                    />
                    <h5 className="mb-0" style={{ fontWeight: 'bold', color: '#fff' }}>
                      Corporate Office
                    </h5>
                  </div>
                  <p className="mb-2" style={{ color: '#ccc' }}>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    The Avenue, Six Floor, Behind Prakash Petrol Pump, Govind Nagar, Nashik, Maharashtra 422009.
                  </p>
                  <p className="mb-2" style={{ color: '#ccc' }}>
                    <i className="bi bi-envelope-fill me-2"></i>
                    <a href="mailto:info@sumagoinfotech.com" style={{ color: '#fff', textDecoration: 'none' }}>
                      info@sumagoinfotech.com
                    </a>
                  </p>
                  <p style={{ color: '#ccc' }}>
                    <i className="bi bi-telephone-fill me-2"></i>
                    <a href="tel:+918408084888" style={{ color: '#fff', textDecoration: 'none' }}>
                      +91 8408084888
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Pune Office */}
            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-light" style={{ backgroundColor: '#4a3a3a', borderRadius: '10px' }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                      alt="India Flag"
                      style={{ width: '24px', height: '18px', marginRight: '8px' }}
                    />
                    <h5 className="mb-0" style={{ fontWeight: 'bold', color: '#fff' }}>
                      Pune Office
                    </h5>
                  </div>
                  <p className="mb-2" style={{ color: '#ccc' }}>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Third Floor, Kakade Center Port, University Rd, near E-Square, Premnagar, Shivajinagar, Pune, Maharashtra 411016.
                  </p>
                  <p className="mb-2" style={{ color: '#ccc' }}>
                    <i className="bi bi-envelope-fill me-2"></i>
                    <a href="mailto:info@sumagoinfotech.com" style={{ color: '#fff', textDecoration: 'none' }}>
                      info@sumagoinfotech.com
                    </a>
                  </p>
                  <p style={{ color: '#ccc' }}>
                    <i className="bi bi-telephone-fill me-2"></i>
                    <a href="tel:+917263084881" style={{ color: '#fff', textDecoration: 'none' }}>
                      +91 7263084881
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </MDBContainer>

      {/* Footer Bottom Section */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Copyrights © 2025
        <a className="text-danger px-1" href="https://www.sumagoinfotech.com/">
          <b>Sumago.</b>
        </a>
        All Rights Reserved.
      </div>
    </MDBFooter>
  );
};

export default Footers;

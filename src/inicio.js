import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar1.css";
import "./inicio.css";
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


function Inicio() {
  return (
    <>
      <Container>
        <Row>
         

          <Col md={6}>
            <h1>IngeCloud</h1>
            
            <p>Descripción...</p>
            
            <Button variant="warning">
              Leer más
            </Button>
          </Col>

          <Col md={6}>
            <Image src={logo} fluid /> 
          </Col>

        </Row>

        
      </Container>
      <Row className="mt-5">
          <Col md={6}>
            {/* Imagen */}
          </Col>
          
          <Col md={6}>
            <h2>Áreas de trabajo</h2>

            <Row>
              <Col md={6}>
                <h3>Desarrollo Software</h3>
                <p>Descripción...</p>
              </Col>

              <Col md={6}>
                {/* Otros servicios */}
              </Col>
            </Row>

          </Col>
        </Row>
      <Container>

      </Container>
      <Carousel>
        {/* Slides */}
      </Carousel>

    </>
  )
}


export default Inicio;
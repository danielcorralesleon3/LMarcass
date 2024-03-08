import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hoteles(){
    return(
      
    <Container>
      <Row>
        <Col>
            <div> <h1>Bienvenidos a Paris</h1>
                <h2>Descubre los Hoteles mas famosos:</h2>
                <ul>
                <li>Hotel Astoria</li>
                <li>Hotel Malte</li>
                <li>Pullman Paris Eiffel Tower Hotel</li>
                </ul>
            </div>
        </Col>
      </Row>
  </Container>
    );
    
}
export default Hoteles;
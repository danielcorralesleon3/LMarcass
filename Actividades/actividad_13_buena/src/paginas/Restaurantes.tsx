import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantes(){
    return(
        <Container>
            <Row>
                <Col> <div> <h1>Bienvenidos a Paris</h1>
       <h2>Descubre los restaurantes mas famosos:</h2>
       <ul>
        <li>Le Sot l'y Laisse</li>
        <li>Au Petit Rozey</li>
        <li>Hôtel du Nord</li>
       </ul>
      </div></Col>
            </Row>
        </Container>
     
    );
    
}
export default Restaurantes;
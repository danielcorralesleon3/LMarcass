import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LugaresDeInteres(){
    return(
      
   <Container>
   <Row>
     <Col>
      <div> 
        <h1>Bienvenidos a Paris</h1>
          <h2>Descubre los lugares de interes de paris:</h2>
            <ul>
              <li>Hôtel du Nord</li>
              <li>Museo del Louvre</li>
              </ul>
       </div>
     </Col>
   </Row>
</Container>
    );
    
}
export default LugaresDeInteres;
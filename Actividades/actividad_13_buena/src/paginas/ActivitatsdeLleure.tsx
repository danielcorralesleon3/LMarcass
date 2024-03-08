import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ActivitatsdeLleure(){
    return(
        <Container>
            <Row>
                <Col> 
                    <div> 
                        <h1>Bienvenidos a Paris</h1>
                        <h2>Descubre las actividades mas famosas:</h2>
                        <ul>
                            <li>Sube a la cima de la torre Eiffel</li>
                            <li>Empieza el día en los Campos Elíseos</li>
                            <li>No te pierdas el Museo del Louvre</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
    
}
export default ActivitatsdeLleure;
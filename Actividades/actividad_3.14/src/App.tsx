import React, { useState } from 'react';
import './App.css';
import Breeds from './components/breeds';
import Detalles from './components/detalles';
import { Container ,Row,Col } from 'react-bootstrap';
export default function App() {
  let [RazaActual,setRazaActual] = useState<any>(null)
  return (
    <Container>
        <Row><Col><Breeds setRazaActual={setRazaActual}></Breeds></Col></Row>
        <Row><Col><Detalles raza={RazaActual}></Detalles></Col></Row>
    </Container>
  );
}


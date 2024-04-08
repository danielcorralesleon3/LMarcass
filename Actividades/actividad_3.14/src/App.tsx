import React, { useState } from 'react';
import './App.css';
import Breeds from './components/breeds';
import Detalles from './components/detalles';
import { Container, Row, Col } from 'react-bootstrap';
import { Raza } from './tipos/tipos';
export default function App() {
  const [RazaActual, setRazaActual] = useState({} as Raza)
  return (
    <Container>
      <Row><Col><Breeds setRazaActual={setRazaActual}></Breeds></Col></Row>
      <Row><Col><Detalles raza={RazaActual}></Detalles></Col></Row>
    </Container>
  );
}


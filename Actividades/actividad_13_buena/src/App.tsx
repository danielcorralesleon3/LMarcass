import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Bienvenida from './paginas/Bienvenida';
import LugaresDeInteres from './paginas/LugaresDeInteres';
import Hoteles from './paginas/Hoteles';
import Restaurantes from './paginas/Restaurantes';
import ActivitatsdeLleure from './paginas/ActivitatsdeLleure';
import { Link } from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>

      <Navbar bg="light" data-bs-theme="light">
      <Container>
          <Nav.Link as={Link} to='/'>Indice</Nav.Link>
          <Nav.Link as={Link} to='LugaresDeInteres'>Lugares de interes</Nav.Link>
          <Nav.Link  as={Link} to='Hoteles'>Hoteles</Nav.Link>
          <Nav.Link as={Link} to='Restaurantes'>Restaurantes</Nav.Link>
          <Nav.Link  as={Link} to='ActivitatsdeLleure'>ActivitatsdeLleure</Nav.Link>
      </Container>
      </Navbar>

    <Routes>
      <Route index element={<Bienvenida />}/>
      <Route path='/LugaresDeInteres' element={<LugaresDeInteres />}/>
      <Route path='/Hoteles' element={<Hoteles />}/>
      <Route path='/Restaurantes' element={<Restaurantes />}/>
      <Route path='/ActivitatsdeLleure' element={<ActivitatsdeLleure />}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

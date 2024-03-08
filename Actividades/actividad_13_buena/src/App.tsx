import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container, Navbar } from 'react-bootstrap';
import Bienvenida from './paginas/Bienvenida';
import LugaresDeInteres from './paginas/LugaresDeInteres';
import Hoteles from './paginas/Hoteles';
import Restaurantes from './paginas/Restaurantes';
import ActivitatsdeLleure from './paginas/ActivitatsdeLleure';
function App() {
  return (
   
    <BrowserRouter>

    <Navbar expand="lg">
      <Container>
        <ul>
          <li><Navbar.Brand href="/./paginas/Bienvenida">Indice</Navbar.Brand> </li>
          <li><Navbar.Brand href='/LugaresDeInteres'>Lugares de interes</Navbar.Brand></li>
          <li><Navbar.Brand href='/Hoteles'>Hoteles</Navbar.Brand></li>
          <li><Navbar.Brand href='/Restaurantes'>Restaurantes</Navbar.Brand></li>
          <li><Navbar.Brand href='/ActivitatsdeLleure'>ActivitatsdeLleure</Navbar.Brand></li>
        </ul>
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

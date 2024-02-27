import React from 'react';
import FilaTabla from './Filatabla';
import { JSONS } from './lista';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table'; 

function Tabla() {
  return (
    <table className="table">
     <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Tienda</th>
          <th>Notas</th>
          <th>Comprado</th>
          <th>Imagen</th>
        </tr>
      </thead>

      <tbody>
        {JSONS.map((contenido, index) => (
          <FilaTabla key={index} fila={contenido} />
        ))}
      </tbody>

    </table>
  );
}

export default Tabla;

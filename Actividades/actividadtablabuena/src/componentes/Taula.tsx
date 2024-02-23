import React from 'react';
import { filas } from './lista';

function Tabla() {
  const tabla = [<tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th >Tienda</th><th>Notas</th><th>Comprado</th><th>Imagen</th></tr>];
  for (let index = 0; index < filas.length; index++) {
    const fila = filas[index];
    tabla.push(
      <tr>
        <td>{fila.producto}</td>
        <td>{fila.cantidad}</td>
        <td>{fila.precio}</td>
        <td>{fila.tienda}</td>
        <td>{fila.notas}</td>
        <td>{fila.comprado}</td>
      </tr>
    );
  }

  return (
    <table>
      {tabla}
  </table>
 );
}

export default Tabla;

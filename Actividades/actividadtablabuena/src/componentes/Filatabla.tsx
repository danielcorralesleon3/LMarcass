
import React from 'react';

interface estructura {
  producto: string;
  cantidad: number;
  precio: number;
  tienda: string;
  notas: string;
  comprado: boolean;
  imagen: string;
}

function FilaTabla({ fila }: { fila: estructura }) {
  return (
    <tr>
      <td>{fila.producto}</td>
      <td>{fila.cantidad}</td>
      <td>{fila.precio}</td>
      <td>{fila.tienda}</td>
      <td>{fila.notas}</td>
      <td>{fila.comprado ? 'Sí' : 'No'}</td>
      <td><img src={fila.imagen} style={{maxWidth: '50px',maxHeight:'50px'}}></img> </td>
    </tr>
  );
}

export default FilaTabla;

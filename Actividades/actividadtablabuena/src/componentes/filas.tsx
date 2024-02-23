import React from 'react';

interface Prompts {
  producto: string;
  cantidad: number;
  precio: number;
  tienda: string;
  notas: string;
  comprado: boolean;
  imagen: string;
}

const Fila: React.FC<FilaProps> = (props) => {
  return (
    <tr>
      <td>{props.producto}</td>
      <td>{props.cantidad}</td>
      <td>{props.precio}</td>
      <td>{props.tienda}</td>
      <td>{props.notas}</td>
      <td>{props.comprado ? 'Sí' : 'No'}</td>
      <td>
        <img src={props.imagen} alt={props.producto} style={{ width: '50px' }} />
      </td>
    </tr>
  );
};

export default Fila;

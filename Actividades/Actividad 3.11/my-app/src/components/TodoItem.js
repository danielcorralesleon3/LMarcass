import React from "react";
import { Button } from "react-bootstrap";

function TodoItem({ contenido, borrar}) {
  return (
    <li>
      <span>{contenido}</span>
      <Button variant="danger" onClick={borrar}>
        Eliminar
      </Button>

    </li>
  );
}

export default TodoItem;
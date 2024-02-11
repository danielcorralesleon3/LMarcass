import React, { useState } from 'react';

function ListaDeTareas() {
  
  const [listatareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
      setTareas([...listatareas, nuevaTarea]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...listatareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {listatareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;

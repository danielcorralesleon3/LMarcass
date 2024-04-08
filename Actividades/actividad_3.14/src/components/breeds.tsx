import React, { useState, useEffect } from 'react';
import { Raza, Razas } from '../tipos/tipos';


export default function Breeds({ setRazaActual }: { setRazaActual: Function }) {
  const [razas, setRazas] = useState<Razas>([]);
  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds").then((response) => response.json()).then((data: Razas) => {
      setRazas(data);

    })

  }, []);
  return (<div>
    <select onChange={(event) => {
      let indice = parseInt(event.target.value)
      let infoRaza = razas[indice]
      setRazaActual(infoRaza)
    }}>{razas.map((raza: Raza, i: number) => (<option key={i} value={i} >{raza.name}</option>))}</select>
  </div>)

}
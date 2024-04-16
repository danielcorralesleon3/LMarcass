import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./patatas.json";
interface indice{
    id:number,
    nombre:string,
    vegano: boolean;
    imagen: string;
}

export default function Recetas() {
    const [patata, setpatata] = useState<indice[]>([]);
    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/danielcorralesleon3/LMarcass/main/Actividades/actividad_3.15/src/componentes/patatas.json").then((response) => response.json()).then((data: indice[]) => {
          setpatata(data);
    
        })
    
      }, []);
        return(<div><h1>Top 5 recetas de patatas</h1>
        {patata.map(receta => (
            <div key={receta.id}>
                
                <h2> Top {receta.id}</h2>
                <p>
                    {receta.nombre}
                </p>
                <p>
                {receta.vegano? "Vegano":"No vegano"}
                </p>
                    
                
                <p><img height="500px" width="500px" src={receta.imagen}/></p>
            </div>
        ))}
      </div>)
}
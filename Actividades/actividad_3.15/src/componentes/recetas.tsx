import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface indice{
    id:number,
    nombre:string,
    disponible: boolean;
    imagen: string;
}

const patatas: indice[]=[
    {
        "id":1,
        "nombre":"Patatas fritas",
        "disponible":false,
        "imagen":"https://i.blogs.es/b88670/patatas_fritas/1366_2000.jpg"
        
    },   
    {
        "id":2,
        "nombre":"Patatas bravas",
        "disponible":false,
        "imagen":"https://www.allrecipes.com/thmb/n_OOwj92X4rpCZyQ8sULHBUR95k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230569-chef-johns-patatas-brazas-ddmfs-2X3-0917-2e7985bf896d4ea0b1baa2a0c826ea0d.jpg"
    }, 
    {
        "id":3,
        "nombre":"Tortilla de patatas",
        "disponible":true,
        "imagen":"https://cdn.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg"
    },
    {
        "id":4,
        "nombre":"Patatas asadas",
        "disponible":true,
        "imagen":"https://cdn.elcocinerocasero.com/imagen/receta/1000/2017-08-29-17-25-25/patatas-asadas-al-horno.jpeg"
        
    },
    {
        "id":5,
        "nombre":"Pure de patatas",
        "disponible":true,
        "imagen":"https://www.cocinatis.com/archivos/202207/CTIS0067-como-hacer-pure-de-patata_large_16x9.jpg"
    }
]

export default function Recetas() {
        return(<div><h1>Top 5 recetas de patatas</h1>
        {patatas.map(receta => (
            <div key={receta.id}>
                
                <h2> Top {receta.id}</h2>
                <p>
                    {receta.nombre}
                    {receta.disponible}
                </p>
                <p><img height="500px" width="500px" src={receta.imagen}/></p>
            </div>
        ))}
      </div>)
}
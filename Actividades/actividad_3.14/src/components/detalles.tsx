import { resolveTripleslashReference } from "typescript";
import { Razas2 } from "./breeds";

export default function Detalles({raza}:{raza:Razas2 | null}){
    if (raza==null) {
        return(<h2>No se ha seleccionado una raza</h2>)
    }
    
    return(
    <div>
        <h2>{raza.name}</h2>
        <p>{raza.description}</p>
        <p>{raza.origin}</p>
        <p>{raza.weight.metric}</p>
        <img src={raza.image.url}/>
    </div>)
    
}
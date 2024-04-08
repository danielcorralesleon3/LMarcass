import { Card } from "react-bootstrap"
import { Raza } from "../tipos/tipos"

export default function Detalles({raza}:{raza:Raza | null}){
    
    return(
    <div>
        <h2>{raza?.name}</h2>
        <p>Descripcion: {raza?.description}</p>
        <p>Origen: {raza?.origin}</p>
        <p>peso: {raza?.weight?.metric}</p>
        <img id={raza?.id} src={raza?.image?.url}/>
    </div>)
    
}
import { useState } from "react"

const TerritoriesMap = () => {
    const [marcadores, setMarcadores] = useState([])    
    const handleMapClick = (event) => {
        const nuevoMarcador = {
            latitud: event.latLng.lat(),
            longitud: event.latLng.lng()
        };
        setMarcadores([...marcadores, nuevoMarcador]);
    }
  return (
    <>
       <h1>hola</h1>
    </>
  )
}
export default TerritoriesMap
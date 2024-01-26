import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ marcadores, onMarkerClick, onMapClick }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 0, lng: 0 }}
    onClick={onMapClick}
  >
    {marcadores.map((marcador, index) => (
      <Marker
        key={index}
        position={{ lat: marcador.latitud, lng: marcador.longitud }}
        onClick={() => onMarkerClick(index)}
      />
    ))}
  </GoogleMap>
));

export default Map;

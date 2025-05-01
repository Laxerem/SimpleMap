import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Стили для контейнера карты
const mapStyles = {
  height: '100vh',
  width: '100%',
};

const MapComponent: React.FC = () => {
    const Bounds = [[-90, -180], [90, 180]] as L.LatLngBoundsLiteral
    const maxBounds = [[-98, -180], [90, 180]] as L.LatLngBoundsLiteral;

    const geoportailUrl =
    'https://data.geopf.fr/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}';
    const geoportailOptions = {
    minZoom: 2.5,
    maxZoom: 6,
    bounds: Bounds,
    format: 'image/jpeg',
    style: 'normal',
    };

    return (
    <MapContainer
        center={[0, 0]} // Центр карты, например, Париж
        zoom={2.5}
        style={mapStyles}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0} // Упругость границ (1.0 — жесткие границы)
    >
    <TileLayer
    url={geoportailUrl}
    {...geoportailOptions}
    noWrap={true}
    />
    </MapContainer>
    );
};

export default MapComponent;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet';
import EnhancedTable from '@/components/leaflet/table/EnhancedTable';

const MapComponent = () => {
  const position: [number, number] = [51.505, -0.09]; // Default position (latitude, longitude)

  return (
    <MapContainer
      center={position} // Use the center prop
      zoom={13} // Use the zoom prop
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AttributionControl />
      <Marker position={position}>
        <Popup>
          <div>
            A pretty popup. <br /> Easily customizable.
            <EnhancedTable />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
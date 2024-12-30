'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import EnhancedTable from '@/components/leaflet/table/EnhancedTable'

const MapComponent = () => {
  const position: [number, number] = [51.505, -0.09]; // Default position (latitude, longitude)

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '500px', width: '100%' }} // Adjust dimensions as needed
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty popup. <br /> Easily customizable.
          <EnhancedTable/>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

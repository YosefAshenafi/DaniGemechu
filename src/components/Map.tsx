"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons not appearing in Next.js
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapProps {
  center: [number, number];
  zoom?: number;
  label: string;
}

export default function Map({ center, zoom = 15, label }: MapProps) {
  return (
    <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            <div className="font-serif font-bold text-primary">
              {label}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

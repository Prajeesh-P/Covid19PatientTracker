import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import india_GeoJSON from '../Assets/India_geojson';

const covidData = {
    "India": {
        cases: 5000000,
        lat: 20.5937,
        lng: 78.9629
    },
    // Add more countries or regions as needed
};

const CovidMap = ({displayData,selectedState}) => {
    const createLabel = (text) => {
        return L.divIcon({
            className: 'custom-label',
            html: `<div style="background-color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px; border: 1px solid black; width:60px">${text}</div>`
        });
    };

    return (
        <MapContainer 
            center={[20.5937, 78.9629]} 
            zoom={4} 
            style={{ height: "700px", width: "100%" }} 
            scrollWheelZoom={false}  // Disable zooming with scroll wheel
            doubleClickZoom={false}  // Disable zooming with double click
            zoomControl={false}      // Disable zoom controls
            dragging={false}         // Disable dragging (optional)
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            <GeoJSON data={india_GeoJSON} style={() => ({
                color: '#4a83ec',
                weight: 1,
                fillColor: "#1a1d62",
                fillOpacity: 0.5,
            })} />

            {Object.keys(covidData).map((country, idx) => (
                <Marker
                    key={idx}
                    position={[covidData[country].lat, covidData[country].lng]}
                    icon={createLabel(`Cases: ${selectedState?.length > 0 ? selectedState?.active :displayData?.data?.total?.active}`)}
                />
            ))}
        </MapContainer>
    );
};

export default CovidMap;

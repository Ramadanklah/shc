
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { Hospital } from 'lucide-react';

// Sample data - in a real app, this would come from your backend
const medicalLocations = [
  { name: 'Damascus Hospital', coordinates: [36.2976, 33.5138], type: 'Hospital' },
  { name: 'Aleppo University Hospital', coordinates: [37.1981, 36.2021], type: 'Hospital' },
  { name: 'Al-Basel Hospital', coordinates: [35.9090, 35.5288], type: 'Hospital' },
  { name: 'Homs Medical Center', coordinates: [36.7234, 34.7324], type: 'Medical Center' },
  { name: 'Latakia Medical Complex', coordinates: [35.7851, 35.5352], type: 'Medical Center' }
];

const SyriaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [38.9968, 34.8021], // Syria center coordinates
      zoom: 6.5,
      projection: 'mercator'
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for each location
      medicalLocations.forEach(location => {
        const markerEl = document.createElement('div');
        markerEl.className = 'flex items-center justify-center w-8 h-8 bg-syria-teal rounded-full shadow-lg hover:scale-110 transition-transform duration-200';
        markerEl.innerHTML = '<svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9h-5V4H9v5H4v6h5v5h6v-5h5V9z"/></svg>';

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-syria-teal">${location.name}</h3>
              <p class="text-sm text-gray-600">${location.type}</p>
            </div>
          `);

        new mapboxgl.Marker(markerEl)
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
      // Store token in localStorage for convenience
      localStorage.setItem('mapbox_token', mapboxToken);
    }
  };

  useEffect(() => {
    // Check for stored token
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapboxToken(storedToken);
      setShowTokenInput(false);
      initializeMap(storedToken);
    }
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      {showTokenInput ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <form onSubmit={handleTokenSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-lg">
            <div className="space-y-2">
              <label htmlFor="mapbox-token" className="block text-sm font-medium text-gray-700">
                Enter your Mapbox public token
              </label>
              <input
                id="mapbox-token"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="pk.eyJ1..."
                required
              />
            </div>
            <Button type="submit">Load Map</Button>
          </form>
        </div>
      ) : null}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default SyriaMap;

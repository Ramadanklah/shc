
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { Hospital } from 'lucide-react';

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
  const [mapboxToken, setMapboxToken] = useState(() => localStorage.getItem('mapbox_token') || '');
  const [showTokenInput, setShowTokenInput] = useState(!localStorage.getItem('mapbox_token'));

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = token;
      
      if (map.current) map.current.remove();

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [38.9968, 34.8021],
        zoom: 6.5,
        projection: 'mercator'
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        if (!map.current) return;

        medicalLocations.forEach(location => {
          const el = document.createElement('div');
          el.className = 'bg-syria-teal p-2 rounded-full cursor-pointer hover:bg-syria-teal-dark transition-colors';
          el.innerHTML = '<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9h-5V4H9v5H4v6h5v5h6v-5h5V9z"/></svg>';

          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-3">
                <h3 class="font-bold text-syria-teal mb-1">${location.name}</h3>
                <p class="text-sm text-gray-600">${location.type}</p>
              </div>
            `);

          new mapboxgl.Marker(el)
            .setLngLat(location.coordinates as mapboxgl.LngLatLike)
            .setPopup(popup)
            .addTo(map.current);
        });
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      initializeMap(storedToken);
    }
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
      {showTokenInput ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <form onSubmit={handleTokenSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="space-y-2">
              <label htmlFor="mapbox-token" className="block text-sm font-medium text-gray-700">
                Enter your Mapbox public token
              </label>
              <input
                id="mapbox-token"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syria-teal focus:border-syria-teal"
                placeholder="pk.eyJ1..."
                required
              />
              <p className="text-xs text-gray-500">
                Get your token from <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-syria-teal hover:underline">Mapbox.com</a>
              </p>
            </div>
            <Button type="submit" className="w-full">Load Map</Button>
          </form>
        </div>
      ) : null}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default SyriaMap;

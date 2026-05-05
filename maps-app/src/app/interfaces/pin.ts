import mapboxgl from 'mapbox-gl';
export interface Pin {
  id: string;
  marker: mapboxgl.Marker;
  color?: string;
}

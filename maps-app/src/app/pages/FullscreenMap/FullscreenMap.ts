import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

import { DecimalPipe, JsonPipe } from '@angular/common';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = environment.mapBoxKey;

@Component({
  selector: 'app-fullscreen-map',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './FullscreenMap.html',
  styles: `
    #map {
      width: 100vw;
      height: calc(95vh - 100px);
    }

    #controls {
      background-color: black;
      position: fixed;
      padding: 5px;
      bottom: 100px;
      z-index: 100;
      box-shadow: 0 0 10px0 rbga(0, 0, 0, 0.1);
      border: 5px dotted #e2e8f0;
      width: 250px;
    }
  `
})
export class FullscreenMap implements AfterViewInit {

  divElement = viewChild<ElementRef>('map')

  map = signal<mapboxgl.Map | null>(null)
  zoomValue = signal<number>(17)
  coordinates = signal({ lng: -90.6094, lat: 14.6203 })

  zoomEffect = effect(() => {
    if (!this.map) {
      return;
    }

    this.map()?.setZoom(this.zoomValue());
  });

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) {
      throw new Error('Element not present.');
    }

    await new Promise((resolve) => setTimeout(resolve, 100));

    const element = this.divElement()?.nativeElement;
    const { lng, lat } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element,
      //style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: this.zoomValue()
    })

    this.mapListerners(map);

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([-90.6094, 14.6203])
      .addTo(map);
  }

  mapListerners(map: mapboxgl.Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();

      this.zoomValue.set(newZoom);
    })

    map.on('moveend', () => {
      const center = map.getCenter();

      this.coordinates.set(center);
    })

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.ScaleControl());

    this.map.set(map);
  }
}

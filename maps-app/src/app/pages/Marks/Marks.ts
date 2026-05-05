import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

import { DecimalPipe, JsonPipe } from '@angular/common';
import mapboxgl from 'mapbox-gl';
import { uuidv7 } from 'uuidv7';
import { Pin } from '../../interfaces/pin';
import { list } from 'postcss';

mapboxgl.accessToken = environment.mapBoxKey;

@Component({
  selector: 'app-marks',
  imports: [],
  templateUrl: './Marks.html',
  styles: `
    #map {
      width: 100vw;
      height: calc(95vh - 100px);
    }
  `,
})
export class Marks implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  pinsElement = viewChild<ElementRef<HTMLDivElement>>('divPins');

  map = signal<mapboxgl.Map | null>(null);
  pins = signal<Pin[]>([]);

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) {
      throw new Error('Element not present.');
    }

    await new Promise((resolve) => setTimeout(resolve, 100));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-90.6094, 14.62],
      zoom: 17,
    });

    this.mapListerners(map);
  }

  mapListerners(map: mapboxgl.Map) {
    map.on('click', (event) => {
      const randomColor =
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');

      const newMarker = new mapboxgl.Marker({
        color: randomColor,
      })
        .setLngLat(event.lngLat)
        .addTo(map);

      const timeId = uuidv7();

      this.pins.update((list) => [...list, { id: timeId, marker: newMarker, color: randomColor }]);

      const nativePins = this.pinsElement()?.nativeElement;
      if (nativePins) {
        nativePins.scrollTop = nativePins.scrollHeight - nativePins.clientHeight + 64;
        nativePins.focus();
      }
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.ScaleControl());

    this.map.set(map);
  }

  goToPin(marker: mapboxgl.Marker) {
    console.info('Going to pin', marker.getLngLat());

    this.map()?.flyTo({
      center: marker.getLngLat(),
      zoom: 17,
    });
  }

  deletePin(pin: Pin) {
    if (!pin || !pin.marker) {
      return;
    }

    pin.marker.remove();

    this.pins.set(this.pins().filter((item) => item.id !== pin.id));
  }
}

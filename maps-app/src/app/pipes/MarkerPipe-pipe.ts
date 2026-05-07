import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'marker',
})
export class MarkerPipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) {
      return "No value provided";
    }

    return value.toUpperCase() + ' 🗺️';
  }

}

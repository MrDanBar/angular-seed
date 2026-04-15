import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'country-list-display',
  imports: [DecimalPipe],
  templateUrl: './list-display.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDisplay {
  list = input.required<Country[]>();
}

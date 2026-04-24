import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country { }

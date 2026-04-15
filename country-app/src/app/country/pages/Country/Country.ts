import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './Country.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country {

  countryCode = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['country-code']),
    tap(param => console.info('My key: ', param))
  ))
}

import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { ErrorTile } from "../../../shared/components/errorTile/errorTile";
import { Country as ICountry } from '../../interfaces/Country';
import { CountryService } from '../../services/countryService';

@Component({
  selector: 'app-country',
  imports: [ErrorTile],
  templateUrl: './Country.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country implements AfterViewInit {

  countryCode = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['country-code']),
    tap(param => console.info('My key: ', param))
  ))

  countryCode2 = inject(ActivatedRoute).snapshot.paramMap.get('country-code')
  countryService = inject(CountryService)
  location = inject(Location)

  jsonFrame = viewChild<ElementRef<HTMLIFrameElement>>('MyJsonFrame')

  isLoading = signal<boolean>(false)
  errorMessage = signal<string | undefined>(undefined)

  country = signal<ICountry | null>(null);

  ngAfterViewInit(): void {
    this.isLoading.set(true)

    this.countryService.searchByCountryCode(this.countryCode())
      .subscribe({
        next: result => {
          this.jsonFrame()!.nativeElement.contentWindow!.postMessage({
            json: JSON.stringify(result),
            options: {
              theme: 'dark',
              direction: 'RIGHT'
            }
          }, '*');

          this.isLoading.set(false);

          if (result) {
            this.country.set(result)
          }
        },
        error: e => {
          this.errorMessage.set(e.message)
          this.isLoading.set(false);
        }
      })
  }

  goBack() {
    this.location.back();
  }
}

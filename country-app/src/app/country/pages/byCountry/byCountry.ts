import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ErrorTile } from "../../../shared/components/errorTile/errorTile";
import { ListDisplay } from "../../components/list-display/list-display";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/countryService';
import { Country } from '../Country/Country';

@Component({
  selector: 'app-by-country',
  imports: [SearchInput, ListDisplay, ErrorTile],
  templateUrl: './byCountry.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountry {

  countryService = inject(CountryService)

  query = signal<string>('');
  list = signal<Country[]>([]);

  countryResource = rxResource({
    params: () => ({
      query: this.query(),
    }),
    stream: ({ params }) => {
      if (!params.query) {
        return of([])
      }

      return this.countryService.searchByCountryName(params.query);
    }
  })
}

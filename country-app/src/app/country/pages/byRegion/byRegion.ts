import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ListDisplay } from "../../components/list-display/list-display";
import { CountryService } from '../../services/countryService';
import { Country } from '../Country/Country';
import { SearchInput } from "../../components/search-input/search-input";
import { ErrorTile } from "../../../shared/components/errorTile/errorTile";

@Component({
  selector: 'app-by-region',
  imports: [ListDisplay, SearchInput, ErrorTile],
  templateUrl: './byRegion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegion {
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

      return this.countryService.searchByRegion(params.query);
    }
  })
}

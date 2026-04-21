import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ErrorTile } from "../../../shared/components/errorTile/errorTile";
import { ListDisplay } from "../../components/list-display/list-display";
import { SearchInput } from "../../components/search-input/search-input";
import { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/countryService';
import { Country } from '../Country/Country';

@Component({
  selector: 'app-by-region',
  imports: [ListDisplay, SearchInput, ErrorTile],
  templateUrl: './byRegion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegion {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  countryService = inject(CountryService)

  selectedRegion = signal<string | null>(null);
  list = signal<Country[]>([]);

  countryResource = rxResource({
    params: () => ({
      query: this.selectedRegion(),
    }),
    stream: ({ params }) => {
      if (!params.query) {
        return of([])
      }

      return this.countryService.searchByRegion(params.query);
    }
  })
}

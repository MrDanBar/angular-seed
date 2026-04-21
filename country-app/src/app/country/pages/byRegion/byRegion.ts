import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ErrorTile } from "../../../shared/components/errorTile/errorTile";
import { ListDisplay } from "../../components/list-display/list-display";
import { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/countryService';
import { Country } from '../Country/Country';

const validateParam = (region: string): Region => {
  region = region.toLowerCase();

  const regions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania'
  }

  return regions[region] ?? 'Americas';
}

@Component({
  selector: 'app-by-region',
  imports: [ListDisplay, ErrorTile],
  templateUrl: './byRegion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegion {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  countryService = inject(CountryService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  selectedRegion = linkedSignal<Region>(() => validateParam(this.activatedRoute.snapshot.queryParamMap.get('region') ?? ''));
  list = signal<Country[]>([]);

  countryResource = rxResource({
    params: () => ({
      query: this.selectedRegion(),
    }),
    stream: ({ params }) => {
      if (!params.query) {
        return of([])
      }

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.query,
        }
      })

      return this.countryService.searchByRegion(params.query);
    }
  })
}

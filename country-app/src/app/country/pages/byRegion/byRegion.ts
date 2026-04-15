import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListDisplay } from "../../components/list-display/list-display";
import { CountryService } from '../../services/countryService';

@Component({
  selector: 'app-by-region',
  imports: [ListDisplay],
  templateUrl: './byRegion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegion {

  countryService = inject(CountryService)
}

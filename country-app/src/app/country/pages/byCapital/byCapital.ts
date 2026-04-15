import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ListDisplay } from "../../components/list-display/list-display";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/countryService';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, ListDisplay],
  templateUrl: './byCapital.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapital {

  countryService = inject(CountryService)

  list = signal<Country[]>([]);

  onSearch(text: string) {
    this.countryService.searchByCapital(text)
      .subscribe(
        response => this.list.set(response)
      );
  }
}

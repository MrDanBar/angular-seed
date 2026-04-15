import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { ListDisplay } from "../../components/list-display/list-display";

@Component({
  selector: 'app-by-country',
  imports: [SearchInput, ListDisplay],
  templateUrl: './byCountry.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountry {
  onSearch(text: string) {
    console.info('Search: ', text);
  }
}

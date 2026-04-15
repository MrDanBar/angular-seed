import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CountryApiObject } from '../interfaces/CountryApi-interface';
import { CountryMapper } from '../mappers/CountryMapper';

const API_BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  httpClient = inject(HttpClient);


  searchByCapital(query: string) {
    const pathParam = query.toLowerCase();

    const result = this.httpClient.get<CountryApiObject[]>(`${API_BASE_URL}/capital/${pathParam}`)
      .pipe(
        map(CountryMapper.countryAppListToCountryList)
      );

    return result;
  }
}

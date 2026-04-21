import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, throwError } from 'rxjs';
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
        map(CountryMapper.countryAppListToCountryList),
        delay(500),
        catchError(error => {
          return throwError(
            () => new Error(`Unable to get capital results for ${query}.`)
          )
        })
      );

    return result;
  }

  searchByCountryName(query: string) {
    const pathParam = query.toLowerCase();

    const result = this.httpClient.get<CountryApiObject[]>(`${API_BASE_URL}/name/${pathParam}`)
      .pipe(
        map(CountryMapper.countryAppListToCountryList),
        delay(500),
        catchError(error => {
          return throwError(
            () => new Error(`Unable to get country results for ${query}.`)
          )
        })
      );

    return result;
  }

  searchByRegion(query: string) {
    const pathParam = query.toLowerCase();

    const result = this.httpClient.get<CountryApiObject[]>(`${API_BASE_URL}/region/${pathParam}`)
      .pipe(
        map(CountryMapper.countryAppListToCountryList),
        delay(500),
        catchError(error => {
          return throwError(
            () => new Error(`Unable to get region results for ${query}.`)
          )
        })
      );

    return result;
  }

  searchByCountryCode(query: string) {
    const pathParam = query.trim().toLowerCase();

    const result = this.httpClient.get<CountryApiObject[]>(`${API_BASE_URL}/alpha/${pathParam}`)
      .pipe(
        map(value => value.at(0)),
        map(item => item? CountryMapper.countryApiToCountry(item) : null),
        catchError(error => {
          return throwError(
            () => new Error(`Unable to get country result for ${query}.`)
          )
        })
      );

    return result;
  }
}

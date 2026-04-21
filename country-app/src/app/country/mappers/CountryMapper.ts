import { Country } from "../interfaces/Country";
import { CountryApiObject } from "../interfaces/CountryApi-interface";

export class CountryMapper {
  static countryAppListToCountryList(list: CountryApiObject[]): Country[] {
    const result: Country[] = [];

    list.forEach(element => {
      result.push(CountryMapper.countryApiToCountry(element))
    });

    return result;
  }

  static countryApiToCountry(countryApi: CountryApiObject): Country {
    return {
      id: countryApi.cca3,
      name: countryApi.name.common,
      icon: countryApi.flag,
      flag_url: countryApi.flags.svg,
      capital: countryApi.capital?.[0] ?? '-- Unavailable --',
      population: countryApi.population,
      currency_code: Object.values(countryApi.currencies)[0].name,
      currency_symbol: Object.values(countryApi.currencies)[0].symbol,
      country_code: countryApi.cca3,
      region: countryApi.region,
      subregion: countryApi.subregion,
    }
  }
}

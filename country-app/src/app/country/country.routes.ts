import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByCapital } from './pages/byCapital/byCapital';
import { ByRegion } from './pages/byRegion/byRegion';
import { ByCountry } from './pages/byCountry/byCountry';
import { Country } from './pages/Country/Country';

export const routes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapital,
      },
      {
        path: 'by-region',
        component: ByRegion,
      },
      {
        path: 'by-country',
        component: ByCountry,
      },
      {
        path: 'by/:country-code',
        component: Country,
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
];


export default routes;

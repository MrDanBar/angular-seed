import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByCapital } from './components/byCapital/byCapital';
import { ByRegion } from './components/byRegion/byRegion';
import { ByCountry } from './components/byCountry/byCountry';

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
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
];


export default routes;

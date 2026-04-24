import { Routes } from '@angular/router';
import { Country } from './pages/country/country';

export const countryRoutes: Routes = [
  {
    path: 'country',
    component: Country
  },
  {
    path: '**',
    redirectTo: 'country'
  }
];


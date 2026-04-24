import { Routes } from '@angular/router';
import { Register } from './pages/register/register';

export const authRoutes: Routes = [
  {
    path: 'sign-up',
    component: Register
  },
  {
    path: '**',
    redirectTo: 'sign-up'
  }
];

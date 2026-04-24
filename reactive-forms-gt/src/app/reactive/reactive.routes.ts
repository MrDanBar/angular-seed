import { Routes } from '@angular/router';
import { Dynamic } from './pages/dynamic/dynamic';
import { Basic } from './pages/basic/basic';

export const reactiveRoutes: Routes = [
  {
    path: 'basic',
    component: Basic
  },
  {
    path: 'dynamic',
    component: Dynamic
  },
  {
    path: 'switches',
    loadComponent: () => import('./pages/switches/switches')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];

import { Routes } from '@angular/router';
import { FullscreenMap } from './pages/FullscreenMap/FullscreenMap';
import { Locations } from './pages/Locations/Locations';
import { Marks } from './pages/Marks/Marks';

export const routes: Routes = [
  {
    path: 'home',
    component: FullscreenMap,
    title: 'Home Map'
  },
  {
    path: 'locations',
    component: Locations,
    title: 'Locations on sale'
  },
  {
    path: 'marks',
    component: Marks,
    title: 'For later...'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadComponent: () => import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  { path: 'details',
    loadComponent: () => import('./pages/details/details.component').then((x) => x.DetailsComponent),
  },
  { path: '**', redirectTo: '' }
  ];

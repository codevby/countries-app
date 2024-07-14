import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';


export const routes: Routes = [
  // {path: 'products', component: ProductComponent } ---> EXAMPLE
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },

  {
    path: 'countries/by-capital',
    title: 'By capital',
    loadComponent: () => import('./countries/pages/by-capital-page/by-capital-page.component')
  },
  {
    path: 'countries/by-country',
    title: 'By country',
    loadComponent: () => import('./countries/pages/by-country-page/by-country-page.component')
  },
  {
    path: 'countries/by-region',
    title: 'By region',
    loadComponent: () => import('./countries/pages/by-region-page/by-region-page.component')
  },
  {
    path: 'countries/by/:id',
    title: 'By id',
    loadComponent: () => import('./countries/pages/country-page/country-page.component')
  },

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

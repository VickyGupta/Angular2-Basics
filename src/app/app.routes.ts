import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PackageComponent } from './packages';

import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
// import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: '',      component: PackageComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'users', loadChildren: './users#UsersModule' },
  { path: 'hotels', loadChildren: './hotels#HotelsModule'},
  { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: '**',    component: NoContentComponent },
];

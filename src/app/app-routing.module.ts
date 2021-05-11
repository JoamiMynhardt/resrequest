import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./software/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'rooms',
        loadChildren: () => import('./software/rooms/rooms.module').then(module => module.RoomsModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren: () => import('./software/auth/sign-in/sign-in.module').then(module => module.SignInModule)
      },
      // {
      //   path: 'sign-up',
      //   loadChildren: () => import('./software/auth/sign-up/sign-up.module').then(module => module.SignUpModule)
      //}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

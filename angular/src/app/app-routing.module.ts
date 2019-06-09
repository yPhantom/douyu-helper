import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RouterManager} from './common/router.manager';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouterManager.HOME,
    pathMatch: 'full'
  },
  {
    path: RouterManager.HOME,
    component: HomeComponent
  },
  {
    path: RouterManager.CUSTOM,
    component: CustomComponent
  },
  {
    path: '**',
    redirectTo: RouterManager.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

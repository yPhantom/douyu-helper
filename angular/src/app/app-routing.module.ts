import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarrageCatchComponent } from './home/barrage-catch/barrage-catch.component';
import {RouterManager} from './common/router.manager';

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
    path: RouterManager.BARRAGE_CATCH,
    component: BarrageCatchComponent
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

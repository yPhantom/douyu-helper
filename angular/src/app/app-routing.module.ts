import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RouterManager} from './common/router.manager';
import { CustomComponent } from './custom/custom/custom.component';
import {AppComponent} from './app.component';
import {CustomRoutingModule} from "./custom/custom-routing.module";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: RouterManager.HOME,
    component: HomeComponent
  },
  {
    path: RouterManager.CUSTOM,
    loadChildren: './custom/custom-routing.module#CustomRoutingModule'
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

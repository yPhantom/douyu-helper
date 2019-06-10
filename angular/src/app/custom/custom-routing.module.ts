import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RouterManager} from "../common/router.manager";
import {CustomComponent} from "./custom/custom.component";
import {BarrageSkinComponent} from "./barrage-skin/barrage-skin.component";

const routes: Routes = [
  {
    path: RouterManager.CUSTOM,
    component: CustomComponent,
    children: [
      {
        path: RouterManager.BARRAGE_SKIN,
        component: BarrageSkinComponent
      },
      {
        path: '',
        redirectTo: RouterManager.CUSTOM,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: RouterManager.CUSTOM
      },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class CustomRoutingModule { }

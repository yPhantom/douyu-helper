import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RouterManager} from './common/router.manager';
import {AppComponent} from './app.component';
import {BlockAdsComponent} from './block-ads/block-ads.component';
import {FollowComponent} from './follow/follow.component';
import {SearchComponent} from './search/search.component';
import {SettingComponent} from './setting/setting.component';

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
    path: RouterManager.BLOCK_ADS,
    component: BlockAdsComponent
  },
  {
    path: RouterManager.FOLLOW,
    component: FollowComponent
  },
  {
    path: RouterManager.SEARCH,
    component: SearchComponent
  },
  {
    path: RouterManager.SETTING,
    component: SettingComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

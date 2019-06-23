import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BlockAdsComponent } from './block-ads/block-ads.component';
import { FollowComponent } from './follow/follow.component';
import { SearchComponent } from './search/search.component';
import { SettingComponent } from './setting/setting.component';
import {FishHttpService} from './service/fish-http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockAdsComponent,
    FollowComponent,
    SearchComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FishHttpService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

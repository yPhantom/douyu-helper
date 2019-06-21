import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CustomComponent} from './barrage-custom/custom/custom.component';
import {BarrageSkinComponent} from "./barrage-custom/barrage-skin/barrage-skin.component";
import { BarrageSearchComponent } from './barrage-custom/barrage-search/barrage-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomComponent,
    BarrageSkinComponent,
    BarrageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

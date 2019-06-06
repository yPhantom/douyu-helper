import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SettingDialogComponent } from './home/setting-dialog/setting-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [SettingDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

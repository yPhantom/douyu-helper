import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomComponent} from './custom/custom.component';
import {MaterialModule} from '../material/material.module';
import { CustomRoutingModule } from './custom-routing.module';
import { BarrageSkinComponent } from './barrage-skin/barrage-skin.component';

@NgModule({
  declarations: [CustomComponent, BarrageSkinComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CustomRoutingModule,
  ]
})
export class CustomModule { }

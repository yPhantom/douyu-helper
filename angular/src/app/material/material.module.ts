import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatCheckboxModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }

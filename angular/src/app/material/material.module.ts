import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule { }

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
        MatDialogModule,
        MatBadgeModule,
        MatProgressSpinnerModule} from '@angular/material';

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
    MatDialogModule,
    MatBadgeModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }

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
        MatProgressSpinnerModule,
        MatChipsModule,
        MatToolbarModule,
        MatSidenavModule,} from '@angular/material';

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
    MatProgressSpinnerModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }

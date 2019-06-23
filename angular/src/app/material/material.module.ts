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
        MatSidenavModule,
        MatRadioModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatTooltipModule} from '@angular/material';

import {ScrollDispatchModule} from '@angular/cdk/scrolling';

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
    MatSidenavModule,
    MatRadioModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    ScrollDispatchModule
  ]
})
export class MaterialModule { }

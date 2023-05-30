import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const MODULES = [
  MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
]

@NgModule({
  imports: [
    MODULES
  ],
  exports: [MODULES]
})
export class MaterialModule { }

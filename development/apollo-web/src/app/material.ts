import { NgModule } from '@angular/core';

// angular materials imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatChipsModule, MatNativeDateModule ],
  exports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatChipsModule, MatNativeDateModule ],
})

export class MaterialModule {};

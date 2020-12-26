import { NgModule } from '@angular/core';

// angular materials imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule ],
  exports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule ],
})

export class MaterialModule {};

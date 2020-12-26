import { NgModule } from '@angular/core';

// angular materials imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [ MatToolbarModule, MatButtonModule, MatCardModule ],
  exports: [ MatToolbarModule, MatButtonModule, MatCardModule ],
})

export class MaterialModule {};

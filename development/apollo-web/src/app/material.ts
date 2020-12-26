import { NgModule } from '@angular/core';

// angular materials imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [ MatToolbarModule, MatButtonModule ],
  exports: [ MatToolbarModule, MatButtonModule ],
})

export class MaterialModule {};

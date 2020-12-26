import { NgModule } from '@angular/core';

// angular materials imports
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [ MatToolbarModule ],
  exports: [ MatToolbarModule ],
})

export class MaterialModule {};

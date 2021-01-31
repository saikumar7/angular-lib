import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengImportsModule } from './primengimports/primeng-imports.module';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    BrowserAnimationsModule,
    PrimengImportsModule
  ],
  exports: []
})
export class PrimengLibModule { }

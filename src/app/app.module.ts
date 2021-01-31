import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengImportsModule } from './primengimports/primeng-imports.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDropdownComponent } from './test-dropdown/test-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

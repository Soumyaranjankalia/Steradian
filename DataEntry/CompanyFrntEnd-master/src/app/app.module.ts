import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns;
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    // // MultiSelectAllModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

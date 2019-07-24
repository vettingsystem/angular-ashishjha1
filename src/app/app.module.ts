import { CustomerService } from './customer.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { CountriesComponent } from './countries.component';
import { CountriesService } from './countries.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
 
    CountriesComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule
  ],
  providers: [ CustomerService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

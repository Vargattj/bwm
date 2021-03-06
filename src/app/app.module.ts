import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RentalModule } from './rental/rental.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RentalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

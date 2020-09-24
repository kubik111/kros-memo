import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';

//views
import { HomeComponent } from './views/home/home.component';
import { InvoicingComponent } from './views/invoicing/invoicing.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
    HomeComponent,
    InvoicingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

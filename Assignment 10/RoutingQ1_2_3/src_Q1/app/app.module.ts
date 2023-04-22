import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    BooksComponent,
    DefaultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

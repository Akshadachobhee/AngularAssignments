import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';

const routes: Routes = [
  {path: '',component : DefaultpageComponent}, 
  {path: 'books',component : BooksComponent},
  {path: 'technologies',component :TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

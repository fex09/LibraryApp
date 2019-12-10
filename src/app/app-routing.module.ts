import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    children: [{
        path: '',
        component: BookListComponent
      },
      {
        path: 'add',
        component: AddBookComponent
      },
      {
        path: 'edit/:id',
        component: EditBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BookService } from './../../../services/books/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: Book[];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(
      data => {
        this.books = data;
      },
      err => {
        alert('Error!!');
      }
    );
  }

  deleteBook(id: number): void {
    this.bookService.delete(id).subscribe(
      data => {
        alert('Book deleted!');
      },
      err => {
        alert('Error Deleted!');
      }
    );
  }

}

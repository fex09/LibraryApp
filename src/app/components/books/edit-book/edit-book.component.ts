import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id');
    });
   }

  ngOnInit() {
    this.bookService.getById(this.bookId).subscribe(
      data => {
        this.book = data;
      },
      err => {
        alert('Error!!');
      }
    );
  }

  saveBook(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.bookService.edit(this.book).subscribe(
      data => {
        this.book = data;
        alert('Book updated!');
        this.router.navigate(['/books']);
      },
      err => {
        alert('Error adding book!');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }

}

import { BookService } from './../../../services/books/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  public book: Book;
  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  saveBook(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.bookService.add(this.book).subscribe(
      data => {
        this.book = data;
        alert('Book added!');
        this.router.navigate(['/books']);
      },
      err => {
        alert('Error adding user!');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

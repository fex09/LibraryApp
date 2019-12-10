import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private endpoint = 'https://fakerestapi.azurewebsites.net/api';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Book[]> {
    return this.http.get(this.endpoint + '/Books') as Observable<Book[]>;
  }

  public getById(id: number): Observable<Book> {
    return this.http.get(this.endpoint + '/Books/' + id) as Observable<Book>;
  }

  public add(user: Book): Observable<Book> {
      return this.http.post(this.endpoint + '/Books', user) as Observable<Book>;
  }
  public edit(user: Book): Observable<Book> {
    return this.http.put(this.endpoint + '/Books/' + user.ID, user) as Observable<Book>;
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.endpoint + '/Books/' + id) as Observable<any>;
  }
}

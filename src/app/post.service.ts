import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
  ) { }

  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
      /*.pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError('getPost', []))
      );*/
  }

  getPost (id:number): Observable<Post> {
    const url = `${this.url}/${id}`;
    return this.http.get<Post>(url)
      /*.pipe(
        tap(_ => this.log('Fetched post')),
        catchError(this.handleError<Post>(`getPost id=${id}` ))
      )*/
  }
}

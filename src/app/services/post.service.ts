import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}

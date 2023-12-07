import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../interfaces/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getComments() {
    console.log(`${this.baseUrl}/comments`)
    return this.http.get<Comment[]>(`${this.baseUrl}/comments`);
  }
}

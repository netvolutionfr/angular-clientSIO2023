import {Component, OnInit} from '@angular/core';
import {Post} from "../interfaces/post";
import {PostService} from "../services/post.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {
  }
  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {CommentService} from "../services/comment.service";
import {Comment} from "../interfaces/comment";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  constructor(private commentService: CommentService) {
  }
  ngOnInit() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}

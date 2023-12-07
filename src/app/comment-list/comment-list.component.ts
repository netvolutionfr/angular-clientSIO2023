import {Component, OnInit} from '@angular/core';
import {CommentService} from "../comment.service";
import {Comment} from "../comments.interface";
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

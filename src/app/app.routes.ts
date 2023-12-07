import { Routes } from '@angular/router';
import {CommentListComponent} from "./comment-list/comment-list.component";
import {PostListComponent} from "./post-list/post-list.component";

export const routes: Routes = [
  { path: 'comments', component: CommentListComponent },
  { path: 'posts', component: PostListComponent },
];

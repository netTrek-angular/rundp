import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import { Post } from '../post';
import {PostService} from "../post.service";

@Component({
  selector: 'rp-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]> = this.postService.entities$;

  constructor(private readonly postService: PostService) {
  }
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postService.getAll();
  }

}

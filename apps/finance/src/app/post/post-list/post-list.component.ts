import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {delay, Observable} from "rxjs";
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
  loading$: Observable<boolean> = this.postService.loading$;

  constructor(private readonly postService: PostService) {
  }
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postService.getAll();
  }

  del(post: Post) {
    this.postService.delete( post, {isOptimistic: false} ); // geht nicht?
  }

  edit(post: Post) {
    this.postService.update( {...post, title: 'updated_' + post.title } );
  }

  add ( post?: Post ) {
    this.postService.add( post??{title: 'foo', desc:'bar'} );
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../post";

@Component({
  selector: 'rp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post?: Post;
  @Output() del = new EventEmitter<Post> ();
  @Output() edit = new EventEmitter<Post> ();
  doDel() {
    this.del.emit( this.post );
  }

  doEdit() {
    this.edit.emit( this.post );
  }
}

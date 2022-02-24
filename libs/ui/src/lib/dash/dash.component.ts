import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadUsers} from "./_store/user.actions";
import {selectAdmUsr} from "./_store/user.selectors";

@Component({
  selector: 'rp-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  admin$ = this.store.select( selectAdmUsr );

  constructor( private readonly store: Store ) {
  }

  ngOnInit(): void {
    this.store.dispatch( loadUsers () );
  }

}

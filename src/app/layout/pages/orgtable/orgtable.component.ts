import { Component, OnInit, Input} from '@angular/core';
// import {MatPaginator, } from '@angular/material/paginator';
// import { MatSort, } from '@angular/material/sort';
// import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-orgtable',
  templateUrl: './orgtable.component.html',
  styleUrls: ['./orgtable.component.scss']
})
export class OrgtableComponent implements OnInit {
  @Input() inp:any
  @Input() type="tablescomponent";
  constructor() { }

  ngOnInit(): void {
  }

}

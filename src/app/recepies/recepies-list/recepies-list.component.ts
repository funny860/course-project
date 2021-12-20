import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepies.mode';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css'],
})
export class RecepiesListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      'Test Recipe',
      'This is a test description of Recipe',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    ),
    new Recepie(
      'Test Recipe',
      'This is a test description of Recipe',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

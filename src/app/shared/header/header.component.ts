import { Component, OnInit } from '@angular/core';

import categories from '@db/categories.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cats = categories;

  constructor() { }

  ngOnInit(): void {
  }

}

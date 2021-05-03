import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import products from '../../db/products.json';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  items = products;
  itemsFiltered = products;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('404 Page not found | Gifter');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Page not found. Error 404.' }
    );
    this.randomItems(3);
  }

  randomItems(n: number): void {
    this.itemsFiltered = [];
    for (let i = 0; i < n; i++) {
      let r = Math.floor(Math.random() * this.items.length);
      while (this.itemsFiltered.includes(this.items[r])) {
        r = Math.floor(Math.random() * this.items.length);
      }
      this.itemsFiltered.push(this.items[r]);
    }
  }
}

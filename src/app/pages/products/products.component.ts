import { DoCheck, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import products from '@db/products.json';
import categories from '@db/categories.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items = products;
  itemsFiltered = products;
  cats = categories;
  catFromRoute: any;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.catFromRoute = routeParams.get('cat');

    if (this.catFromRoute) {
      if (Number(this.catFromRoute)) {
        // price filter
        this.itemsFiltered = this.items.filter((x: { price: any; }) => !!x.price)
          .filter((x: { price: number; }) => x.price === Number(this.catFromRoute));
      } else {
        // cat filter
        this.itemsFiltered = this.items.filter((x: { cat: any; }) => !!x.cat)
          .filter((x: { cat: { [x: string]: any; }; }) => x.cat[this.catFromRoute]);
      }
    }


    this.titleService.setTitle(
      (this.catFromRoute?.replace(/\w\S*/g, function(txt: any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) || 'Products')
      + ' | Gifter'
    );
    this.metaTagService.updateTag(
      { name: 'description', content: this.catFromRoute || 'Products' }
    );
  }
}

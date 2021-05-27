import { Component, DoCheck, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import products from '@db/products.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items = products;
  itemsFiltered = products;
  searchVal = '';

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Search | Gifter');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Search' }
    );
  }

  ngDoCheck(): void {
    const routeParams = this.route.queryParams;
    const searchFromRoute = routeParams.subscribe(params => {
      this.searchVal = params.s;
      if (params.s) {
        this.itemsFiltered = this.items.filter((x: { name: any; desc: any; }) => !!x.name && !!x.desc)
          .filter((x: { name: string; desc: string; }) =>
            x.name.toLowerCase().includes(params.s.toLowerCase())
            || x.desc.toLowerCase().includes(params.s.toLowerCase()));
      } else {
        this.itemsFiltered = products;
      }
    });
  }

  updateSearch(val: string): void {
    this.router.navigate(['/search'], { queryParams: { s: val } });
  }
}

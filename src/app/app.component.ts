import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) {}

  title = 'gifter';

  todos = [
    'add colors',
    'moving blocks',
    'Improve homepage: find great pictures, add USP',
    'responsiveness + mobile nav',
    'improve footer',
    'create amazon affiliate',
    'add real products',
    'Gifter.link',
    'add categories (topics, price)',
    'improve search (order by relevance)',
    'add search filters (price, cat)',
    'contact page',
    'create a blog',
    'write posts',
    'breadcrumb',
    'add a sitemap',
    'improve SEO',
  ];

  ngOnInit(): void {
    this.titleService.setTitle('Gifter, the perfect place to find gifts for your loved ones');
    this.metaTagService.addTags([
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Search a wide range of presents on Gifter and find what to offer for any occasion and for anybody.' },
      { name: 'author', content: '' },
      { property: 'og:title', content: 'Gifter, the perfect place to find gifts for your loved ones' },
      { property: 'og:description', content: 'Search a wide range of presents on Gifter and find what to offer for any occasion and for anybody.' },
      { property: 'og:url', content: 'https://beumsk.github.io/gifter/' },
    ]);
  }
}

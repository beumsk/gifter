import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private metaTagService: Meta
  ) {}

  title = 'gifter';

  todos = [
    'Improve homepage: find gift banner',
    'Improve navigation with products categories?',
    'add categories (topics, price)',
    'improve search (order by relevance)',
    'add search filters (price, cat)',
    'add real products',
    'add colors',
    'pick a font',
    'responsiveness + mobile nav',
    'contact page',
    'create a blog',
    'write posts',
    'breadcrumb',
    'add a sitemap',
    'improve SEO',
    'G logo with arrow',
    'Social banner',
    'Gifter.link',
    'create amazon affiliate',
    'lazyloading with loadChildren',
  ];

  ngOnInit(): void {
    this.metaTagService.addTags([
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Search a wide range of presents on Gifter and find what to offer for any occasion and for anybody.' },
      { name: 'author', content: '' },
      { property: 'og:title', content: 'Gifter, the perfect place to find gifts for your loved ones' },
      { property: 'og:description', content: 'Search a wide range of presents on Gifter and find what to offer for any occasion and for anybody.' },
      { property: 'og:url', content: 'https://beumsk.github.io/gifter/' },
      { property: 'og:image', content: '' },
      { property: 'og:image:secure_url', content: '' },
    ]);
  }
}

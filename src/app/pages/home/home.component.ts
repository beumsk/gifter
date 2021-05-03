import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  highlightedCat = [
    {
      name: 'Games',
      desc: 'description',
      link: '/products/games',
      src: 'https://via.placeholder.com/400x300/42a5f5/ffffff?text=Games',
      alt: 'placeholder'
    },
    {
      name: 'Tech',
      desc: 'description',
      link: '/products/tech',
      src: 'https://via.placeholder.com/400x300/64b5f6/ffffff?text=Tech',
      alt: 'placeholder'
    },
    {
      name: '5€',
      desc: 'description',
      link: '/products/5',
      src: 'https://via.placeholder.com/400x300/90caf9/ffffff?text=5€',
      alt: 'placeholder'
    },
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gifter, the perfect place to find gifts for your loved ones | Home');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Home' }
    );
  }

}

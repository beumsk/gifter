import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promoMain = [
    {
      title: 'Favorites from Gifter',
      subtitle: 'Check out the best sellers on Gifter',
      ctaText: 'Find ideas',
      ctaEmoji: '🎁',
      link: '/products/favorites',
      src: 'assets/images/confetti-multicolor.jpg',
      alt: 'placeholder'
    }
  ];

  promoBoxes = [
    {
      title: 'Games',
      ctaText: 'Find ideas',
      link: '/products/games',
      src: '',
      alt: 'placeholder'
    },
    {
      title: 'Tech',
      ctaText: 'Find ideas',
      link: '/products/tech',
      src: '',
      alt: 'placeholder'
    },
    {
      title: '5€',
      ctaText: 'Find ideas',
      link: '/products/5',
      src: '',
      alt: 'placeholder'
    }
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

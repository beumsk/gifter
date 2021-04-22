import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  todos = [
    'access sass variables inside components',
    'lazyloading with loadChildren',
    'base objects in a db or json',
    'create categories (topics, price)',
    'gifts, useful, etc.',
    'create search & filters',
    'create amazon affiliate',
    'gift-finder?',
  ];
}

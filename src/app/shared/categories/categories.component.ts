import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() cats: any;
  @Input() catFromRoute: any;

  constructor() { }

  ngOnInit(): void {
  }
}

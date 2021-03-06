import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  @Input() items: any;
  @Input() fit: any;
  @Input() styles: any;

  constructor() { }

  ngOnInit(): void {
  }

}

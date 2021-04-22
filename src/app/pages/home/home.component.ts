import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsk = [
    {
      name: 'ITEM 1',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    },
    {
      name: 'ITEM 2',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    },
    {
      name: 'ITEM 3',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    },
    {
      name: 'ITEM 4',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    },
    {
      name: 'ITEM 5',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    },
    {
      name: 'ITEM 6',
      desc: 'description',
      price: 'price',
      link: 'https://amazon.com',
      src: 'https://via.placeholder.com/400x300',
      alt: 'placeholder'
    }
  ];

  items = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getProducts();

    // this.apiService.get().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.items = data;
    // });
  }

  getProducts(): void {
    this.apiService.get().subscribe((resp: any) => {
      console.log(resp);
      this.items = resp;
    });
  }

}

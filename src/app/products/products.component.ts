import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
    product: Product = {
      name: 'Black Manta\'s Helmet',
      description: 'He won\'t need it anymore.',
      price: 999.99
    };
  ngOnInit() {
  }
}

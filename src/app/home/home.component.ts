import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrProducts: Product[];

  constructor(private productsService: ProductsService) {
    this.arrProducts = []
  }

  ngOnInit(): void {
    this.productsService.getRandomProducts().then(res => {
      this.arrProducts = res.products
    })
  }

}

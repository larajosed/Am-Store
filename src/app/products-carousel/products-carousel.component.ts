import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit {
  arrProducts: Product[];

  constructor(private productsService: ProductsService) {
    this.arrProducts = []
  }

  ngOnInit(): void {
    this.productsService.getRandomProducts().then(res => {
      console.log(res);
      this.arrProducts = res.products
    })
  }


}

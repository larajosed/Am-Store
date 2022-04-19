import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.productDetail = new Product();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let friendlyUrl = paramMap.get('friendlyUrl');
      console.log(friendlyUrl);
      if (friendlyUrl == null) {
        return
      }
      this.productService.getDetailProduct(friendlyUrl).then(res => {
        this.productDetail = res
      })

    })
  }

}

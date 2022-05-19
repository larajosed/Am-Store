import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product.model';
import { ProductsService } from '../service/products.service';
import { CartService } from '../service/cart.service';
import { PersistableShoppingCartItem } from '../models/PersistableShoppingCartItem.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;
  router: any;



  constructor(private productService: ProductsService, private cartService: CartService, private route: ActivatedRoute) {
    this.productDetail = new Product();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let friendlyUrl = paramMap.get('friendlyUrl');
      if (friendlyUrl == null) {
        return
      }
      this.productService.getDetailProduct(friendlyUrl).then(res => {
        this.productDetail = res
      })
    })
  }

  addToCart(productId: number): void {
    var product = new PersistableShoppingCartItem();
    product.product = productId;
    product.quantity = 1;
    this.cartService.addProductToCart(product).then(res => {
      this.cartService.saveCodeCart(res.code)

    });

  }
}

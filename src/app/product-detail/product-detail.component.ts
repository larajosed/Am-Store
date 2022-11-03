import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product.model';
import { ProductsService } from '../service/products.service';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { CartService } from '../service/cart.service';
import { PersistableShoppingCartItem } from '../models/PersistableShoppingCartItem.model';
import { Store } from "@ngrx/store"
import { ArticlesInCartNumberInterface } from '../interface/update-shopping-car'
import { updateArticlesNumber } from '../update.actions';

>>>>>>> Stashed changes
=======
import { CartService } from '../service/cart.service';
import { PersistableShoppingCartItem } from '../models/PersistableShoppingCartItem.model';
>>>>>>> feature/purchase

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;
  router: any;
  quantities: Array<number>;
  selectedQuantity: number;

<<<<<<< HEAD
<<<<<<< Updated upstream
  constructor(private productService: ProductsService, private route: ActivatedRoute) {
=======
  constructor(private productService: ProductsService, private cartService: CartService, private route: ActivatedRoute, private storeArticlesQuantity: Store<ArticlesInCartNumberInterface>) {
>>>>>>> Stashed changes
=======

  constructor(private productService: ProductsService, private cartService: CartService, private route: ActivatedRoute) {
>>>>>>> feature/purchase
    this.productDetail = new Product();
    this.quantities = []
    this.selectedQuantity = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let friendlyUrl = paramMap.get('friendlyUrl');
      if (friendlyUrl == null) {
        return
      }
      this.productService.getDetailProduct(friendlyUrl).then(res => {
        this.productDetail = res;

        this.productDetail.quantityOrderMaximum = 5;

        var [min, max] = this.productService.getQuantityProduct(this.productDetail);
        for (let i = min; i <= max; i++) {
          this.quantities.push(i)
        }
        this.selectedQuantity = min
      })
    })
  }

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> feature/purchase
  addToCart(productId: number, quantity: number): void {
    var product = new PersistableShoppingCartItem();
    product.product = productId;
    product.quantity = quantity;
    this.cartService.addProductToCart(product).then(res => {
      this.cartService.saveCodeCart(res.code)
<<<<<<< HEAD
      this.storeArticlesQuantity.dispatch(updateArticlesNumber({ articlesQuantity: res.quantity }));
    });
  }
>>>>>>> Stashed changes
=======

    });

  }
>>>>>>> feature/purchase
}

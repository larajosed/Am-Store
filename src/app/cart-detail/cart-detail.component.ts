import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart.model';
import { CartService } from '../service/cart.service';
import { Product } from '../models/Product.model';
import { Store } from '@ngrx/store';
import { ArticlesInCartNumberInterface } from '../interface/update-shopping-car';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cart: Cart


  constructor(private cartService: CartService, private storeArticlesQuantity: Store<ArticlesInCartNumberInterface>) {
    this.cart = new Cart();

  }

  ngOnInit(): void {
    this.cartService.retrieveCartData()?.then(res => {
      this.cart = res;
    })

  }

}

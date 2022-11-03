import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ArticlesInCartNumberInterface } from '../interface/update-shopping-car'
import { Observable, timeout } from 'rxjs';
import { Store } from '@ngrx/store';
import { updateArticlesNumber } from '../update.actions';

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css']
})
export class CarWidgetComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

>>>>>>> feature/purchase
  productNumber: Number;

  constructor(private cartService: CartService) {
    this.productNumber = 0
=======

  productNumber: number = 0;

  constructor(private cartService: CartService, private storeArticlesQuantity: Store<any>) {
    this.storeArticlesQuantity.select('articlesInCartNumberStore').subscribe(data => {
      this.productNumber = data.articlesQuantity
    })
>>>>>>> Stashed changes
  }

  ngOnInit(): void {
    var optionalPromise = this.cartService.retrieveCartData();
    if (optionalPromise !== null) {
      optionalPromise.then(res => {
<<<<<<< HEAD
<<<<<<< Updated upstream
        this.productNumber = res.products.length
=======
        this.storeArticlesQuantity.dispatch(updateArticlesNumber({ articlesQuantity: res.quantity }));
>>>>>>> Stashed changes
=======
        this.productNumber = res.quantity;
>>>>>>> feature/purchase
      })
    }
  }
}


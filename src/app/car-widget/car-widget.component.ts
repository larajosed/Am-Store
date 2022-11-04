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

  productNumber: Number;

  constructor(private cartService: CartService, private storeArticlesQuantity: Store<any>) {
    this.productNumber = 0
    this.storeArticlesQuantity.select('articlesInCartNumberStore').subscribe(data => {
      this.productNumber = data.articlesQuantity
    })
  }

  ngOnInit(): void {
    var optionalPromise = this.cartService.retrieveCartData();
    if (optionalPromise !== null) {
      optionalPromise.then(res => {
        this.productNumber = res.quantity;
        this.storeArticlesQuantity.dispatch(updateArticlesNumber({ articlesQuantity: res.quantity }));
      })
    }
  }
}


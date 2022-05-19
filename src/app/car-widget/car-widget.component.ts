import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css']
})
export class CarWidgetComponent implements OnInit {

  productNumber: Number;

  constructor(private cartService: CartService) {
    this.productNumber = 0
  }

  ngOnInit(): void {
    var optionalPromise = this.cartService.retrieveCartData();
    if (optionalPromise !== null) {
      optionalPromise.then(res => {
        this.productNumber = res.quantity;
      })
    }
  }

}

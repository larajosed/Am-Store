import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart.model';
import { CartService } from '../service/cart.service';
import { Store } from '@ngrx/store';
import { ProductsService } from '../service/products.service';
import { updateArticlesNumber } from '../update.actions';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cart: Cart
  productNumber: Number | undefined;
  modalRef: NgbModalRef | undefined;

  constructor(private cartService: CartService, private storeArticlesQuantity: Store<any>, private productsService: ProductsService, private modalService: NgbModal) {
    this.cart = new Cart();
    this.storeArticlesQuantity.select('articlesInCartNumberStore').subscribe(data => {
      this.productNumber = data.articlesQuantity;
    })
    this.modalRef = undefined;
  }


  ngOnInit(): void {
    this.cartService.retrieveCartData()?.then(res => {
      this.cart = res;
    })
  }

  open(modalContent: any) {
    this.modalRef = this.modalService.open(modalContent, { size: 'sm' });
  }


  deleteProduct(idProduct: number) {
    this.cartService.deleteProductToCart(idProduct).then((res) => {
      if (res == null) {
        this.cart = new Cart();
        this.cartService.deleteCodeCart();
        this.storeArticlesQuantity.dispatch(updateArticlesNumber({ articlesQuantity: 0 }));
      } else {
        this.cart = res;
        this.storeArticlesQuantity.dispatch(updateArticlesNumber({ articlesQuantity: res.quantity }));
      }
      this.modalRef?.close();
    })

  }

}

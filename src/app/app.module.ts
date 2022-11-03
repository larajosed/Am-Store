import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarWidgetComponent } from './car-widget/car-widget.component';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { articlesInCartReducer } from './update.reducer';

>>>>>>> Stashed changes
=======
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { FormsModule } from '@angular/forms';

>>>>>>> feature/purchase

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ProductsCarouselComponent,
    ProductDetailComponent,
    CategoriesMenuComponent,
    ProductListComponent,
    CarWidgetComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
<<<<<<< Updated upstream
    NgbModule
=======
    NgbModule,
    FormsModule,
    StoreModule.forRoot({ articlesInCartNumberStore: articlesInCartReducer })
>>>>>>> Stashed changes
=======
    NgbModule,
    FormsModule
>>>>>>> feature/purchase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

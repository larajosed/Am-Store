import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { CategoriesService } from '../service/categories.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  arrProducts: Product[];

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private productService: ProductsService) {
    this.arrProducts = []
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let friendlyUrl = paramMap.get('categoryFriendlyUrl');
      if (friendlyUrl == null) {
        return
      }
      this.categoriesService.getCategoryByFriendlyUrl(friendlyUrl).then(res => {
        let id = res.id;
        this.productService.getByCategory(id).then(res => {
          this.arrProducts = res.products;
        })
      })

    }
    )
  }
}


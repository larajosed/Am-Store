import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs';
import { Category } from '../models/Category.model';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  categories: Array<Category>;
  categorySelected: string | undefined;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private productService: ProductsService) {
    this.categories = [];
    this.categorySelected = undefined
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().then(res => {
      this.categories = res.categories;
    })
    this.route.paramMap.subscribe(paramMap => {
      let friendlyUrl = paramMap.get('categoryFriendlyUrl');
      if (friendlyUrl == null) {
        return
      }
      this.categorySelected = friendlyUrl;
    })
  }
}

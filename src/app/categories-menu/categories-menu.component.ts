import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category.model';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoriesService: CategoriesService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().then(res => {
      this.categories = res.categories;

    })
  }

}

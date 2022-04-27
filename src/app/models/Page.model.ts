import { Category } from "./Category.model";
import { Product } from "./Product.model";

export class Page {
    totalPages: number;
    number: number;
    recordsTotal: number;
    recordsFiltered: number;
    products: Array<Product>;
    categories: Array<Category>;


    constructor() {
        this.totalPages = 0;
        this.number = 0;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.products = [];
        this.categories = [];
    }
}
export class ProductPage {
    totalPages: number;
    number: number;
    recordsTotal: number;
    recordsFiltered: number;
    products: [];

    constructor() {
        this.totalPages = 0;
        this.number = 0;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.products = []
    }
}
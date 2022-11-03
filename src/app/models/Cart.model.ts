import { Product } from "./Product.model";

export class Cart {
    displaySubTotal: string;
    displayTotal: string;
    id: number;
    products: Array<Product>;
    quantity: number;

    constructor() {
        this.displaySubTotal = '';
        this.displayTotal = '';
        this.id = 0;
        this.products = []
        this.quantity = 0;

    }
}

import { ProductAttribute } from "./ProductAttribute.model";

export class PersistableShoppingCartItem {
    attributes: Array<ProductAttribute>
    product: number;
    promoCode: string;
    quantity: number;

    constructor() {
        this.attributes = [];
        this.product = 0;
        this.promoCode = '';
        this.quantity = 0;
    }
}


import { Category } from "./Category.model";
import { Description } from "./Description.models";
import { Image } from "./Image.model";

export class Product {
    id: number;
    price: number;
    categories: Array<Category>
    description: Description;
    image: Image;
<<<<<<< HEAD
<<<<<<< Updated upstream
    images: Array<Image>
=======
=======
>>>>>>> feature/purchase
    images: Array<Image>;
    quantity: number;
    quantityOrderMaximum: number;
    quantityOrderMinimum: number;
<<<<<<< HEAD
    displaySubTotal: string;
>>>>>>> Stashed changes
=======
>>>>>>> feature/purchase

    constructor() {
        this.id = 0;
        this.price = 0;
        this.categories = []
        this.description = new Description();
        this.image = new Image();
        this.images = [];
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
        this.quantity = 0;
        this.quantityOrderMaximum = 0;
        this.quantityOrderMinimum = 0;
        this.displaySubTotal = "";
>>>>>>> Stashed changes
=======
        this.quantity = 0;
        this.quantityOrderMaximum = 0;
        this.quantityOrderMinimum = 0;
>>>>>>> feature/purchase
    }

}
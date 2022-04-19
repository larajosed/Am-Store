import { Category } from "./Category.model";
import { Description } from "./Description.models";
import { Image } from "./Image.model";

export class Product {
    id: number;
    price: number;
    categories: Array<Category>
    description: Description;
    image: Image;

    constructor() {
        this.id = 0;
        this.price = 0;
        this.categories = []
        this.description = new Description();
        this.image = new Image();
    }

}
import { Description } from "./Description.models";

export class Category {
    description: Description;


    constructor(category: Category) {
        this.description = new Description();
    }

}
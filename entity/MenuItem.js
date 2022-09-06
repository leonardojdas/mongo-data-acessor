// your code here
class MenuItem {
    #id;
    #category;
    #description;
    #price;
    #vegetarian;

    constructor(inID, inCategory, inDescription, inPrice, inVegetarian){
        this.#id = inID;
        this.#category = inCategory;
        this.#description = inDescription;
        this.#price = inPrice;
        this.#vegetarian = inVegetarian;
    }

    get id(){
        return this.#id;
    }

    get category(){
        return this.#category;
    }

    get description(){
        return this.#description;
    }

    get price(){
        return this.#price;
    }

    get vegetarian(){
        return this.#vegetarian;
    }

    toJSON(){
        return {
            id: this.#id,
            category: this.#category,
            description: this.#description,
            price: this.#price,
            vegetarian: this.#vegetarian
        };
    }
}

exports.MenuItem = MenuItem;
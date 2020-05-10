class Game{
    constructor(){
        this.products = {"123456": {name: "Item 1", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/arbaeen_design2.png", "images/arbaeen_design1.png"], price: "$9999.99"},
                    "777777": {name: "Item 2", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "333333": {name: "Item 3", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"},
                    "444444": {name: "Item 4", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "999999": {name: "Item 5", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"},
                    "101010": {name: "Item 6", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "342343": {name: "Item 7", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"},
                    "686532": {name: "Item 8", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "121002": {name: "Item 9", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"},
                    "111111": {name: "Item 10", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "122222": {name: "Item 11", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"},
                    "143534": {name: "Item 12", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.99"},
                    "134323": {name: "Item 13", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.99"}};
    }

    get(id){
        if(this.products[id]){
            const {number, ...data} = this.products[id];
            return data;
        }
        else{
            return null;
        }
    }
}

module.exports = new Game();
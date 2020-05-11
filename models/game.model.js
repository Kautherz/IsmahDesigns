class Game{
    constructor(){
        this.products = {"123456": {name: "Item 1", type: "H-S", gender: "Men", pictures: ["images/arbaeen_design2.png", "images/arbaeen_design1.png"], price: "$9999.99"},
                    "777777": {name: "Item 2", type: "H-S", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$999.99"},
                    "333333": {name: "Item 3", type: "H-S", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$99.99"},
                    "444444": {name: "Item 4", type: "Longsleeve", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$999.90"},
                    "999999": {name: "Item 5", type: "T-shirt", gender: "Kids", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$99990.99"},
                    "101010": {name: "Item 6", type: "H-S", gender: "Kids", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$90.99"},
                    "342343": {name: "Item 7", type: "T-shirt", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$99.99"},
                    "686532": {name: "Item 8", type: "H-S", gender: "Women", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$990.99"},
                    "121002": {name: "Item 9", type: "Longsleeve", gender: "Women", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$9999.89"},
                    "111111": {name: "Item 10", type: "H-S", gender: "Women", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9999.69"},
                    "122222": {name: "Item 11", type: "T-shirt", gender: "Women", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$995.99"},
                    "143534": {name: "Item 12", type: "H-S", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$9299.99"},
                    "134323": {name: "Item 13", type: "H-S", gender: "Kids", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$909.99"}};
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

    getGenderDictionary(gender, type){
        var data = {};
        var keys = Object.keys(this.products);
        var num_products = Object.keys(this.products).length;
        if(gender == "Men" || gender == "Women" || gender == "Kids"){
            if(type == "H-S" || type == "Longsleeve" || type == "T-shirt"){
                var i = 0
                while(i < num_products){
                    if(this.products[keys[i]].gender == gender && this.products[keys[i]].type == type){
                        data[keys[i]] = this.products[keys[i]]; 
                    }
                    i++;
                }
                return data;
            }
            else if(type == null){
                var i = 0
                while(i < num_products){
                    if(this.products[keys[i]].gender == gender){
                        data[keys[i]] = this.products[keys[i]]; 
                    }
                    i++;
                }
                return data;
            }
            else{
                return data;
            }
        }
        else{
            return data;
        }
    }
}

module.exports = new Game();
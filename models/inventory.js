class Inventory{
    constructor(){
        this.products = {"123456": setItem("Item 1", "Hoodies and Sweatshirts", "Men", 10.99, "images/arbaeen_design2.png", "images/arbaeen_design1.png"),
                    "333333": setItem("Item 3", "Hoodies and Sweatshirts", "Kids", 25.99, "images/muharram_5front.png", "images/muharram_5back.png"),
                    "444444": setItem("Item 4", "Hoodies and Sweatshirts", "Kids", 30.99, "images/muharram_4front.png", "images/muharram_4back.png"),
                    "999999": setItem("Item 5", "Longsleeve T-Shirts", "Men", 30.99, "images/muharram_5front.png", "images/muharram_5back.png"),
                    "101010": setItem("Item 6", "Longsleeve T-Shirts", "Women", 50.99, "images/muharram_4front.png", "images/muharram_4back.png"),
                    "342343": setItem("Item 7", "T-Shirts", "Men", 45.99, "images/muharram_5front.png", "images/muharram_5back.png"),
                    "686532": setItem("Item 8", "Hoodies and Sweatshirts", "Men", 75.99, "images/muharram_4front.png", "images/muharram_4back.png"),
                    "121002": setItem("Item 9", "Longsleeve T-Shirts", "Men", 11.99, "images/muharram_5front.png", "images/muharram_5back.png"),
                    "111111": setItem("Item 10", "Hoodies and Sweatshirts", "Women", 13.99, "images/muharram_4front.png", "images/muharram_4back.png"),
                    "122222": setItem("Item 11", "Hoodies and Sweatshirts", "Women", 12.99, "images/muharram_5front.png", "images/muharram_5back.png"),
                    "143534": setItem("Item 12", "T-Shirts", "Women", 100.99, "images/muharram_4front.png", "images/muharram_4back.png"),
                    "134323": setItem("Item 13", "Hoodies and Sweatshirts", "Kids", 45.99, "images/muharram_5front.png", "images/muharram_5back.png")};

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
            if(type == "Hoodies and Sweatshirts" || type == "Longsleeve T-Shirts" || type == "T-Shirts"){
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

    getTotalPrice(bag){
        const keys = Object.keys(bag);
        const num_items = Object.keys(bag).length;
        var total = 0;
        for(var i = 0; i < num_items; i++){
            let[id, size] = keys[i].split('-');
            var price = this.products[id].price;
            var quantity = bag[keys[i]];
            total = parseFloat(total) + (parseFloat(price) * parseFloat(quantity));
        }
        total = (Math.round(total * 100) / 100).toFixed(2);
        return total;
    }
}

function setItem(name, type, gender, price, ...pictures){
    const item = {};
    item.name = name;
    item.type = type;
    item.gender = gender;
    item.price = price; 
    item.pictures = pictures;
    return item;
}

module.exports = new Inventory();
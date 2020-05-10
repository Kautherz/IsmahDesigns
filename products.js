const renderProducts = /*aysnc*/ function(){
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    //const product_data = await fetch("localhost:3000/get_product?product_id=5ea8b5645c670f58d49f139d")
    // var products = [{id: "123456", name: "Item 1", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/arbaeen_design2.png", "images/arbaeen_design1.png"], price: "$9999.99"},
    //             {id: "777777", name: "Item 2", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "333333", name: "Item 3", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
    //             {id: "444444", name: "Item 4", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "999999", name: "Item 5", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
    //             {id: "101010", name: "Item 6", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "342343", name: "Item 7", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
    //             {id: "686532", name: "Item 8", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "121002", name: "Item 9", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
    //             {id: "111111", name: "Item 10", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "122222", name: "Item 11", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
    //             {id: "143534", name: "Item 12", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
    //             {id: "134323", name: "Item 13", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"}];
    var products = {"123456": {name: "Item 1", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/arbaeen_design2.png", "images/arbaeen_design1.png"], price: "$9999.99"},
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
    num_products = Object.keys(products).length;

    var rows = 0
    if(num_products <= 4){
        rows = 1
    }
    else if(num_products % 4 == 0){
        rows = num_products / 4;
    }
    else{
        rows = (num_products / 4) + 1
    }

    var row_string = "";
    var keys = Object.keys(products);
    var item = 0
    console.log(keys)
    while(rows > 0){
        row_string += `<div class="container">
        <div class="row">`
        var i = 0
        while(i < 4 && item < num_products){
            row_string +=  `<div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="item.html?product_id=${keys[item]}">
                        <img class="pic-1" src="${products[keys[item]].pictures[0]}">
                        <img class="pic-2" src="${products[keys[item]].pictures[1]}">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="item.html?product_id=${keys[item]}">${products[keys[item]].name}</a></h3>
                    <span class="price">${products[keys[item]].price}</span>
                </div>
            </div>
        </div>`
            console.log(keys[item])
            item++;
            i++;
        }
        row_string += `</div>
        </div>
        <hr>`
        rows--;
    }
    document.getElementById("test").innerHTML = row_string;

}
renderProducts();



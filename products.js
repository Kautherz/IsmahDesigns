const renderProducts = /*aysnc*/ function(){
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    //const product_data = await fetch("localhost:3000/get_product?product_id=5ea8b5645c670f58d49f139d")
    products = [{name: "Item 1", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/arbaeen_design2.png", "images/arbaeen_design1.png"], price: "$9999.99"},
                {name: "Item 2", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 3", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
                {name: "Item 4", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 5", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
                {name: "Item 6", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 7", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
                {name: "Item 8", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 9", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
                {name: "Item 10", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 11", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"},
                {name: "Item 12", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_4front.png", "images/muharram_4back.png"], price: "$99.99"},
                {name: "Item 13", type: "Hoodies and Sweatshirts", gender: "Men", pictures: ["images/muharram_5front.png", "images/muharram_5back.png"], price: "$10.99"}]
    num_products = products.length;
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
    var item = 0;
    while(rows > 0){
        row_string += `<div class="container">
        <div class="row">`
        var i = 0
        while(i < 4 && item < num_products){
            row_string +=  `<div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="${products[item].pictures[0]}">
                        <img class="pic-2" src="${products[item].pictures[1]}">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">${products[item].name}</a></h3>
                    <span class="price">${products[item].price}</span>
                </div>
            </div>
        </div>`
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



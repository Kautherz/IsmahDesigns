const renderProducts = async function(){
    const urlparams = new URLSearchParams(window.location.search);
    const gender = urlparams.get("gender");
    const type = urlparams.get("type");
    var link = "";
    if(type){
        link = `https://rocky-refuge-39209.herokuapp.com/products?gender=${gender}&type=${type}`;
        //link = `http://localhost:3000/products?gender=${gender}&type=${type}`;
    }
    else{
        link = `https://rocky-refuge-39209.herokuapp.com/products?gender=${gender}`;
        //link = `http://localhost:3000/products?gender=${gender}`;
    }
    const response = await fetch(link, /*{mode: "no-cors"}*/);
    const products = await response.json();

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
    while(rows > 0){
        row_string += `<div class="container">
        <div class="row">`
        var i = 0
        while(i < 4 && item < num_products){
            row_string +=  `<div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="item.html?product_id=${keys[item]}">
                        <img class="pic-1" id="pic-1" src="${products[keys[item]].pictures[0]}">
                        <img class="pic-2" src="${products[keys[item]].pictures[1]}">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="item.html?product_id=${keys[item]}">${products[keys[item]].name}</a></h3>
                    <span class="price">$${products[keys[item]].price}</span>
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
    $('#loading').fadeOut();
}
renderProducts();



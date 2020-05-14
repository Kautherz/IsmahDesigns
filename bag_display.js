const renderBag = async function(){
    var row_string = "";
    //var response = await fetch(`https://rocky-refuge-39209.herokuapp.com/getBag`, {credentials: "include"});
    var response = await fetch(`http://localhost:3000/getBag`, {credentials: "include"});
    const bag = await response.json();
    var check = Object.keys(bag).length;
    if(check > 0)
    {
        var keys = Object.keys(bag);
        var num_products = Object.keys(bag).length;
        var bag_info = {};
        for(var j = 0;j< num_products; j++){
            let[id, size] = keys[j].split('-');
            //response = await fetch(`https://rocky-refuge-39209.herokuapp.com/product?productID=${id}`, {credentials: "include"});
            response = await fetch(`http://localhost:3000/product?productID=${id}`, {credentials: "include"});
            var product = await response.json();
            var price = product.price;
            var name = product.name;
            var pic1 = product.pictures[0];
            var pic2 = product.pictures[1];
            var quantity = bag[keys[j]];
            if(!bag_info[keys[j]]){
                bag_info[keys[j]] = {size, quantity, price , name, pic1, pic2};
            }
        }
        row_string += `<h1 class="projTitle">Shopping Bag</h1>
        <div class="heading cf">
            <h1>My Cart</h1>
            <a href="shop_menu.html" class="continueShopping">Continue Shopping</a>
        </div>
        <div class="cart">
            <ul class="cartWrap">
            <li class="items odd">
                <div class="infoWrap"> 
                    <div class="cartSection">`;
        var keys = Object.keys(bag_info);
        var i = 0
        while(i < num_products){
            let[id, size] = keys[i].split('-');
            row_string += `<div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="product-grid2">
                                        <div class="product-image2">
                                            <a href="item.html?product_id=${id}">
                                                <img class="pic-1" src="${bag_info[keys[i]].pic1}">
                                                <img class="pic-2" src="${bag_info[keys[i]].pic2}">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="item.html?product_id=${keys[i]}">${bag_info[keys[i]].name}</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3 class="centered">${bag_info[keys[i]].size}</h3>                            
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3 class="centered">${bag_info[keys[i]].quantity}</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3 class="centered">Price: $${bag_info[keys[i]].price}</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <button class="delete" onclick="SomeDeleteRowFunction(this, '${keys[i]}')">Delete</button>
                                </div>
                            </div>
                            <hr>`;
            i++;
        }
        row_string +=   `</div>        
                </div>
            </li>
            </ul>
        </div>`;
        document.getElementById('bag_rows').innerHTML = row_string;
    }
    else{
        row_string += `<h1 class="projTitle">Shopping Bag</h1>
        <div class="heading cf">
            <h1>My Cart</h1>
            <a href="shop_menu.html" class="continueShopping">Continue Shopping</a>
        </div>
        <div class="cart">
            <ul class="cartWrap">
            <li class="items odd">
                <div class="infoWrap"> 
                    <div class="cartSection">
                        <h2 class="centered">Your Shopping Bag is Empty</h2>
                        </div>        
                </div>
            </li>
            </ul>
        </div>`;
        document.getElementById('bag_rows').innerHTML = row_string;
    }
}

function SomeDeleteRowFunction(o, uniqueID) {
    deleteRow(o, uniqueID);
}

const deleteRow = async function(o, uniqueID){
    const options = {
        method: 'POST',
        body: JSON.stringify({data: uniqueID}),
        credentials: "include",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    };
    //await fetch('https://rocky-refuge-39209.herokuapp.com', options);
    await fetch('http://localhost:3000/deleteProduct', options);
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    location.reload();
}

renderBag();



const renderBag = async function(){
    var row_string = "";
    var response = await fetch(`https://rocky-refuge-39209.herokuapp.com/getBag`, {credentials: "include"});
    //var response = await fetch(`http://localhost:3000/getBag`, {credentials: "include"});
    const bag = await response.json();
    var check = Object.keys(bag).length;
    if(check > 0)
    {
        var keys = Object.keys(bag);
        var num_products = Object.keys(bag).length;
        var bag_info = {};
        for(var j = 0;j< num_products; j++){
            let[id, size] = keys[j].split('-');
            response = await fetch(`https://rocky-refuge-39209.herokuapp.com/product?productID=${id}`, {credentials: "include"});
            //response = await fetch(`http://localhost:3000/product?productID=${id}`, {credentials: "include"});
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
            var price = bag_info[keys[i]].price;
            var quantity = bag_info[keys[i]].quantity;
            var priceWithQuantity = (parseFloat(price) * parseFloat(quantity));
            priceWithQuantity = (Math.round(priceWithQuantity * 100) / 100).toFixed(2);
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
                                <div class="col-md-2 col-sm-6" id="size${i}">
                                    <h3 class="centered" id="userSize${i}">${bag_info[keys[i]].size}</h3>                            
                                </div>
                                <div class="col-md-2 col-sm-6" id="quantity${i}">
                                    <h3 class="centered" id="userQuantity${i}">${bag_info[keys[i]].quantity}</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3 class="centered">Price: $${priceWithQuantity}</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <button id = "edit-save${i}" onclick="toggleButtonText('${keys[i]}', '${i}')">Edit</button>
                                    <button class="delete" onclick="deleteRow(this, '${keys[i]}')">Delete</button>
                                </div>
                            </div>
                            <hr>`;
            i++;
        }
        response = await fetch(`https://rocky-refuge-39209.herokuapp.com/total`, {credentials: "include"});
        //response = await fetch(`http://localhost:3000/total`, {credentials: "include"});
        const total = await response.json();
        row_string +=   `<h2>Total Price: $${total}+Tax</h2>
                    </div>        
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

        row_string += ``
        document.getElementById('bag_rows').innerHTML = row_string;
    }
}

const deleteRow = async function(o, uniqueID){
    const options = {
        method: 'POST',
        body: JSON.stringify({data: uniqueID}),
        credentials: "include",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    };
    await fetch('https://rocky-refuge-39209.herokuapp.com/deleteProduct', options);
    //await fetch('http://localhost:3000/deleteProduct', options);
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    location.reload();
}


function editItem(uniqueID, i) {
    var sid = "size" + i; 
    var qid = "quantity" + i; 
    var quantity = document.getElementById(qid);
    const q = document.getElementById("userQuantity" + i).innerText
    const s = document.getElementById("userSize" + i).innerText

    var quantity_string = `<select id="userQuantity${i}" class="form-control centered">`;
    for(var j = 1; j < 11; j++){
        if(q == j){
            quantity_string += `<option selected = "selected" value="${j}">${j}</option>`;
            continue;
        }
        quantity_string += `<option value="${j}">${j}</option>`;
    }
    quantity_string += `</select>`
    quantity.innerHTML = quantity_string;

    var size = document.getElementById(sid);
    var size_string = `<select id="userSize${i}" class="form-control centered">`;
    const sizes = ["Small", "Medium", "Large"];
    for(var k = 0; k < sizes.length; k++){
        if(s == sizes[k]){
            size_string += `<option selected = "selected" value="${sizes[k]}">${sizes[k]}</option>`;
            continue;
        }
        size_string += `<option value="${sizes[k]}">${sizes[k]}</option>`;
    }
    size_string += `</select>`;
    size.innerHTML = size_string;
}

const saveItem = async function(uniqueID, i){
    quantity = document.getElementById("userQuantity" + i).value
    size = document.getElementById("userSize" + i).value
    let[product_id, old_size] = uniqueID.split('-');
    if(old_size == product_id){
        //only add to bag
        var data = {productID: product_id, size: size, quantity: quantity};
        var options = {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        };
        await fetch('https://rocky-refuge-39209.herokuapp.com/addProduct', options);
        //await fetch('http://localhost:3000/addProduct', options);
    }
    else
    {
        //delete previous uniqueid from bag, then add new unique id to bag with its new quantity
        var options = {
            method: 'POST',
            body: JSON.stringify({data: uniqueID}),
            credentials: "include",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        };
        await fetch('https://rocky-refuge-39209.herokuapp.com/deleteProduct', options);
        //await fetch('http://localhost:3000/deleteProduct', options);

        var data = {productID: product_id, size: size, quantity: quantity};
        var options = {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        };
        await fetch('https://rocky-refuge-39209.herokuapp.com/addProduct', options);
        //await fetch('http://localhost:3000/addProduct', options);
    }
    location.reload();
}

function toggleButtonText(uniqueID, i) {
    var bid = "edit-save" + i;
    var button = document.getElementById(bid);
    if(button.innerText == "Edit"){
        editItem(uniqueID, i);
        button.innerText = "Save";
    }
    else{
        saveItem(uniqueID, i);
        button.innerText = "Edit";
    }
}
renderBag();
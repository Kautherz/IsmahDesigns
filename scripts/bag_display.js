const renderBag = async function () {
    var total = 0.0;
    var row_string = "";

    var json_str = getCookie("bag_cookie");
    console.log(json_str);
    if(json_str === ""){
        bag = []
    }
    else
    {
        var bag = JSON.parse(json_str);
    }
    console.log(bag);

    if (bag.length > 0) {
        row_string += `<h1 class="projTitle">Shopping Bag</h1>
        <div class="heading cf">
            <h1>My Cart</h1>
            <a href="shop_menu.html" class="continueShopping" id = "continue">Continue Shopping</a>
        </div>
        <div class="cart">
            <ul class="cartWrap">
            <li class="items odd">
                <div class="infoWrap"> 
                    <div class="cartSection">`;

        for (var i = 0; i < bag.length; i++) {
            let id = bag[i]["productID"];

            response = await fetch(
                `https://afternoon-cliffs-47006.herokuapp.com/product?productID=${id}`
            );

            var product = await response.json();
            var price = product.price;
            var name = product.name;
            var pic1 = product.pictures[0];
            var pic2 = product.pictures[1];
            let quantity = bag[i]["quantity"];
            let size = bag[i]["size"];
            total += (quantity * price);

            // none of the functions for the cart will work yet
            row_string += `<div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="product-grid2">
                                        <div class="product-image2">
                                            <a href="item.html?product_id=${id}">
                                                <img class="pic-1" src="${pic1}">
                                                <img class="pic-2" src="${pic2}">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="item.html?product_id=${id}">${name}</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-6" id="size${i}">
                                    <h3 class="centered" id="userSize${i}">${size}</h3>                            
                                </div>
                                <div class="col-md-2 col-sm-6" id="quantity${i}">
                                    <h3 class="centered" id="userQuantity${i}">${quantity}</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3 class="centered">Price:</h3>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <button class="btn btn-xl btn-outline-dark text" id = "edit-save${i}" onclick="toggleButtonText(${i})">Edit</button>
                                    <button class="btn btn-xl btn-outline-dark text" onclick="deleteRow(${i})">Delete</button>
                                    <h3 class="centered">$${(quantity * price).toFixed(2)}</h3>
                                </div>
                            </div>
                            <hr>`;
        }

        row_string += `<h2>Total Price: $${total.toFixed(2)}+Tax</h2>
                    </div>        
                </div>
            </li>
            </ul>
        </div>`;
        document.getElementById("bag_rows").innerHTML = row_string;
        $("#loading").fadeOut();
    } else {
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
        document.getElementById("bag_rows").innerHTML = row_string;
        $("#loading").fadeOut();
    }
};

const deleteRow = function (_, i) {
    var json_str = getCookie("bag_cookie");
    console.log(json_str);
    var bag = JSON.parse(json_str);
    bag.splice(i, 1);
    var json_str = JSON.stringify(bag);
    setCookie("bag_cookie", json_str, 100);
    location.reload();
};

function editItem(i) {
    var sid = "size" + i;
    var qid = "quantity" + i;
    var quantity = document.getElementById(qid);
    const q = document.getElementById("userQuantity" + i).innerText;
    const s = document.getElementById("userSize" + i).innerText;

    var quantity_string = `<select id="userQuantity${i}" class="form-control centered">`;
    for (var j = 1; j < 11; j++) {
        if (q == j) {
            quantity_string += `<option selected = "selected" value="${j}">${j}</option>`;
            continue;
        }
        quantity_string += `<option value="${j}">${j}</option>`;
    }
    quantity_string += `</select>`;
    quantity.innerHTML = quantity_string;

    var size = document.getElementById(sid);
    var size_string = `<select id="userSize${i}" class="form-control centered">`;
    const sizes = ["Small", "Medium", "Large"];
    for (var k = 0; k < sizes.length; k++) {
        if (s == sizes[k]) {
            size_string += `<option selected = "selected" value="${sizes[k]}">${sizes[k]}</option>`;
            continue;
        }
        size_string += `<option value="${sizes[k]}">${sizes[k]}</option>`;
    }
    size_string += `</select>`;
    size.innerHTML = size_string;
}

const saveItem = function (i) {
    var json_str = getCookie("bag_cookie");
    var bag = JSON.parse(json_str);

    quantity = document.getElementById("userQuantity" + i).value;
    size = document.getElementById("userSize" + i).value;

    bag[i]["quantity"] = quantity;
    bag[i]["size"] = size;
    var bag_string = JSON.stringify(bag);
    setCookie("bag_cookie", bag_string, 100);
    location.reload();
};

function toggleButtonText(i) {
    var bid = "edit-save" + i;
    var button = document.getElementById(bid);
    if (button.innerText == "Edit") {
        editItem(i);
        button.innerText = "Save";
    } else {
        saveItem(i);
        button.innerText = "Edit";
    }
}

const setCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

renderBag();

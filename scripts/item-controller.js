const initControllers = function () {
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => clickEvent(product_id));
};

const clickEvent = function (product_id) {
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const data = { productID: product_id, size: size, quantity: quantity };
    var json_str = getCookie("bag_cookie");

    if (json_str && json_str !== "") {
        var bag = JSON.parse(json_str);
        var existed = false
        for (var i = 0; i < bag.length; i++) {
            if(bag[i]["productID"] === product_id && bag[i]["size"] === size){
                bag[i]["quantity"] = quantity;
                existed = true;
                break;
            }
        }
        if(existed === false){
            bag.push(data);
        }
        var json_str = JSON.stringify(bag);
        setCookie("bag_cookie", json_str, 100);
    } 
    else {
        var bag = [];
        bag.push(data);
        var json_str = JSON.stringify(bag);
        setCookie("bag_cookie", json_str, 100);
    }

    alert("Your item has been added to your bag.");
};

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

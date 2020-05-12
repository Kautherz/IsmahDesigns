productsJSON = JSON.stringify({products: ["123456", "777777", "333333", "444444", "999999", "101010", "342343", "686532", "121002", "111111", "122222", "143534", "134323"]});

const getBagItems = async function(productsJSON){
    const request = {};
    request.method= "POST";
    request.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'};
    request.body = productsJSON
    const response = await fetch("http://localhost:3000/addBag", request);
    const bagData = await response.json()
    return bagData;
}


    if(bagData.success){
        console.log("Added to Bag");
        response.json({"success":true});
        //document.getElementById("product-name").innerHTML = productsJSON.name;
        //document.getElementById("product-quantity").innerHTML = productsJSON.quantity;
        //document.getElementById("product-size").innerHTML = productsJSON.size;
        //document.getElementById("product-price").innerHTML = productsJSON.price;  
    }

    else{
        window.location.replace("error.html")
    }
    


getBagItems();
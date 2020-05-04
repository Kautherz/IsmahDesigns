const renderProductPage = /*aysnc*/ function(){
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    //const product_data = await fetch("localhost:3000/get_product?product_id=5ea8b5645c670f58d49f139d")
    const product_data = {name: "AAAAAAArbaeen Crewneck Sweatshirt", type: "Hoodies and Sweatshirts", gender: "Women", pictures: ["arbaeen_design2.png", "arbaeen_design1.png"], price: "$999.99"}
    document.getElementById("product-gender").innerHTML = product_data.gender;
    document.getElementById("product-name").innerHTML = product_data.name;
    document.getElementById("product-pic1").innerHTML = product_data.pictures[0];
    document.getElementById("product-pic2").innerHTML = product_data.pictures[1];
    document.getElementById("product-price").innerHTML = product_data.price;
    document.getElementById("product-type").innerHTML = product_data.type;
}
renderProductPage();
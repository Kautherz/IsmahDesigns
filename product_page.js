const renderProductPage = async function(){
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    const response = await fetch(`https://rocky-refuge-39209.herokuapp.com/product?productID=${product_id}`);
    const product_data = await response.json()
    if(product_data.success){
        document.getElementById("product-title").innerHTML = product_data.name;
        document.getElementById("product-name").innerHTML = product_data.name;
        document.getElementById("product-gender").innerHTML = product_data.gender;
        document.getElementById("product-pic1").src = product_data.pictures[0];
        document.getElementById("product-pic2").src = product_data.pictures[1];
        document.getElementById("product-price").innerHTML = product_data.price;
        document.getElementById("product-type").innerHTML = product_data.type;
    }
    else{
        window.location.replace("error.html");
    }
}
renderProductPage();

const renderProductPage = async function(){
    initControllers();
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    //const response = await fetch(`http://localhost:3000/product?productID=${product_id}`);
    const response = await fetch(`https://rocky-refuge-39209.herokuapp.com/product?productID=${product_id}`);
    const product_data = await response.json();
    if(product_data.success){
        document.getElementById("product-name").innerHTML = product_data.name;
        document.getElementById("product-pic1").src = product_data.pictures[0];
        document.getElementById("product-pic2").src = product_data.pictures[1];
        document.getElementById("product-price").innerHTML = "$" + product_data.price;
        var typeString = "";
        if(product_data.type == "Hoodies and Sweatshirts"){
            typeString = "Hoodies%20and%20Sweatshirts";
        }
        else{
            typeString = product_data.type;
        }
        document.getElementById("breadcrumb-list").innerHTML = `<ol class="breadcrumb-list" id= "breadcrumb-list">
        <li class="breadcrumb-item bc"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item bc"><a href="shop.html?gender=${product_data.gender}" id="product-gender">${product_data.gender}</a></li>
        <li class="breadcrumb-item bc"><a href="shop.html?gender=${product_data.gender}&type=${typeString}" id="product-type">${product_data.type}</a></li>
        <li class="breadcrumb-item active_breadcrumb", id="product-title">${product_data.name}</li>
      </ol>`;
      $('#loading').fadeOut();
    }
    else{
        window.location.replace("error.html");
        $('#loading').fadeOut();
    }
}
renderProductPage();
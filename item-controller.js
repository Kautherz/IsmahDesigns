const initControllers = function(){
    const urlparams = new URLSearchParams(window.location.search);
    const product_id = urlparams.get("product_id");
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => clickEvent(product_id));
}

const clickEvent = async function(product_id){
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const data = {productID: product_id, size: size, quantity: quantity};
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: "include",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    };
    await fetch('https://rocky-refuge-39209.herokuapp.com/addProduct', options);
    //await fetch('http://localhost:3000/addProduct', options);
    alert("Your item has been added to your bag.")
    
}
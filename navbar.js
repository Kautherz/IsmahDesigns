const renderNavbar = async function(){    
    document.getElementById("section-home").innerHTML = `<div id="section-home">
    <nav id = "myNavbar" class = 'navbar fixed-top navbar-expand-lg navbar-light bg-light'>
        <a class="navbar-brand" href="index.html"> <img src="images/image1.png" width="100" height="50"/> </a>

        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarSupportedContent">
            <span class='navbar-toggler-icon'></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class = 'nav-link text-black' href="index.html#section-home"> Home </a> 
                </li>

                <li class="nav-item">
                    <a class="nav-link text-black" href="index.html#section-collections">Our Collections</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li class="nav-item dropdown bg-transparent">
                            <a class="dropdown-item dropdown-toggle" href="shop.html?gender=Men" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Men
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=Hoodies%20and%20Sweatshirts">Men's Hoodies & Sweatshirts</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=Longsleeve%20T-Shirts">Men's Long Sleeve T-Shirts</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=T-Shirts">Men's T-Shirts</a></li>
                            </ul>
                        </li>
                            
                        <div class="dropdown-divider"></div>

                        <li class="nav-item dropdown">
                            <a class="dropdown-item dropdown-toggle" href="shop.html?gender=Women" id="navbarDropdown2" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Women
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=Hoodies%20and%20Sweatshirts">Women's Hoodies & Sweatshirts</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=Longsleeve%20T-Shirts">Women's Long Sleeve T-Shirts</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="shop.html?gender=Men&type=T-Shirts">Women's T-Shirts</a></li>
                            </ul>
                        </li>
                            
                        <div class="dropdown-divider"></div>

                        <li class="nav-item dropdown">
                            <a class="dropdown-item dropdown-toggle" href="shop.html?gender=Kids" id="navbarDropdown3" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Youth
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <li><a class="dropdown-item" href="shop.html?gender=Kids">Youth Clothing</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="#">Toddler's Clothing</a></li>
                            </ul>
                        </li>

                        <div class="dropdown-divider"></div>
                        
                        <li><a class="dropdown-item" href="#">Hats</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-black" href="#section-about">About Us</a>
                </li>
                <li>
                    <a class = 'nav-link text-black' href="index.html#section-contact">Contact Us </a> 
                </li>
                <li class="nav-item">
                    <a class = 'nav-link text-black' href="bag.html">Bag <i class="fas fa-shopping-bag"></i> 
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </div>`

    footer = document.getElementById("footer");
    if(footer){
        footer.innerHTML = `<footer class="bg-dark">
                            <div class="container">
                                <p class="text-center" style="color:#FFFFFF;">Copyright &copy; 2020 Kauther Zeini and Ali Zaini</p>
                            </div>
                        </footer>`;
    }
}
renderNavbar();
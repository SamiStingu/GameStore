window.onload = greet2();
window.onload = addToCart();

// Add to cart
function addToCart() {
    const cart_item = document.getElementById('cart_number');
    let holdArray = JSON.parse(window.localStorage.getItem('cart'));
    if(holdArray) {
        if(holdArray.length > 0) {
        cart_item.setAttribute('class', 'cartHoldItem');
        cart_item.innerHTML = holdArray.length;
    }
    }
}

// New greet
function greet2() {
    let greet_name = localStorage.getItem('name');
    let greet_logare = localStorage.getItem('logged');
    let register_box = document.getElementById('register_name');
    let login_box = document.getElementById('login_logout');
    if (greet_logare) {
        register_box.innerHTML = 'Hello ' + greet_name;
        const blue = document.getElementById('register_blue')
        blue.style.backgroundColor = '#0074E4';
        login_box.innerHTML = 'Log Out';

        login_box.addEventListener('click', (event) => {
            localStorage.removeItem('logged');
            window.open(`/home.html`, "_blank");
        })
    } else {
        register_box.innerHTML = 'Register';
        login_box.innerHTML = 'Log In';

        login_box.addEventListener('click', (event) => {
            window.open(`/sign_in.html`, "_blank");
        })
    }
}




// Search
const searchInput = document.getElementById('header_search');
const searchBtn = document.getElementById('header_search_btn');
searchBtn.addEventListener('click', (event) => {
    localStorage.setItem('gameSearched', searchInput.value);
    gameSearched = localStorage.getItem('gameSearched');
    window.open(`/product.html?searched=${gameSearched}`, "_self")
})

// // Cart items 
// function addToCart() {
//     const cart_item = document.getElementById('cart_number');
//     cart_item.setAttribute('class', 'cartHoldItem');
//     let holdArray = JSON.parse(window.localStorage.getItem('cart'));
//     cart_item.innerHTML = holdArray.length;
// }



import {
    games
} from "./games.js";

// Add to cart
function addToCart() {
    const cart_item = document.getElementById('cart_number');
    let holdArray = JSON.parse(window.localStorage.getItem('cart'));
    if(holdArray.length > 0) {
        cart_item.setAttribute('class', 'cartHoldItem');
    cart_item.innerHTML = holdArray.length;
    }
}


//Hero redirect
const herogame1_detail = document.querySelector('#herogame1_buy');
const herogame1_detail2 = document.querySelector('#herogame1_buy2');
const herogame1_cart = document.querySelector('#herogame1_cart');
const herogame2_detail = document.querySelector('#herogame2_buy');
const herogame2_detail2 = document.querySelector('#herogame2_buy2');
const herogame2_cart = document.querySelector('#herogame2_cart');
const herogame3_detail = document.querySelector('#herogame3_buy');
const herogame3_detail2 = document.querySelector('#herogame3_buy2');
const herogame3_cart = document.querySelector('#herogame3_cart');
const herogame4_detail = document.querySelector('#herogame4_buy');
const herogame4_detail2 = document.querySelector('#herogame4_buy2');
const herogame4_cart = document.querySelector('#herogame4_cart');
const herogame5_detail = document.querySelector('#herogame5_buy');
const herogame5_detail2 = document.querySelector('#herogame5_buy2');
const herogame5_cart = document.querySelector('#herogame5_cart');

herogame1_detail.addEventListener('click', (event) => {
    window.open(`/details.html?id=${52}`, "_self");
})
herogame1_detail2.addEventListener('click', (event) => {
    window.open(`/details.html?id=${52}`, "_self");
})
herogame1_cart.addEventListener('click', (event) => {
    let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
    var holded2 = games.find(element => element.id == 52);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    }addToCart();
}, {once : true});
herogame2_detail.addEventListener('click', (event) => {
    window.open(`/details.html?id=${49}`, "_self");
})
herogame2_detail2.addEventListener('click', (event) => {
    window.open(`/details.html?id=${49}`, "_self");
})
herogame2_cart.addEventListener('click', (event) => {
    let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
    var holded2 = games.find(element => element.id == 49);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    }addToCart();
}, {once : true});
herogame3_detail.addEventListener('click', (event) => {
    window.open(`/details.html?id=${60}`, "_self");
})
herogame3_detail2.addEventListener('click', (event) => {
    window.open(`/details.html?id=${60}`, "_self");
})
herogame3_cart.addEventListener('click', (event) => {
    let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
    var holded2 = games.find(element => element.id == 60);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    }addToCart();
}, {once : true});
herogame4_detail.addEventListener('click', (event) => {
    window.open(`/details.html?id=${40}`, "_self");
})
herogame4_detail2.addEventListener('click', (event) => {
    window.open(`/details.html?id=${40}`, "_self");
})
herogame4_cart.addEventListener('click', (event) => {
    let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
    var holded2 = games.find(element => element.id == 40);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    }addToCart();
}, {once : true});
herogame5_detail.addEventListener('click', (event) => {
    window.open(`/details.html?id=${59}`, "_self");
})
herogame5_detail2.addEventListener('click', (event) => {
    window.open(`/details.html?id=${59}`, "_self");
})
herogame5_cart.addEventListener('click', (event) => {
    let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
    var holded2 = games.find(element => element.id == 59);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        
    }addToCart();
}, {once : true});
window.onload = generateGames(games);

import {
    games
} from "./games.js";

function createGame(gameImg, gameTitle, gamePrice, id, gameClass, gameTrailer, gameRating, gameGenre) {
    const gameContainer = document.querySelector('#details');

    const gameArticle = document.createElement('article');
    const gameTrailerSection = document.createElement('section');
    const gameTitleSection = document.createElement('section');
    const trailer = document.createElement('iframe');
    const buy = document.createElement('div');
    const cart = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const price = document.createElement('section');
    const rating = document.createElement('section');
    const genre = document.createElement('section');

    buy.innerHTML = "BUY NOW";
    cart.innerHTML = "Add to cart";
    img.setAttribute('src', gameImg);
    title.innerHTML = gameTitle;
    if (gamePrice == 0) {
        price.innerHTML = "FREE";
    } else {
        price.innerHTML = 'Price : ' + gamePrice + " RON";
    }
    rating.innerHTML = 'Rating : ' + gameRating + " ★★★★★";
    genre.innerHTML = 'Genres : ' + gameGenre;
    gameArticle.setAttribute('id', id);
    gameArticle.setAttribute('class', gameClass);
    gameTrailerSection.setAttribute('class', 'trailer');
    gameTitleSection.setAttribute('class', 'title');
    trailer.setAttribute('src', gameTrailer);
    buy.setAttribute('class', 'mainButton');
    buy.setAttribute('id', 'game_buy')
    cart.setAttribute('class', 'secondaryButton');

    gameArticle.appendChild(img);
    gameArticle.appendChild(price);
    gameArticle.appendChild(buy);
    gameArticle.appendChild(cart);
    gameArticle.appendChild(rating);
    gameArticle.appendChild(genre);
    gameTitleSection.appendChild(title);
    gameTrailerSection.appendChild(trailer);

    gameContainer.appendChild(gameTitleSection);
    gameContainer.appendChild(gameTrailerSection);
    gameContainer.appendChild(gameArticle);

    // Adaugare in cart
    cart.addEventListener('click', (event) => {
        let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
        let holded = event.target.parentElement.id;
        var holded2 = games.find(element => element.id == holded);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    } 
    
    cart.style.backgroundColor = 'black';
    cart.innerHTML = "Added to cart";

    }, {once : true});

}
function generateGames(gameList) {
    const urlParam = new URLSearchParams(window.location.search);
const idGame = urlParam.get('id');
    const gameContainer = document.querySelector('#details');
    gameContainer.innerHTML = '';
    const game = gameList.find((game) => {
        return game.id == idGame;
    }); 
    if(game){
        createGame(game.image, game.title, game.price, game.id, game.class, game.trailer, game.rating, game.genre);
    }
}
let holdArray = JSON.parse(window.localStorage.getItem('cart'));

// Modal
const modal_btn = document.querySelector('#game_buy');
modal_btn.addEventListener('click', (event) => {
    //Add single item to cart(kinda)
    if(holdArray < 1) {
        let cart_localestorage = JSON.parse(window.localStorage.getItem('cart'));
        let holded = event.target.parentElement.id;
        var holded2 = games.find(element => element.id == holded);
    if(cart_localestorage < 1) {
    cartHold.push(holded2);
    window.localStorage.setItem('cart', JSON.stringify(cartHold));
    }else {
        cart_localestorage.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cart_localestorage));
        addToCart();
    }
    }
    
})
modal_btn.addEventListener('click', (event) => {
    console.log(cartHold);
    let modal = document.getElementById("myModal");
    let close = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    close.onclick = function() {
        modal.style.display = "none";
    }
    let email = document.getElementById('modal_email');
    let email_hold = localStorage.getItem('email');
    let logare = localStorage.getItem('logged');
    if(logare) {
        email.innerHTML = '👤: ' + email_hold;
    }else {
        email.innerHTML = 'You are not logged in!'
    }
    function sum(gameList) {
        holdArray = JSON.parse(window.localStorage.getItem('cart'));
            let allPrice = holdArray.map(function(element){return element.price});
           let sum = 0;
        for (let i = 0; i < allPrice.length; i++) {
            sum += allPrice[i];
        }
        const totalPrice = document.querySelector('#game_price2');
        totalPrice.innerHTML = '';
        const price = document.createElement('h4');
        price.innerHTML = 'Price : ' + sum + ' RON';
        totalPrice.appendChild(price);
        const totalDiscount = document.querySelector('#game_discount2');
        totalDiscount.innerHTML = '';
        const discount = document.createElement('h4');
        discount.innerHTML = 'Discount : ' + 'No discount';
        totalDiscount.appendChild(discount);
        const totalTotal = document.querySelector('#game_total2');
        totalTotal.innerHTML = '';
        const total = document.createElement('h4');
        total.innerHTML = 'Total : ' + sum + ' RON';
        totalTotal.appendChild(total); 
    }
    sum();
});

// Thanks for buying...go to library
const modal_credit1 = document.getElementsByClassName('modal_box');
const modal_credit0 = document.getElementsByClassName('modal_box0');
const place_order_btn = document.getElementById('place_order');
const place_order_btn_inner = document.getElementById('final_buyBTN');
place_order_btn.innerHTML = 'PLACE ORDER'
let logare = localStorage.getItem('logged');
if(logare) {
    place_order_btn.addEventListener('click', (event) => {
    window.localStorage.setItem('library', JSON.stringify(holdArray));
    window.localStorage.removeItem('cart');
    place_order_btn_inner.innerHTML = 'GO TO LIBRARY'
    modal_credit1[0].style.display = "none";
    modal_credit0[0].style.display = "block";
    place_order_btn_inner.addEventListener('click', (event) => {
        window.open(`/library.html`, "_self");
    })
})
}else {
    place_order_btn.innerHTML = 'Log in!'
    place_order_btn.addEventListener('click', (event) => {
        window.open(`/sign_in.html`, "_self");
    })
}

//Deschidere/Inchidere metode de plata
document.getElementById("credit_input").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        let credit_bigger_content = document.querySelector('.credit_bigger_container');
        credit_bigger_content.style.display =  "block";
        let paypal_bigger_content = document.querySelector('.paypal_bigger_container');
        paypal_bigger_content.style.display =  "none";
    }
});

document.getElementById("paypal_input").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        let paypal_bigger_content = document.querySelector('.paypal_bigger_container');
        paypal_bigger_content.style.display =  "block";
        let credit_bigger_content = document.querySelector('.credit_bigger_container');
        credit_bigger_content.style.display =  "none";
        
    }
});
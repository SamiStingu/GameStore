let holdArray = JSON.parse(window.localStorage.getItem('cart'));
window.onload = generateGames(JSON.parse(window.localStorage.getItem('cart')));



// Generare joc in cart
function generateGames(gameList) {
    const gameContainer = document.querySelector('#cart_games');
    gameContainer.innerHTML = '';
    for (const game of gameList) {
        createGame(game.image, game.title, game.price, game.class, game.id);
    }
}


// Creare articol in cart
function createGame(gameImg, gameTitle, gamePrice, gameClass, gameId) {
const gameContainer = document.querySelector('#cart_games');
const removeAll = document.querySelector('#remove_title')
const gameArticle = document.createElement('article');
const cart_image_container = document.createElement('div');
const cart_details_container = document.createElement('div');
const img = document.createElement('img');
const title = document.createElement('h4');
const price = document.createElement('div');
const remove = document.createElement('div');

title.innerHTML = gameTitle;
if (gamePrice == 0) {
    price.innerHTML = "FREE";
} else {
    price.innerHTML = gamePrice + " RON";
}
img.setAttribute('src', gameImg);
gameArticle.setAttribute('class', gameClass);
cart_details_container.setAttribute('id', gameId);
remove.setAttribute('class', 'removeButton');
remove.innerHTML = 'Remove game';

gameContainer.appendChild(gameArticle); 
gameArticle.appendChild(cart_image_container);
gameArticle.appendChild(cart_details_container);
cart_image_container.appendChild(img);
cart_image_container.appendChild(title);
cart_details_container.appendChild(price);
cart_details_container.appendChild(remove);

// Remove from cart
remove.addEventListener('click', (event) => {
    const thisGameId = event.target.parentElement.id;
    let filtered = holdArray.filter(function(game) {return game.id != thisGameId})
    window.localStorage.removeItem('cart');
    window.localStorage.setItem('cart', JSON.stringify(filtered));
    location.reload();
})


removeAll.addEventListener('click', (event) => {
    window.localStorage.removeItem('cart');
    location.reload();
})

}

// Calculare total cart
function sum(gameList) {
    let allPrice = holdArray.map(function(element){return element.price});
    let sum = 0;
    for (let i = 0; i < allPrice.length; i++) {
        sum += allPrice[i];
    }
    const totalPrice = document.querySelector('#game_price');
    const price = document.createElement('h4');
    price.innerHTML = 'Price : ' + sum + ' RON';
    totalPrice.appendChild(price);
    const totalDiscount = document.querySelector('#game_discount');
    const discount = document.createElement('h4');
    discount.innerHTML = 'Discount : ' + 'No discount';
    totalDiscount.appendChild(discount);
    const totalTotal = document.querySelector('#game_total');
    const total = document.createElement('h4');
    total.innerHTML = 'Total : ' + sum + ' RON';
    totalTotal.appendChild(total);
}
sum();

// Modal
const modal_btn = document.querySelector('#game_buy');
modal_btn.addEventListener('click', (event) => {
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



    function sum(gameList) {
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



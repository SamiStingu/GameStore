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
    window.localStorage.removeItem('cart');
    // location.reload();
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

const place_order_btn = document.getElementById('place_order');
place_order_btn.addEventListener('click', (event) => {
    window.localStorage.setItem('library', JSON.stringify(holdArray));
    console.log(holdArray);
})


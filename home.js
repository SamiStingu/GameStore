window.onload = resizeItems()
window.onload = addToCart();
import {
    games
} from "./games.js";


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
// Creare articol carousel1
function createGame(gameImg, gameTitle, gamePrice, id, gameClass) {
    const gameContainer = document.querySelector('.game_carrousel_1');

    const gameArticle = document.createElement('article');
    const cart = document.createElement('div');
    const details = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const price = document.createElement('div');

    cart.innerHTML = "Add to cart";
    details.innerHTML = "See details";
    img.setAttribute('src', gameImg);
    title.innerHTML = gameTitle;
    if (gamePrice == 0) {
        price.innerHTML = "FREE";
    } else {
        price.innerHTML = gamePrice + " RON";
    }
    gameArticle.setAttribute('id', id);
    gameArticle.setAttribute('class', gameClass);
    cart.setAttribute('class', 'cartBtn');
    details.setAttribute('class', 'detailsBtn');

    gameArticle.appendChild(cart);
    gameArticle.appendChild(details);
    gameArticle.appendChild(img);
    gameArticle.appendChild(title);
    gameArticle.appendChild(price);

    gameContainer.appendChild(gameArticle);

    details.addEventListener('click', (event) => {
        const gameID = event.target.parentElement.id;
        window.open(`/details.html?id=${40}`, "_self");
    })
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
        
    }
    addToCart();
    cart.style.backgroundColor = '#2A2A2A';
    cart.innerHTML = "Added to cart";

    }, {once : true});
}


// Generare lista jocuri carousel 1
function generateGames(gameList) {
    const gameContainer = document.querySelector('.game_carrousel_1');
    gameContainer.innerHTML = '';
    for (const game of gameList) {
        createGame(game.image, game.title, game.price, game.id, game.class);
    }
}

// Creare articol carousel2
function createGame2(gameImg, gameTitle, gamePrice, id, gameClass) {
    const gameContainer = document.querySelector('.game_carrousel_2');

    const gameArticle = document.createElement('article');
    const cart = document.createElement('div');
    const details = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const price = document.createElement('div');

    cart.innerHTML = "Add to cart";
    details.innerHTML = "See details";
    img.setAttribute('src', gameImg);
    title.innerHTML = gameTitle;
    if (gamePrice == 0) {
        price.innerHTML = "FREE";
    } else {
        price.innerHTML = gamePrice + " RON";
    }
    gameArticle.setAttribute('id', id);
    gameArticle.setAttribute('class', gameClass);
    cart.setAttribute('class', 'cartBtn');
    details.setAttribute('class', 'detailsBtn');

    gameArticle.appendChild(cart);
    gameArticle.appendChild(details);
    gameArticle.appendChild(img);
    gameArticle.appendChild(title);
    gameArticle.appendChild(price);

    gameContainer.appendChild(gameArticle);

    details.addEventListener('click', (event) => {
        const gameID = event.target.parentElement.id;
        window.open(`/details.html?id=${gameID}`, "_self");
    })
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
    cart.style.backgroundColor = '#2A2A2A';
    cart.innerHTML = "Added to cart";

    }, {once : true});
}


// Generare lista jocuri carousel 2
function generateGames2(gameList) {
    const gameContainer = document.querySelector('.game_carrousel_2');
    gameContainer.innerHTML = '';
    for (const game of gameList) {
        createGame2(game.image, game.title, game.price, game.id, game.class);
    }
}


// Filtrare prin search
const filterGames = document.querySelector('#filter_search');
if(filterGames) {
    filterGames.addEventListener('input', (event) => {
    const input = event.target.value.toLocaleLowerCase();

    const filteredGames = games.filter((game) => {
        return game.title.toLocaleLowerCase().includes(input);
    })
    generateGames(filteredGames);
})
}


// Responsive carousel 1
function resizeItems() {
        let prevBtn =document.querySelector('#prevBtn');
        let nextBtn =document.querySelector('#nextBtn');
        let contor = 0;
    if(window.innerWidth > 2520) {
        generateGames(games.slice(50, 58));
        generateGames2(games.slice(32, 40));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(21, 29))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 58))
        })
    }else if(window.innerWidth > 2220) {
        generateGames(games.slice(50, 57));
        generateGames2(games.slice(32, 39));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(21, 28))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 57))
        })
    }else if(window.innerWidth > 1920) {
        generateGames(games.slice(50, 56));
        generateGames2(games.slice(32, 38));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(21, 27))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 56))
        })
    }else if(window.innerWidth > 1620) {
       generateGames(games.slice(50, 55));
       generateGames2(games.slice(32, 37));
       nextBtn.addEventListener('click', () => {
        contor++;
        generateGames(games.slice(21, 26))
    })
    prevBtn.addEventListener('click', () => {
        contor--;
        generateGames(games.slice(50, 55))
    })
    }else if(window.innerWidth > 1320) {
        generateGames(games.slice(50, 54));
        generateGames2(games.slice(32, 36));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(21, 25))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 54))
        })
    }else if(window.innerWidth > 1020) {
        generateGames(games.slice(50, 53));
        generateGames2(games.slice(32, 35));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(41, 44))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 53))
        })
    }else if(window.innerWidth > 720) {
        generateGames(games.slice(50, 52));
        generateGames2(games.slice(32, 34));
        nextBtn.addEventListener('click', () => {
            contor++;
            generateGames(games.slice(41, 43))
        })
        prevBtn.addEventListener('click', () => {
            contor--;
            generateGames(games.slice(50, 52))
        })
    }else {generateGames(games.slice(50, 51));
        generateGames2(games.slice(32, 33));}
}
window.addEventListener('resize', resizeItems);



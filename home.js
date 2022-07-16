window.onload = generateGames(games.slice(0, 8));
import {
    games
} from "./games.js";


// Creare articol
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
        window.open(`/details.html?id=${gameID}`, "_self");
    })
    cart.addEventListener('click', (event) => {
        gameArticle.classList.add('cartHold');
    })
}


// Generare lista jocuri
function generateGames(gameList) {
    const gameContainer = document.querySelector('.game_carrousel_1');
    gameContainer.innerHTML = '';
    for (const game of gameList) {
        createGame(game.image, game.title, game.price, game.id, game.class);
    }
}

// Usefull for future features
    // gameList.forEach( game => console.log(game));
    // gameList
    // .filter(game => game.price > 100)
    // .map(game => game.title)
    // .forEach(title => console.log(title));
    // games.sort(a,b => a.rating - b.rating > 0 ? true : false)




// Filtrare prin search
const filterGames = document.querySelector('#filter_search');
filterGames.addEventListener('input', (event) => {
    const input = event.target.value.toLocaleLowerCase();

    const filteredGames = games.filter((game) => {
        return game.title.toLocaleLowerCase().includes(input);
    })
    generateGames(filteredGames);
})
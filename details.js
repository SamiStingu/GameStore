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

}
function generateGames(gameList) {
    const urlParam = new URLSearchParams(window.location.search);
const idGame = urlParam.get('id');
    const gameContainer = document.querySelector('#details');
    gameContainer.innerHTML = '';
    const game = gameList.find((game) => {
        return game.id == idGame;
    }); 
    console.log(game);
    if(game){
        createGame(game.image, game.title, game.price, game.id, game.class, game.trailer, game.rating, game.genre);
    }
}
let libraryArray = JSON.parse(window.localStorage.getItem('library'));
window.onload = sumArrays();
window.onload = generateGames(libraryArray);
window.onload = generateGames2(library_games.slice(0, 12));

import {
    library_games
} from "./library_games.js";


// Creare articol
function createGame(gameImg, gameTitle, gamePrice, id, gameClass) {
    const gameContainer = document.querySelector('#game_section');

    const gameArticle = document.createElement('article');
    const cart = document.createElement('div');
    const details = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const price = document.createElement('div');

    cart.innerHTML = "Download";
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
    // gameArticle.appendChild(price);

    gameContainer.appendChild(gameArticle);


    // Redirectionare spre detalii produs
    details.addEventListener('click', (event) => {
        const gameID = event.target.parentElement.id;
        window.open(`/details.html?id=${gameID}`, "_self");
    })

}


// Generare lista jocuri
function generateGames(gameList) {
    const gameContainer = document.querySelector('#game_section');
    gameContainer.innerHTML = '';
    for (const game of gameList) {
        createGame(game.image, game.title, game.price, game.id, game.class);
    }
}



// Creare articol2
function createGame2(gameImg, gameTitle, gamePrice, id, gameClass) {
    const gameContainer = document.querySelector('#game_section2');

    const gameArticle = document.createElement('article');
    const cart = document.createElement('div');
    const details = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    // const price = document.createElement('div');

    cart.innerHTML = "Download";
    details.innerHTML = "See details";
    img.setAttribute('src', gameImg);
    title.innerHTML = gameTitle;
    // if (gamePrice == 0) {
    //     price.innerHTML = "FREE";
    // } else {
    //     price.innerHTML = gamePrice + " RON";
    // }
    gameArticle.setAttribute('id', id);
    gameArticle.setAttribute('class', gameClass);
    cart.setAttribute('class', 'cartBtn');
    details.setAttribute('class', 'detailsBtn');

    gameArticle.appendChild(cart);
    gameArticle.appendChild(details);
    gameArticle.appendChild(img);
    gameArticle.appendChild(title);
    // gameArticle.appendChild(price);

    gameContainer.appendChild(gameArticle);


    // Redirectionare spre detalii produs
    details.addEventListener('click', (event) => {
        const gameID = event.target.parentElement.id;
        window.open(`/details.html?id=${gameID}`, "_self");
    })

}


// Generare lista jocuri2
function generateGames2(library_games) {
    const gameContainer = document.querySelector('#game_section2');
    gameContainer.innerHTML = '';
    for (const game of library_games) {
        createGame2(game.image, game.title, game.price, game.id, game.class);
    }
}

//Generare lista all my games
function sumArrays() {
    if(libraryArray) 
    for(i=0; i < libraryArray.length; i++) {
        library_games.push(libraryArray[i]);
    }
    generateGames2(library_games.slice(0, 12));
}

// Sortare
const sortGames = document.querySelector('#sorting');
sortGames.addEventListener('input', (event) => {
    const input = event.target.value;

    let sortedGames;
    switch (input) {
        case 'asc':
            sortedGames = library_games.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'dsc':
            sortedGames = library_games.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price_asc':
            sortedGames = library_games.sort((a, b) => a.price - b.price);
            break;
        case 'price_dsc':
            sortedGames = library_games.sort((a, b) => b.price - a.price);
            break;
        default:
            sortedGames = library_games;
    }
    generateGames2(sortedGames);

})

//Paginare all my games
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');
let contor = 0;

nextBtn.addEventListener('click', () => {
    contor++;
    generateGames2(library_games.slice(contor * 12, (contor * 12) + 12))
    if((contor * 12) > games.length) {
        nextBtn.setAttribute('disabled', true)
        prevBtn.removeAttribute('disabled');
    }
})

prevBtn.addEventListener('click', () => {
    contor--;
    generateGames2(library_games.slice(contor * 12, (contor * 12) + 12))
    if(contor <= 0) {
        prevBtn.setAttribute('disabled', true)
        nextBtn.removeAttribute('disabled');
    }
})

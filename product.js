
window.onload = generateGames(games.slice(0, 12));
import {
    games
} from "./games.js";



// Creare articol
function createGame(gameImg, gameTitle, gamePrice, id, gameClass) {
    const gameContainer = document.querySelector('#game_section');

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


    // Redirectionare spre detalii produs
    details.addEventListener('click', (event) => {
        const gameID = event.target.parentElement.id;
        window.open(`/details.html?id=${gameID}`, "_self");
    })

    // Adaugare in cart
    cart.addEventListener('click', (event) => {
        let holded = event.target.parentElement.id;
        var holded2 = games.find(element => element.id == holded);
        cartHold.push(holded2);
        window.localStorage.setItem('cart', JSON.stringify(cartHold));
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


// Usefull for future features
    // gameList.forEach( game => console.log(game));
    // gameList
    // .filter(game => game.price > 100)
    // .map(game => game.title)
    // .forEach(title => console.log(title));
    // games.sort(a,b => a.rating - b.rating > 0 ? true : false)




// Filtrare prin search
const filterGames = document.querySelector('#filter_search');
const urlParam = new URLSearchParams(window.location.search);
const searched = urlParam.get('searched');
filterGames.value = searched;
function generateSearchedGames() {
    const filtered = games.filter((game) => {
        return game.title.toLocaleLowerCase().includes(searched);
    })
    generateGames(filtered);
}
if (filterGames.value = searched){generateSearchedGames();}

filterGames.addEventListener('input', (event) => {
    const input = event.target.value.toLocaleLowerCase();
    const filteredGames = games.filter((game) => {
        return game.title.toLocaleLowerCase().includes(input);
    })
    generateGames(filteredGames);
})


// Sortare
const sortGames = document.querySelector('#sorting');
sortGames.addEventListener('input', (event) => {
    const input = event.target.value;

    let sortedGames;
    switch (input) {
        case 'asc':
            sortedGames = games.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'dsc':
            sortedGames = games.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price_asc':
            sortedGames = games.sort((a, b) => a.price - b.price);
            break;
        case 'price_dsc':
            sortedGames = games.sort((a, b) => b.price - a.price);
            break;
        default:
            sortedGames = games;
    }
    generateGames(sortedGames);

})


// Filtrare by price
const sortPrice = document.getElementById('content_price');
sortPrice.addEventListener('click', (event) => {
    const input = event.target.textContent;
    let sortedGames;
    switch (input.trim().toUpperCase()) {
        case 'FREE':
            sortedGames = games.filter((games) =>
                games.price == 0);
            break;
        case 'UNDER 40 RON':
            sortedGames = games.filter((games) =>
                games.price < 40);
            break;
        case 'UNDER 100 RON':
            sortedGames = games.filter((games) =>
                games.price < 100);
            break;
        case '100 RON AND ABOVE':
            sortedGames = games.filter((games) =>
                games.price > 99);
            break;
    }
    generateGames(sortedGames);
})
// Filtrare by genre
const sortGenre = document.getElementById('content_genre');
sortGenre.addEventListener('click', (event) => {
    const input = event.target.textContent;
    let sortedGames;
    switch (input.trim().toUpperCase()) {
        case 'ACTION':
            sortedGames = games.filter((games) =>
            games.genre.includes('action'));
            break;
        case 'ADVENTURE':
            sortedGames = games.filter((games) =>
            games.genre.includes('adventure'));
            break;
        case 'EXPLORATION':
            sortedGames = games.filter((games) =>
            games.genre.includes('exploration'));
            break;
        case 'INDIE':
            sortedGames = games.filter((games) =>
            games.genre.includes('indie'));
            break;
        case 'STEALTH':
            sortedGames = games.filter((games) =>
            games.genre.includes('stealth'));
            break;
        case 'PARTY':
            sortedGames = games.filter((games) =>
            games.genre.includes('party'));
            break;
        case 'HORROR':
            sortedGames = games.filter((games) =>
            games.genre.includes('horror'));
            break;
        case 'PUZZLE':
            sortedGames = games.filter((games) =>
            games.genre.includes('puzzle'));
            break;
        case 'STRATEGY':
            sortedGames = games.filter((games) =>
            games.genre.includes('strategy'));
            break;
        case 'SPORTS':
            sortedGames = games.filter((games) =>
            games.genre.includes('sports'));
            break;
    }
    generateGames(sortedGames);
})
// Sortare by rating
const sortRating = document.getElementById('content_rating');
sortRating.addEventListener('click', (event) => {
    const input = event.target.textContent;
    let sortedGames;
    switch (input.trim().toUpperCase()) {
        case 'BEST RATED':
            sortedGames = games.sort((a, b) => b.rating - a.rating);
            break;
        case 'WORST RATED':
            sortedGames = games.sort((a, b) => a.rating - b.rating);
            break;
    }
    generateGames(sortedGames);
})

// Paginare
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');
// const firstPg = games.slice(0, 16);
// const secondPg = games.slice(16);

// nextBtn.addEventListener('click', () => {
//     generateGames(secondPg);
//     nextBtn.setAttribute('disabled', true)
//     prevBtn.removeAttribute('disabled');
// })

// prevBtn.addEventListener('click', () => {
//     generateGames(firstPg);
//     prevBtn.setAttribute('disabled', true)
//     nextBtn.removeAttribute('disabled');
// })
let contor = 0;

nextBtn.addEventListener('click', () => {
    contor++;
    generateGames(games.slice(contor * 12, (contor * 12) + 12))
    if((contor * 12) > games.length) {
        nextBtn.setAttribute('disabled', true)
        prevBtn.removeAttribute('disabled');
    }
})

prevBtn.addEventListener('click', () => {
    contor--;
    generateGames(games.slice(contor * 12, (contor * 12) + 12))
    if(contor <= 0) {
        prevBtn.setAttribute('disabled', true)
        nextBtn.removeAttribute('disabled');
    }
})
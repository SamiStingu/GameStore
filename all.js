

// Search
const searchInput = document.getElementById('header_search');
const searchBtn = document.getElementById('header_search_btn');
searchBtn.addEventListener('click', (event) => {
    localStorage.setItem('gameSearched', searchInput.value);
    gameSearched = localStorage.getItem('gameSearched');
    window.open(`/product.html?searched=${gameSearched}`, "_self")
})

window.onload = greet();
//Greet
function greet() {
    const urlParam = new URLSearchParams(window.location.search);
    const userName = urlParam.get('name');
    let register_box = document.getElementById('register_name');
    let login_box = document.getElementById('login_logout');

    register_box.innerHTML = 'Register';
    login_box.innerHTML = 'Log In';
    
    if(userName.typeof = 'string'){
    register_box.innerHTML = 'Hello ' + userName;
    const blue = document.getElementById('register_blue')
    blue.style.backgroundColor = '#0074E4';
    login_box.innerHTML = 'Log Out';
    }
    login_box.addEventListener('click', (event) => {
        window.open(`/home.html`, "_blank");
    })
}
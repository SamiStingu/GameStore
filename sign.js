// window.onload = greet();

//Sign up
function store() {
    let Fname = document.getElementById('first-name');
    let Lname = document.getElementById('last-name');
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    // let lowerCase = /[a-z]/g;
    // let upperCase = /[A-Z]/g;
    // let lowerCase = /[0-9]/g;
    let error = document.getElementById('error_message')

    let Fname_error = document.getElementById('first-name-box');
    let Lname_error = document.getElementById('last-name-box');
    let email_error = document.getElementById('email-box');
    let pw_error = document.getElementById('password-box');

    if(Fname.value.length == 0){
        error.innerHTML = 'Please introduces your First Name !'
        Fname_error.setAttribute('class', 'wrong');
    }else if(Lname.value.length == 0){
        Fname_error.removeAttribute('class');
        error.innerHTML = 'Please introduces your Last Name !'
        Lname_error.setAttribute('class', 'wrong');
    }else if(email.value.length == 0){
        Fname_error.removeAttribute('class');
        Lname_error.removeAttribute('class');
        error.innerHTML = 'Please introduces your Email !'
        email_error.setAttribute('class', 'wrong');
    }else if(pw.value.length == 0){
        Fname_error.removeAttribute('class');
        Lname_error.removeAttribute('class');
        email_error.removeAttribute('class');
        error.innerHTML = 'Please introduces a Password !'
        pw_error.setAttribute('class', 'wrong');
    }else if(pw.value.length < 8){
        Fname_error.removeAttribute('class');
        Lname_error.removeAttribute('class');
        email_error.removeAttribute('class');
        error.innerHTML = 'Please introduces a strong Password !'
        pw_error.setAttribute('class', 'wrong');
    }else{
    localStorage.setItem('email', email.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('name', Lname.value);
    // alert('Your account has been succesfully created!');
    window.open('sign_in.html', "_blank");}
}

let sign_up = document.getElementById('submit');
sign_up.addEventListener('click', (event) => {
    store();
})

//Sign in
function check() {
    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('pw');
    let storedName = localStorage.getItem('name');
    localStorage.setItem('logged', 'yes');
    let error = document.getElementById('error_message');

    let signinEmail = document.getElementById('stored-email');
    let signinPw = document.getElementById('stored-password');

    if(signinEmail.value == storedEmail && signinPw.value == storedPw){
        window.open(`/home.html`, "_blank");
    }else{
        error.innerHTML = 'Incorrect email or password !';
    }
}

let sign_in = document.getElementById('submit');
sign_in.addEventListener('click', (event) => {
    check();
})

//Hello <name>
// function greet() {
//     const urlParam = new URLSearchParams(window.location.search);
//     const userName = urlParam.get('name');
//     let register_box = document.getElementById('register_name');
//     let login_box = document.getElementById('login_logout');

//     register_box.innerHTML = 'Register';
//     login_box.innerHTML = 'Log In';
    
//     if(userName.typeof = 'string'){
//     register_box.innerHTML = 'Hello ' + userName;
//     const blue = document.getElementById('register_blue')
//     blue.style.backgroundColor = '#0074E4';
//     login_box.innerHTML = 'Log Out';
//     }
//     login_box.addEventListener('click', (event) => {
//         window.open(`/home.html`, "_blank");
//     })
// }
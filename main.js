var btn = document.getElementById('div1');
var logInBtn = document.getElementById('logIn');
var registerBtn = document.getElementById('register');
var logInForm = document.getElementById('logInForm');
var registerForm = document.getElementById('registerForm');


function leftClick() {
	btn.style.left = '0';
    logInBtn.style.color= "white";
    registerBtn.style.color = "rgb(46, 46, 46)";
    logInForm.style.display= "block";
    registerForm.style.display= "none";

}

function rightClick() {
    btn.style.left = '110px';
    registerBtn.style.color = "white";
    logInBtn.style.color= "rgb(46, 46, 46)";
    logInForm.style.display= "none";
    registerForm.style.display= "block";
    
}


const registerForm = document.getElementById('registerForm');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

registerForm.addEventListener('submit', event => {
  event.preventDefault();

const validation= ()=> {
  const para = document.createElement("p");
  registerForm.appendChild(para);

if (email === "") {
  para.textContent = "please enter an email address";
}

else if (!regex.test(email)) {
  para.textContent = 'please enter a vaild email address';

}

else if (password === '' || confirmPassword === '') {
  para.textContent = 'please enter a password'
}
else if (password !== confirmPassword) {
  para.textContent = 'passwords you have entered dont match!';
}
else {
  para.textContent = "";
}
}
})

module.exports = validation;

function postData(url, cb, data = {}) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'    }
  })
  .then(function(response){
    return response.json();
  })
  .then function(data) {
    console.log(data);
  }
}

const button = document.getElementById('submitButton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  var username = document.getElementById('sname').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  postData('/register', {
    sname,
    email,
    password,
    confirmPassword
  })
})

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
  const username = document.getElementById('sname').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  postData('/register', {
    sname,
    email,
    password,
    confirmPassword
  })
})

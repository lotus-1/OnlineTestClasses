function postData(url,data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'    }
  })
  .then(function(response){
    return response.json();
  })
  .then (function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
}

document.getElementById('submitButton').addEventListener('click', function(e) {
  console.log('Inside click');
  e.preventDefault();
  var username = document.getElementById('sname').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  console.log(username, email, pass, confirmPassword);
  postData('/register', {
    username,
    email,
    pass,
    confirmPassword
  })
})

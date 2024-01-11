// Create account

// Show password

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    
    var x = document.getElementById("confirmPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  function display() {
    // const pass = document.getElementById("password").value;
    // const confirm = document.getElementById("confirmPassword").value;
    
    
    // if (pass == "" || confirm == "") {
    //   alert('Input is empty');
    // }
    // else if ( confirm !== pass) {
    //   alert('No match');
    // }
    // else{
    //   alert('LogIn Successful');
    // }
  }

  function validateForm() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var confirm = document.getElementById('confirmPassword').value;

    if (name === '' || email === '' || pass === ''|| confirm === '') {
      document.getElementById('result5').innerHTML = "Please input all fields";
      return false;
    }
    else if (pass.length < 8) {
      document.getElementById('result5').innerHTML = "Password must be 8 characters long";
      return false;
    }

    else if(confirm !== pass){
      document.getElementById('result5').innerHTML = "Password does not match!";
      return false;
    }
    else{
      document.getElementById('pop').style.display = "block";
    }
    
    document.getElementById('myForm').reset();
  }





// Log In

document.getElementById('loginForm').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();
  var valid = true;

 
  document.getElementById('usernameError').innerHTML = '';
  document.getElementById('passwordError').innerHTML = '';

 
  if (username === '') {
    document.getElementById('usernameError').innerHTML = 'Username is required';
    valid = false;
  }


  if (password === '') {
    document.getElementById('passwordError').innerHTML = 'Password is required';
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); 
  }
  
});



// Show password
function show() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



// scroll button



  
  
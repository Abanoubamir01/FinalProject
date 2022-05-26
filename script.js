function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function check() {
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;

  if (phone == "") {
    alert("fill the phone");
    return false;
  }
  if (!phone.match(/^[0-1]{2}[0-9]{9}$/)) {
    alert("only 11 number 01xxxxxxxxx");
    //    document.getElementById("message00").innerHTML = "**telephone must be 11 number only!";
    return false;
  }
  if (password == "") {
    //    document.getElementById("message1").innerHTML = "**Fill the password";
    alert("fill the password");

    return false;
  }
  if (password.charAt(0) != password.charAt(0).toUpperCase()) {
    alert(" password not start with uppercase letter");
    return false;
  }

  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/)) {
    alert("password must include 8 characters only, one special character atleast, include one digit and no space ");
    return false;
  }
}

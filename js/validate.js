function registration() {
  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var pwd = document.getElementById("password").value;
  var cpwd = document.getElementById("password2").value;
  var check = document.getElementById("check");

  var pwd_expression =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var tel = /^(\+91[\-\s]?)?[0]?(91)?[1-9]\d{9}$/;
  var cap = /^(?=.*?[A-Z])/;
  var small = /^(?=.*?[a-z])/;
  var num = /(?=.*?[0-9])/;
  var spcl = /(?=.*?[#?!@$%^&*-])/;

  if (name == "") {
    alert("Please enter your name");
  } else if (name.length < 6 || name.length > 16) {
    alert("Name must be between 6 to 15 characters long.");
     console.log.autofocus; 
  } else if (!letters.test(name)) {
    alert("User Name required only alphabet characters");
  } else {
    if (email == "") {
      alert("Please enter your user email id");
    } else if (!filter.test(email)) {
      alert("Invalid email");
    } else {
      if (phone == "") {
        alert("Please enter the phone number.");
      } else if (!tel.test(phone)) {
        alert("Phone number must be of 10 digits starting from 1 to 9");
      } else {
        if (pwd == "") {
          alert("Please enter Password");
        }  else if (!cap.test(pwd)) {
          alert("1 Upper case is required in Password field");
        } else if (!small.test(pwd)) {
          alert("1 Lower case is required in Password field");
        } else if (!num.test(pwd)) {
          alert("1 Number is required in Password field");
        } else if (!spcl.test(pwd)) {
          alert("1 Special character is required in Password field");
        } else if (document.getElementById("password").value.length < 6 && document.getElementById("password").value.length > 12) {
          alert("Password  length must be  6 to 12");
        } else {
          if (cpwd == "") {
            alert("Enter Confirm Password");
          } else if (cpwd != pwd) {
            alert("Password not Matched");
            location.reload();
          } else {
            if (!check.checked) {
              alert("Please tick the checkbox.");
            } else {
              alert("Checking Details");
              // window.location.href = "controllerUserData.php";
            }
          }
        }
      }
    }
  }
}
function clearFunc() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password2").value = "";
}

// function registration1() {
//   var pwd = document.getElementsByName("password").value;
//   var cpwd = document.getElementsByName("cpassword").value;

//   var cap = /^(?=.*?[A-Z])/;
//   var small = /^(?=.*?[a-z])/;
//   var num = /(?=.*?[0-9])/;
//   var spcl = /(?=.*?[#?!@$%^&*-])/;

//   if (pwd == "") {
//       alert("Please enter Password");
//   } else if (!cap.test(pwd)) {
//       alert("1 Upper case is required in Password field");
//   } else if (!small.test(pwd)) {
//       alert("1 Lower case is required in Password field");
//   } else if (!num.test(pwd)) {
//       alert("1 Number is required in Password field");
//   } else if (!spcl.test(pwd)) {
//       alert("1 Special character is required in Password field");
//   } else if (document.getElementByName("password").value.length < 6 && document.getElementByName("password").value.length > 12) {
//       alert("Password  length must be  6 to 12");
//   } else {
//       if (cpwd == "") {
//           alert("Enter Confirm Password");
//       } else if (cpwd != pwd) {
//           alert("Password not Matched");
//           location.reload();
//       } else {
//           alert("Your password changed. Now you can login with your new password");
//       }
//   }
// }
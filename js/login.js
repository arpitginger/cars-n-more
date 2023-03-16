function loginvalid() {
  // var email = document.getElementById("email").value;
  // var pwd = document.getElementById("password").value;
  var check = document.getElementById("check");

  // var filter =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // var cap = /^(?=.*?[A-Z])/;
  // var small = /^(?=.*?[a-z])/;
  // var num = /(?=.*?[0-9])/;
  // var spcl = /(?=.*?[#?!@$%^&*-])/;

  // if (email == "") {
  //   alert("Please enter your user email id");
  // } else if (!filter.test(email)) {
  //   alert("Invalid email");
  // } else {
  //   if (pwd == " ") {
  //     alert("Please enter Password");
  //   } else if (!cap.test(pwd)) {
  //     alert("1 Upper case is required in Password field");
  //   } else if (!small.test(pwd)) {
  //     alert("1 Lower case is required in Password field");
  //   } else if (!num.test(pwd)) {
  //     alert("1 Number is required in Password field");
  //   } else if (!spcl.test(pwd)) {
  //     alert("1 Special character is required in Password field");
  //   } else if (document.getElementById("password").value.length < 6 && document.getElementById("password").value.length > 12) {
  //     alert("Password  length must be  6 to 12");
  //   } else {
      if (!check.checked) {
        alert("Please tick the checkbox.");
      } else {
        alert("Checking credentials");
        // window.location.replace = "controllerUserData.php";
      }
    }
//   }
// }
function forgot() {
  window.location.href = "forgot.php";
}

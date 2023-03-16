var form = document.getElementById("userform");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  var xhr = new XMLHttpRequest(); 
  xhr.open('POST', 'submit.php', true); 
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) { 
      console.log(xhr.responseText); 
    }
  };
  var formData = new FormData(form); 
  xhr.send(formData); 
});
function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;
  var birthdate = new Date(birthdateInput);
  var today = new Date();
  
  var age = today.getFullYear() - birthdate.getFullYear();
  var month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  
  var result = "You are " + age + " years old.";
  document.getElementById("result").innerText = result;
}
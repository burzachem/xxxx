var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    
var clientaa = document.getElementById("username").value;
var clientaaa = document.getElementById("password").value;
    
    
if ( username == username && password == password)

{
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

const clienta = [{
username: "mike",
password: "1234"
  },
    {
username: "jone",
password: "1234"
  }
];
    
    






   
console.log(client);
client.prop = 123;

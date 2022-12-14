var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function login(){
    var username = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("senha").value;
    if ( username == "Maoly" && email== "Maoly@gmail.com" && password == "123456"){
        alert ("Login successfully");
        window.location = "pag-principal.html";
        return false;
    } else{
    
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
        document.getElementById("usuario").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("botao").disabled = true;
        return false;
    }
    }
}
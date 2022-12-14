function login(){
    var user, email, password

    user = document.getElementById('usuario').value;
    email = document.getElementById('email').value;
    password = document.getElementById('senha').value;

    if (user == ' ' && email == ' ' && password == ' '){
        alert('início de sessão')
        window.location = "pag-principal.html";
    } else{
        alert(' Usuario invalid')
    }
}
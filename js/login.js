function login(){
    var user, email, password

    user = document.getElementById('usuario').value;
    email = document.getElementById('email').value;
    password = document.getElementById('senha').value;

    if (user == 'teste' && email == 'test@gmail.com' && password == '12345'){
        alert('início de sessão')
        window.location = "pag-principal.html";
    } else{
        alert(' Usuario invalid')
    }
}
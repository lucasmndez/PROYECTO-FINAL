function noEspacios(event) {
    if (event.keyCode === 32) { event.preventDefault(); }
}

function verificarPass() {
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    var mensaje = document.getElementById("mensaje");

    if (password1 !== password2) {
        mensaje.textContent = "Las contraseñas no coinciden";
    } else {
        mensaje.textContent = "";
    }
    
}
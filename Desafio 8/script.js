function validar() {
    var patron = /^[a-xA-Z0-9-_\.]+@[a-zA-z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/gm;
    var valor = document.getElementById("email").value;
    if(patron.test(valor)){
        alert ("Su direccion demail es correcta");
    }else {
        alert ("Por favor vuela a escribir su Email");
    }
}
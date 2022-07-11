var items = document.querySelectorAll('.invitado');
    
var totalEdades = 0;

for(var i = 0; i < items .length; i++) {
    var edad = items[i].querySelector('.edad').textContent;
    totalEdades +=parseInt(edad);
}

document.querySelector('.total').textContent = totalEdades;
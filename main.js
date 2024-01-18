const form = document.getElementById('form-numerico');

document.getElementById('form-numerico').addEventListener('submit', function(event) {
    event.preventDefault();
    var CampoA = parseFloat(document.getElementById('CampoA').value);
    var CampoB = parseFloat(document.getElementById('CampoB').value);
    if (CampoB > CampoA) {
    alert('Formulário válido! Campo B é maior que o campo A.');
    var formulario = document.getElementById("form-numerico");
    formulario.reset();
    } else {
    alert('Campo B precisa ser maior que o campo A para o formulário ser válido.');
    }
});

var formulario = document.getElementById("form-numerico");
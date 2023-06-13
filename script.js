window.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('imcForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    var imc = peso / (altura * altura);
    var classificacao = getClassificacaoIMC(imc);
    
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p><strong>Nome:</strong> ' + nome + '</p>' +
                             '<p><strong>IMC:</strong> ' + imc.toFixed(2) + '</p>' +
                             '<p><strong>Classificação:</strong> ' + classificacao + '</p>';
    
    form.reset();
  });
  
  function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else if (imc < 35) {
      return 'Obesidade grau 1';
    } else if (imc < 40) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  }
});

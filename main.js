//declaração de variaveis

function verificar(numero) {
  if (numero <= 0) {
    alert("Números Negativos e zeros não são aceitos");
    return false;
  } else {
    return true;
  }
}

var botaoContar = document.querySelector(".bloco-botao");
botaoContar.addEventListener("click", function () {
  var texto = document.querySelector(".bloco-paragrafo");
  texto.innerText = "";
  var num_inicio = Number(document.querySelector("input#num-inicio").value);
  var num_fim = Number(document.querySelector("input#num-fim").value);
  var num_passo = Number(document.querySelector("input#num-passo").value);

  if (verificar(num_inicio) && verificar(num_fim) && verificar(num_passo)) {
    while (num_inicio < num_fim) {
      console.log(num_inicio);
      texto.innerText += " " + num_inicio;
      num_inicio = num_inicio + num_passo;
    }
  }
});

//

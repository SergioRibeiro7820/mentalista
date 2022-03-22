var numeroSecreto = Math.random * 10;

function Sorteio() {
  numeroSecreto = Math.round(Math.random() * 10);
}

Sorteio();
var numeroTentativa = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

    if (chute > 10 || chute < 0 || isNaN(chute)) {
    elementoResultado.innerHTML = "Inválido!<p>" + "Digite apenas de 0 a 10<p>"
      + "Ainda resta (" + numeroTentativa + ") tentativas.";
  } else if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, Você acertou!!!<p>" + "O número é " + numeroSecreto + ".<p>Existe um novo número secreto...<p>" + "Consegue adivinhar?!";
    Sorteio();
    numeroTentaiva = 3;
    
  } else {
    --numeroTentativa;
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML = "Quase!<p>" + "Tente um valor menor " + "Tentativas Restantes (" + numeroTentativa + ").";
  } else {
      elementoResultado.innerHTML = "Quase!<p>" + "Tente um valor maior " + "Tentativas Restantes (" + numeroTentativa + ").";
    }
  }
    if (numeroTentativa == 0) {
    elementoResultado.innerHTML = "Poxa, acabaram suas chances!<p>" + "O número era " + numeroSecreto + ".<p>Existe um novo número!<p>" + "Consegue adivinhar?!";
    Sorteio();
    numeroTentativa = 3;
  }
}

//console.log(chute);
/*if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns você Acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Errou";
  }*/

// Desafio ter 3 tentativas, e não conseguindo mostrar o numero secreto.
// A cada mensagem de erro os tentar dizer se o numero escolhido é > ou < que o numero secreto.
// Pesquisa: a diferença entre dois == e 3 ===.
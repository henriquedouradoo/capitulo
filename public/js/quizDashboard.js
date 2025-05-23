const pontuacao = localStorage.getItem("pontuacaoUsuario");

if (pontuacao !== null) {
  const ultimaPontuacao = document.getElementById("b_pontos");
  ultimaPontuacao.innerHTML = `${pontuacao}`;
}

const perfil = localStorage.getItem("perfilQuiz");

if (perfil !== null) {
  const perfilLeitor = document.getElementById("b_perfil");
  perfilLeitor.innerHTML = `${perfil}`;
}

let contador = localStorage.getItem("contadorQuiz") || 0;

const b_qtd = document.getElementById("b_qtd");
b_qtd.innerHTML = `${contador}`;

function quizEnsinamentos() {
  contador++;
  localStorage.setItem("contadorQuiz", contador);
  b_qtd.innerHTML = `${contador}`;
  alert("Direcionando para seu Quiz!");
  setTimeout(() => {
    window.location = "/quiz/quizEnsinamentos.html";
  }, 500);
}

function quizLeitura() {
  contador++;
  localStorage.setItem("contadorQuiz", contador);
  b_qtd.innerHTML = `${contador}`;
  alert("Direcionando para seu Quiz!");
  setTimeout(() => {
    window.location = "/quiz/quizHabitos.html";
  }, 500);
}

function logout() {
  sessionStorage.clear();
  localStorage.clear();
  window.location = "../index.html";
}

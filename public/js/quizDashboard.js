var idUsuario = sessionStorage.ID_USUARIO;

fetch(`/dashboard/perfilLeitor?idUsuario=${idUsuario}`, { cache: 'no-store' })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Erro ao buscar dados");
    })

    .then(dados => {
      console.log("Última pontuação:", dados);

      b_perfil.innerHTML = `${dados.perfil}`
    })
    .catch(error => {
      console.error(error);
    });

let contador = localStorage.getItem("contadorQuiz") || 1;

const b_qtd = document.getElementById("b_qtd");
b_qtd.innerHTML = `${contador}`;



fetch(`/dashboard/ultimaPontuacao?idUsuario=${idUsuario}`, { cache: 'no-store' })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Erro ao buscar dados");
    })
    .then(dados => {
      console.log("Última Pontuação: ", dados);

      b_pontos.innerHTML = `${dados.pontuacao}`
    })
     .catch(error => {
      console.error(error);
    });



function quizEnsinamentos() {

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

const pontuacao = localStorage.getItem('pontuacaoUsuario');

    if (pontuacao !== null) {
    const ultimaPontuacao = document.getElementById('b_pontos')
    ultimaPontuacao.innerHTML = `${pontuacao}`;
  }

  const perfil = localStorage.getItem('perfilQuiz');

    if (perfil !== null) {
    const perfilLeitor = document.getElementById('b_perfil')
    perfilLeitor.innerHTML = `${perfil}`;
  }


function quizEnsinamentos() {

    alert('Direcionando para seu Quiz!')
    setTimeout(() => {
        window.location = '/quiz/quizEnsinamentos.html'
    }, 1000)
    
}

function quizLeitura() {

    alert('Direcionando para seu Quiz!')
    setTimeout(() => {
        window.location = '/quiz/quizHabitos.html'
    }, 1000)
    
}
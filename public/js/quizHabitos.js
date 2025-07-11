 var perfil = '';
    var idQuizHabitos = 1;

    const listaDeQuestoes = [
      {
        pergunta: "Quantos livros você leu nos últimos 12 meses?",
        alternativaA: "Nenhum",
        alternativaB: "1 a 3 livros",
        alternativaC: "4 a 6 livros",
        alternativaD: "Mais de 6 livros",
      },
      {
        pergunta: "Em média, quanto tempo você dedica à leitura por dia?",
        alternativaA: "Menos de 10 minutos",
        alternativaB: "10 a 30 minutos",
        alternativaC: "31 a 60 minutos",
        alternativaD: "Mais de 1 hora"
      },
      {
        pergunta: "Quantas vezes por semana você lê por prazer?",
        alternativaA: "Nenhuma vez",
        alternativaB: "1 a 2 vezes",
        alternativaC: "3 a 4 vezes",
        alternativaD: "5 vezes ou mais"
      },
      {
        pergunta: "Quantos livros você tem atualmente em casa (em papel ou digitais)?",
        alternativaA: "Nenhum",
        alternativaB: "1 a 10",
        alternativaC: "11 a 30",
        alternativaD: "Mais de 30"
      },
      {
        pergunta: "Com que frequência você visita bibliotecas ou livrarias?",
        alternativaA: "Nunca",
        alternativaB: "Raramente (1 vez por semestre)",
        alternativaC: "Ocasionalmente (1 vez por mês)",
        alternativaD: "Frequentemente (toda semana ou quinzenalmente)"
      }
    ];

    document.querySelectorAll(".alternativa").forEach(botao => {
      botao.addEventListener("click", avancarQuestao);
    });

    document.getElementById("botao-iniciar").addEventListener("click", () => {
      document.getElementById("inicio-container").style.display = "none";
      document.getElementById("quiz-container").style.display = "block";
      mostrarQuestao();
    });


    let indiceAtual = 0;
    let pontuacaoTotal = 0;

    function mostrarQuestao() {
      const questao = listaDeQuestoes[indiceAtual];
      document.getElementById("pergunta").innerText = questao.pergunta;
      document.getElementById("A").innerText = questao.alternativaA;
      document.getElementById("B").innerText = questao.alternativaB;
      document.getElementById("C").innerText = questao.alternativaC;
      document.getElementById("D").innerText = questao.alternativaD;
    }

    function definirPerfil(pontos) {
      if (pontos <= 7) return "Leitor Iniciante";
      else if (pontos <= 12) return "Leitor Intermediário";
      else if (pontos <= 17) return "Leitor Avançado";
      else return "Leitor dos Sonhos";
    }

    function avancarQuestao(event) {
      const letras = ['A', 'B', 'C', 'D'];
      const pontosPorAlternativa = [1, 2, 3, 4];

      const letraEscolhida = event.target.id;

      // For para encontrar o índice da alternativa clicada
      let pontos = 0;
      for (let i = 0; i < letras.length; i++) {
        if (letraEscolhida == letras[i]) {
          pontos = pontosPorAlternativa[i];
          break;
        }
      }

      pontuacaoTotal += pontos;
      indiceAtual++;

      if (indiceAtual < listaDeQuestoes.length) {
        mostrarQuestao();
      } else {
        perfil = definirPerfil(pontuacaoTotal);
        enviandoRespostas();
        document.getElementById("quiz-container").innerHTML = `
      <h2>Obrigado por responder!</h2>
      <p id="resultado">Seu perfil de leitura é: <strong>${perfil}</strong></p>
      <p>Pontuação total: ${pontuacaoTotal}</p>
      <a href="../dashboard/dashboard.html"><button>Voltar para a Dashboard</button></a>
    `;
      }
    }

    function enviandoRespostas() {
      var idUsuario = sessionStorage.ID_USUARIO;
      console.log(sessionStorage.ID_USUARIO);

      var perfilLeitor = perfil;

      fetch("/quiz/quizHabitos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuarioServer: idUsuario,
          perfilLeitorServer: perfilLeitor,
          idQuizHabitosServer: idQuizHabitos
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
            alert("Pontuação Registrada com Sucesso!");
            sessionStorage.PERFIL_LEITOR = perfilLeitor;
            localStorage.setItem('perfilQuiz', perfil);
            console.log(sessionStorage.PERFIL_LEITOR);
          } else {
            alert("Erro ao registrar sua pontuação");
          }
        })
        .catch(function (erro) {
          console.error("Erro na requisição: ", erro);
          alert("Erro ao enviar a pontuação.");
        });
    }
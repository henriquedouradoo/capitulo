b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

function logout() {
  sessionStorage.clear();
  localStorage.clear();
  window.location = "../index.html";
}

function dadosDashboard() {
  var idUsuario = sessionStorage.ID_USUARIO;

  if (!idUsuario) {
    console.error("Usuário não está logado ou ID não encontrado");
    return;
  }

  fetch(`/dashboard/ultimaPontuacao?idUsuario=${idUsuario}`, {
    cache: "no-store",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Erro ao buscar dados");
    })
    .then((dados) => {
      console.log("Última pontuação:", dados);

      // formatando a data para formato DD/MM
      let dataFormatada = new Date(dados.dtResposta).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "2-digit",
        }
      );

      const maxPontuacao = 5;

      const pontosCorretos = dados.pontuacao;
      const pontosErrados = maxPontuacao - pontosCorretos;

      const ctx = document.getElementById("myChart");

      if (window.meuGrafico) {
        window.meuGrafico.destroy();
      }

      window.meuGrafico = new Chart(ctx, {
        type: "pie",
        data: {
          labels: [`Pontuação em ${dataFormatada}`, "Pontos Restantes"],
          datasets: [
            {
              data: [pontosCorretos, pontosErrados],
              backgroundColor: ["#888", "#1F1F1F"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#000",
              },
            },
            title: {
              display: true,
              text: `Última Pontuação do Quiz (${dataFormatada})`,
              color: "#000",
            },
          },
        },
      });
    })
    .catch((error) => {
      console.error(error);
    });

  fetch(`/interacao/anotacoesdia/${idUsuario}`)
    .then((res) => res.json())
    .then((dados) => {
      const labels = dados.map((item) => item.dia);
      const valores = dados.map((item) => item.total);

      const ctx = document.getElementById("graficoAnotacoes").getContext("2d");

      if (window.graficoAnotacoes instanceof Chart) {
        window.graficoAnotacoes.destroy();
      }

      window.graficoAnotacoes = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Anotações por Dia",
              data: valores,
              backgroundColor: "#888",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: "#000" },
            },
            x: {
              ticks: { color: "#000" },
            },
          },
          plugins: {
            legend: {
              labels: { color: "#000" },
            },
            title: {
              display: true,
              text: "Anotações por Dia",
              color: "#000",
            },
          },
        },
      });
    })
    .catch((erro) => {
      console.error("Erro ao gerar gráfico de anotações por dia:", erro);
    });


    

  fetch(`/dashboard/perfilLeitor?idUsuario=${idUsuario}`, { cache: "no-store" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Erro ao buscar dados");
    })

    .then((dados) => {
      console.log("Última pontuação:", dados);

      b_conta.innerHTML = `${dados.perfil}`;

      const dataCadastro = new Date(dados.dtCadastro);
      const hoje = new Date();

      const calculoDias = hoje - dataCadastro;

      const diasCadastrado = Math.floor(calculoDias / (1000 * 60 * 60 * 24));

      b_dias.innerHTML = `${diasCadastrado} Dias`;
    })
    .catch((error) => {
      console.error(error);
    });

  fetch(`/interacao/total/${idUsuario}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      const total = dados[0].Total;
      anotacao_total.innerHTML = `${total}`;
    })
    .catch((erro) => {
      console.error("Erro ao carregar total de anotações:", erro);
    });
}

let localizacaoAtual = "";

  fetch("../data/versiculos.json") // versiculos
    .then((response) => response.json())
    .then((data) => {
      const versiculoDashboard = document.getElementById("versiculo");
      const indiceAleatorio = Math.floor(Math.random() * data.length);

      const versiculoSelecionado = data[indiceAleatorio];
      localizacaoAtual = versiculoSelecionado.localizacao;

      versiculoDashboard.innerHTML = `
        <h3>"${versiculoSelecionado.versiculo}"</h3>
        <h4>${versiculoSelecionado.localizacao}</h4>`;
    })
    .catch((error) => {
      console.error("Erro ao carregar o JSON:", error);
    });

  function anotacao() {
    const anotacaoTexto = document.getElementById("anotacaoText").value.trim();
    const statusSelecionado = document.querySelector('input[name="opcao"]:checked');
    const idUsuario = sessionStorage.ID_USUARIO;

    if (!idUsuario) {
      alert("Usuário não autenticado. Faça login novamente.");
      return;
    }

    if (!anotacaoTexto || !statusSelecionado || !localizacaoAtual) {
      alert("Preencha a anotação, selecione uma interação e aguarde o versículo carregar.");
      return;
    }

    fetch("/interacao/versiculo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuario,
        anotacaoServer: anotacaoTexto,
        statusServer: statusSelecionado.value,
        localizacaoServer: localizacaoAtual
      }),
    })
      .then((resposta) => {
        if (resposta.ok) {
          alert("Anotação registrada com sucesso!");
          document.getElementById("anotacaoText").value = "";
          document.querySelector('input[name="opcao"]:checked').checked = false;

          window.location = '../dashboard/dashboard.html'
        } else {
          alert("Erro ao registrar a anotação.");
        }
      })
      .catch((erro) => {
        console.error("Erro na requisição:", erro);
        alert("Erro ao enviar os dados.");
      });
  }

  function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location = "../index.html";
  }
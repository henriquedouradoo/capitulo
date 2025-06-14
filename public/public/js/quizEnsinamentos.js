 const listaDeQuestoes = [
        {
            pergunta: "“Tudo posso naquele que me fortalece.” (Filipenses 4:13)",
            alternativaA: "Buscar reconhecimento dos outros",
            alternativaB: "Depender da própria força",
            alternativaC: "Confiar em Deus para superar desafios",
            alternativaD: "Evitar mudanças na vida",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "“A resposta branda desvia o furor, mas a palavra dura suscita a ira.” (Provérbios 15:1)",
            alternativaA: "Falar com autoridade sempre resolve",
            alternativaB: "Evitar conversas difíceis",
            alternativaC: "Ignorar os conflitos",
            alternativaD: "Ter calma e gentileza nas discussões",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "“Onde está o seu tesouro, aí também estará o seu coração.” (Mateus 6:21)",
            alternativaA: "O que você valoriza define suas prioridades",
            alternativaB: "Guardar dinheiro é mais importante que tudo",
            alternativaC: "Nunca mude de opinião",
            alternativaD: "Trabalhe apenas pelo sucesso material",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "“Porque Deus não nos deu espírito de covardia, mas de poder, amor e equilíbrio.” (2 Timóteo 1:7)",
            alternativaA: "Devemos agir com medo",
            alternativaB: "O medo é natural e deve nos controlar",
            alternativaC: "Somos chamados a agir com coragem, amor e sabedoria",
            alternativaD: "Devemos evitar responsabilidades",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "“Se alguém quiser acompanhar-me, negue-se a si mesmo, tome a sua cruz e siga-me.” (Mateus 16:24)",
            alternativaA: "Evite sacrifícios sempre que puder",
            alternativaB: "Seguir princípios exige esforço e renúncia",
            alternativaC: "A vida deve ser fácil e sem desafios",
            alternativaD: "Só siga se tudo estiver garantido",
            alternativaCorreta: "alternativaB"
        }
    ]

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length
    var idQuizEnsinamentos = 1;
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function onloadEsconder() {
        document.getElementById('pontuacao').style.display = "none"
        document.getElementById('jogo').style.display = "none"
        document.getElementById('btnRetorno').style.display = "none"
    }

    function iniciarQuiz() {
        document.getElementById('pontuacao').style.display = "flex"
        document.getElementById('jogo').style.display = "flex"
        document.getElementById('btnIniciarQuiz').style.display = "none"
        document.getElementById('btnRetorno').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            alert("Atenção... a próxima é a ultima questão!")
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
        limparCoresBackgroundOpcoes()
    }

    function dashboard() {
        // atualiza a página
        alert('Direcionando para Dashboard!')
        setTimeout(() => {
            window.location = '/dashboard/dashboard.html'
        }, 1000);
    }

    function retornarDashboard() {
        alert('Direcionando para Dashboard!')
        setTimeout(() => {
            window.location = '/dashboard/dashboard.html'
        }, 1000);
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id

                document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    function limparCoresBackgroundOpcoes() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
            document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function finalizarJogo() {
        let textoParaMensagemFinal = null
        let classComCoresParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = ""
            classComCoresParaMensagemFinal = "text-danger-with-bg"
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = ""
            classComCoresParaMensagemFinal = "text-warning-with-bg"
        }
        else if (porcentagemFinalDeAcertos >= 0.9) {
            textoParaMensagemFinal = ""
            classComCoresParaMensagemFinal = "text-success-with-bg"
        }

        textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões."


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal)
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        document.getElementById('jogo').classList.add("text-new-gray")

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = false

        localStorage.setItem("pontuacaoUsuario", pontuacaoFinal);

        enviandoRespostas();

    }

    function enviandoRespostas() {
        var idUsuario = sessionStorage.ID_USUARIO;
        console.log(sessionStorage.ID_USUARIO);

        var pontuacaoUsuario = pontuacaoFinal;

        fetch("/quiz/quizEnsinamentos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                pontuacaoServer: pontuacaoUsuario,
                idQuizEnsinamentosServer: idQuizEnsinamentos
            }),
        })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Pontuação Registrada com Sucesso!");
                sessionStorage.ULTIMA_PONTUACAO = pontuacaoUsuario;
                localStorage.setItem('pontuacaoQuiz', pontuacaoFinal);
                console.log(sessionStorage.ULTIMA_PONTUACAO);
            } else {
                alert("Erro ao registrar sua pontuação");
            }
        })
        .catch(function (erro) {
            console.error("Erro na requisição: ", erro);
            alert("Erro ao enviar a pontuação.");
        });
    }
